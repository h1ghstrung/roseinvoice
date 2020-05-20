/* ticket.js file for processing order tickets. Greensboro and Burlington stores. Can be expanded to 
other locations as needed 
*/

// Globals
let priceList = {};
var getId = document.getElementById.bind(document);
var getClass = document.getElementsByClassName.bind(document);
var allPrices = [];

// toggle adding or removing "printThis" class to elements based on id
const checkPrint = (elemId) => {
  if (elemId.classList.contains("printThis")) {
    elemId.classList.remove("printThis");
  } else {
    elemId.classList.add("printThis");
  }
  return
}

// Control for determining job code
const control = (jobType="BW", mediaType="Bond", size="ARCHD") => {
  /* receives order information and returns a job code and prices index for pricing reference */
  let mediaIndex = "";
  let priceCode = "";
  let setupJob = true;
  let setupPrice = false;
  if (jobType == "BW") {
    priceCode = "bw";
    setupJob = false;
  } else if (jobType == "LineCol") {
    priceCode = "cline";
  } else if (jobType == "MedCol") {
    priceCode = "cmid";
  } else if (jobType == "FullCol") {
    priceCode = "cfull";
  } else if (jobType == "BScan"){
    priceCode = "bscan";
  } else if (jobType == "CScan") {
    priceCode = "cscan";
  } else if(jobType == "Cut") {
    priceCode = "cut";
    setupJob = false;
  } else if (jobType == "SBook") {
    priceCode = "sbook";
    setupJob = false;
  } else if (jobType == "Mount") {
    priceCode = "mount";
  }

  if (jobType == "Cut" || jobType == "SBook") {
    priceCode += "01";
  } else if (size == "ANSIA") {
    priceCode += "01";
  } else if (size == "ANSIB") {
    priceCode += "02";
  } else if (size == "ARCHB") {
    priceCode += "03";
  } else if (size == "ARCHC") {
    priceCode += "05";
    setupPrice = true;
  } else if (size == "ARCHD") {
    priceCode += "06";
    setupPrice = true;
  } else if (size == "ARCHE1") {
    priceCode += "07";
    setupPrice = true;
  } else if (size == "ARCHE") {
    priceCode += "08";
    setupPrice = true;
  } else if (size == "CUST") {
    priceCode += "09";
  }
  // bond first 10, bond after 10, mylar, plain vellum, erasable vellum, glossy, satin
  if (mediaType === "Bond") {
    mediaIndex = 0;
  } else if (mediaType === "Mylar") {
    mediaIndex = 2;
  } else if (mediaType === "Glossy") {
    mediaIndex = 5;
  } else if (mediaType === "Vellum") {
    mediaIndex = 3;
  } else if (mediaType === "ERVellum") {
    mediaIndex = 4;
  } else if (mediaType === "Satin") {
    mediaIndex = 6;
  }

  if (setupJob && setupPrice) {
    checkSetupFee(true);
  }
  return [priceCode, mediaIndex];
}

//Validate Data for required fields
const checkRequiredFields = () => {
  //if line is not filled in add class "fillme"
  let reqs = getClass("required");
  let setAlert = false;
  for (item of reqs) {
    if (item.value != "" && item.classList.contains('fillme')) {
      item.classList.remove('fillme');
    } else if (item.value == "") {
      item.classList.add('fillme');
      setAlert = true;
    }
  }
  if (setAlert) {
    alert("Please fill in required fields.");
  } 
}

//Check for quantity value in line
const checkQuant = () => {
  let quants = [];
  let lineQuants = getClass('quantity');
  for (item of lineQuants) {
    if (item.value > 0) {
    quants.push(parseInt(item.value, 10));
    } else {
      quants.push(0);
      /*
      // If the quantity for the line is empty hide the whole line from printing
      let lineIndex = Array.from(lineQuants).indexOf(item);
      lineQuants[lineIndex].parentElement.parentElement.parentElement.classList.add("webonly");
      */
    }
  }
  return quants
}

//Calculate Line Items
const calcLinePrice = (qty, priceCode, priceCat, priceIndex) => {
  if (priceCat != "bw") {
    let lineCost = null;
    lineCost = priceList[priceCat][priceCode].prices[priceIndex]*qty;
    allPrices.push(lineCost);
    return lineCost
  } else if (priceCat == "bw") {
      let linePrice = 0
      if (qty <= 10) {
        linePrice = priceList[priceCat][priceCode].prices[priceIndex] * qty;
      }
      else if (qty > 10) {
        linePrice = (priceList[priceCat][priceCode].prices[priceIndex] * 10) + ((priceList[priceCat][priceCode].prices[priceIndex+1]) *(qty-10));
      }
      allPrices.push(linePrice);
      return linePrice
    }
    return
}

//Check for Setup
const checkSetupFee = (isFee) => {
  let setupCheck = getId("setupCheckbox");
  let setupCost = getId("setupCost");
  if (isFee && setupCheck.checked == false) {
    alert("This order should have a setup charge.");
    setupCost.classList.add("fillme");
  }
}

//Check for Discount
const checkForDiscount = () => {
  let discountChecked = getId("dicountApply");
  if (discountChecked.checked) {
    checkPrint(getId("discountRow"));
  }
  return discountChecked.checked
}

//Calculate discount
const calcDiscount = () => {
  let discountPercent = parseFloat(getId("discountAmount").value);
  let discountPrice = calcSubTotal(allPrices) * (discountPercent/100);
  getId("dicountPrice").textContent = "-" + discountPrice.toFixed(2);
  getId("dicountPrice").value = discountPrice;
  return discountPrice
}

//Check if tax exempt
const checkExempt = () => {
  let taxExempt = getId("taxExempt");
  if (taxExempt.checked) {
    checkPrint (taxExempt, true);
  }
  return taxExempt.checked
}

//Calculate Subtotal
const calcSubTotal = (linePrices) => {
  let subTotal = linePrices.reduce(add);
  let setupChecked = getId("setupCheckbox");
  if (setupChecked.checked) {
    subTotal += parseFloat(getId("setupCost").value)
  }
  return subTotal
}

//Calculate tax if not exempt
const calcTax = (subTotal) => {
  taxRate = .0675
  orderTax = Math.ceil((subTotal * taxRate) * Math.pow(10, 2)) / Math.pow(10, 2);
  return orderTax
}

//Apply or remove setup fee when state is changed for checkbox
const doesSetup = () => {
  let setupCheck = getId("setupCheckbox");
  let setupCost = getId("setupCost");
  let setupPrice = getId("setupPrice");
    
  if (setupCheck.checked) {
    checkPrint(setupCost);
    checkPrint(setupPrice);
    checkPrint(getId("setupReason"));
    checkPrint(getId("setupBox"));
    if (setupCost.value == "") {
      setupCost.textContent = setupCost.placeholder;
      setupCost.value = setupCost.placeholder;
    }
    setupPrice.textContent = parseFloat(setupCost.value).toFixed(2);
    setupPrice.value = parseFloat(setupCost.value);
  } else if (!setupCheck.checked){
    checkPrint(setupCost);
    checkPrint(setupPrice);
    checkPrint(getId("setupReason"));
    checkPrint(getId("setupBox"));
    setupPrice.textContent = "";
    setupPrice.value = 0;
  }
  setupCost.classList.remove("fillme");
}

const setupChange = (amount) => {
  let isChecked = getId("setupCheckbox").checked;
  if (isChecked) {
    getId("setupPrice").value = amount;
    getId("setupPrice").textContent = amount;
  }
  console.log(typeof amount, amount);
}

//Calculate Total
const calcTotal = (sub, tax) => {
  return sub+tax
}

// Calculate square footage from inches
const inToSqFt = (widthInch, lengthInch) => {
  widthFeet = Math.round((widthInch / 12) * 1000)/1000
  lengthFeet = Math.round((lengthInch / 12) * 1000)/1000
  return {widthFeet, lengthFeet}
}

// Calculate per page cost of custom sizes.
const otherSize = (width, length, priceCode) => {
  // Takes width and length in inches
  // Returns the price per page at that size
  let priceCat = priceCode.slice(0, -2);
  let priceOther = .29;
  pagePrice = Math.round((width * length * priceOther) * 100) / 100
  // console.log(args.widthFeet, args.lengthFeet);
  return pagePrice
}

const customJob = () => {
  let wx = getId("widthx");
  let wy = getId("widthy");
  let custQty = getId("qty7");
  let custJob = getId("job7");
  let custMed = getId("paper7");
  let dims = inToSqFt(wx.value, wy.value);
  let priceCode = control(custJob.value, custMed.value, "CUST")
  let priceCat = priceCode[0].slice(0, -2);
  let priceIndex = priceCode[1];
  checkPrint(wx);
  checkPrint(wy);
  checkPrint(custQty);
  checkPrint(custMed);
  checkPrint(custJob);
  // console.log(priceCat, priceCode[0], priceIndex);
  // console.log(dims, typeof dims.widthFeet, typeof dims.lengthFeet)
  let custCost = priceList[priceCat][priceCode[0]].prices[priceIndex] * dims.widthFeet * dims.lengthFeet * parseInt(custQty.value)
  allPrices.push(custCost);
  return custCost
}

const clickBurl = () => {
  let cost = getId("setupCost");
  cost.placeholder = "3.50";
}

// Set price scale for store based off which radio button
const setPriceScale = (scale) => {
  let setStore = getId("storeLocation");
  switch(scale) {
    case "greensboroPrices":
      priceList = gsoPrices;
      setStore.textContent = "Greensboro";
      break;
    case "burlingtonPrices":
      priceList = burlPrices;
      setStore.textContent = "Burlington";
      break;
    default:
      priceList = gsoPrices;
      setStore.textContent = "Greensboro";
  }
}

// Check for Custom Size Job
const checkCustSize = () => {
  if (getId("custCheck").checked) {
    let custPrice = getId("Price7");
    let custValue = customJob();
    custPrice.value = custValue;
    custPrice.textContent = custValue.toFixed(2);
    checkPrint(getId("custSizeRow"));   
  }
}

// Calculate Line Items
const calcCustLine = () => {
  let lineQuantities = checkQuant();
  let jobType = getClass("jobs");
  let mediaType = getClass("paper");
  let size = getClass("sizes");

  if (lineQuantities.some(el => el > 0)) {
    //call a function to process the lines with quantities.
    for ( i=0; i<lineQuantities.length; i++ ) {
      if (lineQuantities[i] <= 0) {
        null
      } else {
        // get values of different columns and send to function for pricing.
        let lineCost = null;
        let linePost = 0;
        let priceValues = control(jobType[i].value, mediaType[i].value, size[i].value);
        let priceCode = priceValues[0];
        let priceCat = priceCode.slice(0, -2);
        let priceIndex = priceValues[1];
        lineCost = calcLinePrice(lineQuantities[i], priceCode, priceCat, priceIndex);
        linePost = "Price" + ((i+1).toString()); // target for value is "Price" + i+1 as a string
        getId(linePost).classList.remove("fillme");
        if (lineQuantities[i] > 0 && lineCost == "0") {
          alert("That job type, size, and media type combination is not allowed.");
          getId(linePost).classList.add("fillme");
        }
        getId(linePost).textContent = lineCost.toFixed(2);
        let lineItem = (i+1).toString();
        let [qty, job, paper, lineSize, price] = 
          [getId("qty"+ lineItem),
           getId("job"+ lineItem),
           getId("paper"+ lineItem), 
           getId("size"+ lineItem),
           getId("Price"+ lineItem)];
        let lineArr = [qty, job, paper, lineSize, price];
        for (item=0; item<lineArr.length; item++) {
          if (!lineArr[item].classList.contains("printThis")) {
            checkPrint(lineArr[item]);
          }
        }
      }
    }
  }
}

// Handle incoming click for when the user selects the "Calculate" button
const handleClick = () => {
  let checkHasTotal = getId("orderTotal").textContent;
  if (checkHasTotal > 0) {
    getId("orderTotal").textContent = "";
    getId("orderTax").textContent = "";
    getId("subTotal").textContent = "";
    allPrices = [];
   }

  //Validate Data for required fields
  checkRequiredFields()

  let subTots = 0;
  let priceScale = document.querySelector('input[name="radioPrices"]:checked').value;

  // Set price scale depending on store location
  setPriceScale(priceScale);

  // Check for Custom Size Job
  checkCustSize();
  
  // Calculate Line Items
  calcCustLine();

  //Calculate Sub Total
  subTots = calcSubTotal(allPrices);
  if (checkForDiscount()) {
    let discountPrice = calcDiscount();
    subTots -= discountPrice;
  }
  getId("subTotal").textContent = subTots.toFixed(2);
  
  // Check for Tax Exempt and apply tax to non-exempt
  if (checkExempt()) {
    let showTax = getId("orderTax");
    showTax.value = 0;
    showTax.textContent = "0.00";
    // checkPrint(showTax);
  } else {
    let orderTax = calcTax(subTots);
    let showTax = getId("orderTax");
    showTax.value = orderTax;
    showTax.textContent = orderTax.toFixed(2);
  } 
  
  // Add order Total
  let orderTotal = calcTotal(subTots, getId("orderTax").value);
  getId("orderTotal").textContent = orderTotal.toFixed(2);
  getId("orderTotal").value = orderTotal;
  // Show Print button
  getId("printButton").classList.remove("hidden");
}

const clearDivs = () => {
  location.reload();
}

// function for adding two numbers. Easy!
const add = (a, b) => a + b