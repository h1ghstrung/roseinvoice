/* test.js file for testing new code for invoice.html */

let priceList = {} // JSON.parse(priceList)
// bond first 10, bond after 10, mylar, plain vellum, erasable vellum, glossy, satin
/*
bw, cline, cmid, cfull - multi part prices
cscan, bscan, mount - single prices based on size
cut, sbook - single price regardless of size 
*/

let gsoPrices =
{
  "bw":{
    "bw01":{
      "size": "8.5 x 11",
      "prices": [0.12, 0.12, null, null, null, null, null]
    },
    "bw02":{
      "size": "11 x 17",
      "prices": [0.42, 0.42, null, null, null, null, null]
    },
    "bw03":{
      "size": "12 x 18",
      "prices": [0.95, 0.95, null, null, null, null, null]
    },
    "bw04":{
      "size": "15 x 21",
      "prices": [1.70, 0.98, null, null, null, null, null]
    },
    "bw05":{
      "size": "18 x 24",
      "prices": [1.70, 1.15, 8.10, 4.95, 5.80, null, null]
    },
    "bw06":{
      "size": "24 x 36",
      "prices": [1.70, 1.45, 14.80, 7.45, 8.75, null, null]
    },
    "bw07":{
      "size": "30 x 42",
      "prices": [2.30, 1.75, 22.20, 8.55, 9.95, null, null]
    },
    "bw08":{
      "size": "36 x 48",
      "prices": [3.65, 2.85, 30.84, 15.48, 18.12, null, null]
    },
    "bw09":{
      "size": "Custom",
      "prices": [0.29, 0.29, 2.70, 1.65, 1.93, null, null]
    }
  },
  "cline": {
    "cline01":{
      "size": "8.5 x 11",
      "prices": [0.69, 0.69, null, null, null, 1.50, 1.50]
    },
    "cline02":{
      "size": "11 x 17",
      "prices": [1.49, 1.49, null, null, null, null, null]
    },
    "cline03":{
      "size": "12 x 18",
      "prices": [1.79, 1.79, null, null, null, null, null]
    },
    "cline04":{
      "size": "15 x 21",
      "prices": [4.95, 4.95, null, null, null, 6.95, 6.95]
    },
    "cline05":{
      "size": "18 x 24",
      "prices": [6.25, 6.25, null, null, null, 8.25, 8.25]
    },
    "cline06":{
      "size": "24 x 36",
      "prices": [9.90, 9.90, null, null, null, 12.00, 12.00]
    },
    "cline07":{
      "size": "30 x 42",
      "prices": [14.45, 14.45, null, null, null, 17.50, 17.50]
    },
    "cline08":{
      "size": "36 x 48",
      "prices": [19.80, 19.80, null, null, null, 24.00, 24.00]
    },
    "cline09":{
      "size": "Custom",
      "prices": [1.65, 1.65, null, null, null, 2.38, 2.38]
    }
  },
  "cmid": {
    "cmid01":{
      "size": "8.5 x 11",
      "prices": [0.69, null, null, null, null, 1.50, 1.50]
    },
    "cmid02":{
      "size": "11 x 17",
      "prices": [1.49, null, null, null, null, null, null]
    },
    "cmid03":{
      "size": "12 x 18",
      "prices": [1.79, null, null, null, null, null, null]
    },
    "cmid04":{
      "size": "15 x 21",
      "prices": [12.50, null, null, null, null, 15.00, 15.00]
    },
    "cmid05":{
      "size": "18 x 24",
      "prices": [15.50, null, null, null, null, 18.50, 18.50]
    },
    "cmid06":{
      "size": "24 x 36",
      "prices": [27.00, null, null, null, null, 35.00, 35.00]
    },
    "cmid07":{
      "size": "30 x 42",
      "prices": [42.00, null, null, null, null, 51.00, 51.00]
    },
    "cmid08":{
      "size": "36 x 48",
      "prices": [54.00, null, null, null, null, 69.00, 69.00]
    },
    "cmid09":{
      "size": "Custom",
      "prices": [4.50, 4.50, null, null, null, 6.00, 6.00]
    }
  },
  "cfull": {
    "cfull01":{
      "size": "8.5 x 11",
      "prices": [0.69, null, null, null, null, 1.50, 1.50]
    },
    "cfull02":{
      "size": "11 x 17",
      "prices": [1.49, null, null, null, null, null, null]
    },
    "cfull03":{
      "size": "12 x 18",
      "prices": [1.79, null, null, null, null, null, null]
    },
    "cfull04":{
      "size": "15 x 21",
      "prices": [18.00, null, null, null, null, 22.00, 22.00]
    },
    "cfull05":{
      "size": "18 x 24",
      "prices": [24.75, null, null, null, null, 30.00, 30.00]
    },
    "cfull06":{
      "size": "24 x 36",
      "prices": [49.50, null, null, null, null, 60.00, 60.00]
    },
    "cfull07":{
      "size": "30 x 42",
      "prices": [72.19, null, null, null, null, 87.50, 87.50]
    },
    "cfull08":{
      "size": "36 x 48",
      "prices": [99.00, null, null, null, null, 120.00, 120.00]
    },
    "cfull09":{
      "size": "Custom",
      "prices": [8.25, 8.25, null, null, null, 10.00, 10.00]
    }
  },
  "cscan":{
    "cscan01":{
      "size": "8.5 x 11",
      "prices": [0.39]
    },
    "cscan02":{
      "size": "11 x 17",
      "prices": [2.50]
    },
    "cscan03":{
      "size": "12 x 18",
      "prices": [3.00]
    },
    "cscan04":{
      "size": "15 x 21",
      "prices": [4.50]
    },
    "cscan05":{
      "size": "18 x 24",
      "prices": [5.00]
    },
    "cscan06":{
      "size": "24 x 36",
      "prices": [5.75]
    },
    "cscan07":{
      "size": "30 x 42",
      "prices": [6.90]
    },
    "cscan08":{
      "size": "36 x 48",
      "prices": [8.90]
    }
  },
  "bscan":{
    "bscan01":{
      "size": "8.5 x 11",
      "prices": [0.12]
    },
    "bscan02":{
      "size": "11 x 17",
      "prices": [0.29]
    },
    "bscan03":{
      "size": "12 x 18",
      "prices": [0.65]
    },
    "bscan04":{
      "size": "15 x 21",
      "prices": [0.95]
    },
    "bscan05":{
      "size": "18 x 24",
      "prices": [1.05]
    },
    "bscan06":{
      "size": "24 x 36",
      "prices": [1.15]
    },
    "bscan07":{
      "size": "30 x 42",
      "prices": [1.35]
    },
    "bscan08":{
      "size": "36 x 48",
      "prices": [1.80]
    }
  },
  "cut": {
    "cut01":{
      "size": "8.5 x 11",
      "prices": [2.00]
    }
  },
  "sbook": {
    "sbook01":{
      "size": "8.5 x 11",
      "prices": [3.50]
    }
  },
  "mount": {
    "mount01":{
      "size": "8.5 x 11",
      "prices": [0.81]
    },
    "mount02":{
      "size": "11 x 17",
      "prices": [1.63]
    },
    "mount03":{
      "size": "12 x 18",
      "prices": [1.88]
    },
    "mount04":{
      "size": "15 x 21",
      "prices": [2.73]
    },
    "mount05":{
      "size": "18 x 24",
      "prices": [6.00]
    },
    "mount06":{
      "size": "24 x 36",
      "prices": [12.00]
    },
    "mount07":{
      "size": "30 x 42",
      "prices": [17.50]
    },
    "mount08":{
      "size": "36 x 48",
      "prices": [24.00]
    },
    "mount09":{
      "size": "Custom",
      "prices": [1.25]
    }
  }
}

let burlPrices = 
{
  "bw":{
    "bw01":{
      "size": "8.5 x 11",
      "prices": [0.12, 0.12, null, null, null, null, null]
    },
    "bw02":{
      "size": "11 x 17",
      "prices": [0.35, 0.35, null, null, null, null, null]
    },
    "bw03":{
      "size": "12 x 18",
      "prices": [1.00, 1.00, null, null, null, null, null]
    },
    "bw04":{
      "size": "15 x 21",
      "prices": [1.00, 1.00, null, null, null, null, null]
    },
    "bw05":{
      "size": "18 x 24",
      "prices": [1.25, 1.25, 8.10, null, null, null, null]
    },
    "bw06":{
      "size": "24 x 36",
      "prices": [1.45, 1.45, 14.80, null, null, null, null]
    },
    "bw07":{
      "size": "30 x 42",
      "prices": [2.10, 2.10, 22.20, null, null, null, null]
    },
    "bw08":{
      "size": "36 x 48",
      "prices": [3.95, 3.95, null, null, null, null, null]
    },
    "bw09":{
      "size": "Custom",
      "prices": [0.29, 0.29, null, null, null, null, null]
    }
  },
  "cline": {
    "cline01":{
      "size": "8.5 x 11",
      "prices": [0.69, 0.69, null, null, null, null, null]
    },
    "cline02":{
      "size": "11 x 17",
      "prices": [1.35, 1.35, null, null, null, null, null]
    },
    "cline03":{
      "size": "12 x 18",
      "prices": [1.79, 1.79, null, null, null, null, null]
    },
    "cline04":{
      "size": "15 x 21",
      "prices": [4.95, 4.95, null, null, null, 6.95, 6.95]
    },
    "cline05":{
      "size": "18 x 24",
      "prices": [6.25, 6.25, null, null, null, 8.25, 8.25]
    },
    "cline06":{
      "size": "24 x 36",
      "prices": [9.90, 9.90, null, null, null, 12.00, 12.00]
    },
    "cline07":{
      "size": "30 x 42",
      "prices": [14.45, 14.45, null, null, null, 17.50, 17.50]
    },
    "cline08":{
      "size": "36 x 48",
      "prices": [19.80, 19.80, null, null, null, 24.00, 24.00]
    },
    "cline09":{
      "size": "Custom",
      "prices": [1.65, 1.65, null, null, null, 2.38, 2.38]
    }
  },
  "cmid": {
    "cmid01":{
      "size": "8.5 x 11",
      "prices": [0.69, null, null, null, null, null, null]
    },
    "cmid02":{
      "size": "11 x 17",
      "prices": [1.35, null, null, null, null, null, null]
    },
    "cmid03":{
      "size": "12 x 18",
      "prices": [1.79, null, null, null, null, null, null]
    },
    "cmid04":{
      "size": "15 x 21",
      "prices": [12.50, 12.50, null, null, null, 15.00, 15.00]
    },
    "cmid05":{
      "size": "18 x 24",
      "prices": [15.50, 15.50, null, null, null, 18.50, 18.50]
    },
    "cmid06":{
      "size": "24 x 36",
      "prices": [27.00, 27.00, null, null, null, 35.00, 35.00]
    },
    "cmid07":{
      "size": "30 x 42",
      "prices": [42.00, 42.00, null, null, null, 51.00, 51.00]
    },
    "cmid08":{
      "size": "36 x 48",
      "prices": [54.00, 54.00, null, null, null, 69.00, 69.00]
    },
    "cmid09":{
      "size": "Custom",
      "prices": [4.50, 4.50, null, null, null, 6.00, 6.00]
    }
  },
  "cfull": {
    "cfull01":{
      "size": "8.5 x 11",
      "prices": [0.69, null, null, null, null, null, null]
    },
    "cfull02":{
      "size": "11 x 17",
      "prices": [1.35, null, null, null, null, null, null]
    },
    "cfull03":{
      "size": "12 x 18",
      "prices": [1.79, null, null, null, null, null, null]
    },
    "cfull04":{
      "size": "15 x 21",
      "prices": [18.00, 18.00, null, null, null, 22.00, 22.00]
    },
    "cfull05":{
      "size": "18 x 24",
      "prices": [24.75, 24.75, null, null, null, 30.00, 30.00]
    },
    "cfull06":{
      "size": "24 x 36",
      "prices": [49.50, 49.50, null, null, null, 60.00, 60.00]
    },
    "cfull07":{
      "size": "30 x 42",
      "prices": [72.19, 72.19, null, null, null, 87.50, 87.50]
    },
    "cfull08":{
      "size": "36 x 48",
      "prices": [99.00, 99.00, null, null, null, 120.00, 120.00]
    },
    "cfull09":{
      "size": "Custom",
      "prices": [8.25, 8.25, null, null, null, 10.00, 10.00]
    }
  },
  "cscan":{
    "cscan01":{
      "size": "8.5 x 11",
      "prices": [0.69]
    },
    "cscan02":{
      "size": "11 x 17",
      "prices": [1.35]
    },
    "cscan03":{
      "size": "12 x 18",
      "prices": [1.50]
    },
    "cscan04":{
      "size": "15 x 21",
      "prices": [4.00]
    },
    "cscan05":{
      "size": "18 x 24",
      "prices": [4.50]
    },
    "cscan06":{
      "size": "24 x 36",
      "prices": [5.75]
    },
    "cscan07":{
      "size": "30 x 42",
      "prices": [5.90]
    },
    "cscan08":{
      "size": "36 x 48",
      "prices": [8.90]
    }
  },
  "bscan":{
    "bscan01":{
      "size": "8.5 x 11",
      "prices": [0.12]
    },
    "bscan02":{
      "size": "11 x 17",
      "prices": [0.35]
    },
    "bscan03":{
      "size": "12 x 18",
      "prices": [1.00]
    },
    "bscan04":{
      "size": "15 x 21",
      "prices": [1.00]
    },
    "bscan05":{
      "size": "18 x 24",
      "prices": [1.00]
    },
    "bscan06":{
      "size": "24 x 36",
      "prices": [1.25]
    },
    "bscan07":{
      "size": "30 x 42",
      "prices": [1.75]
    },
    "bscan08":{
      "size": "36 x 48",
      "prices": [2.75]
    }
  },
  "cut": {
    "cut01":{
      "size": "8.5 x 11",
      "prices": [2.00]
    }
  },
  "sbook": {
    "sbook01":{
      "size": "8.5 x 11",
      "prices": [3.50]
    }
  },
  "mount": {
    "mount01":{
      "size": "8.5 x 11",
      "prices": [0.81]
    },
    "mount02":{
      "size": "11 x 17",
      "prices": [1.63]
    },
    "mount03":{
      "size": "12 x 18",
      "prices": [1.88]
    },
    "mount04":{
      "size": "15 x 21",
      "prices": [2.73]
    },
    "mount05":{
      "size": "18 x 24",
      "prices": [6.00]
    },
    "mount06":{
      "size": "24 x 36",
      "prices": [12.00]
    },
    "mount07":{
      "size": "30 x 42",
      "prices": [17.50]
    },
    "mount08":{
      "size": "36 x 48",
      "prices": [24.00]
    },
    "mount09":{
      "size": "Custom",
      "prices": [1.25]
    }
  },
  "laminate": { //Add lamination option to form as a Burlington selection
    "lam01":{
      "size": "8.5 x 11",
      "prices": [2.00]
    },
    "lam02":{
      "size": "11 x 17",
      "prices": [4.00]
    },
    "lam03":{
      "size": "12 x 18",
      "prices": [null]
    },
    "lam04":{
      "size": "15 x 21",
      "prices": [7.50]
    },
    "lam05":{
      "size": "18 x 24",
      "prices": [9.00]
    },
    "lam06":{
      "size": "24 x 36",
      "prices": [18.00]
    },
    "lam07":{
      "size": "30 x 42",
      "prices": [35.00]
    },
    "lam08":{
      "size": "36 x 48",
      "prices": [48.00]
    },
    "lam09":{
      "size": "Custom",
      "prices": [null]
    }
  }
}


// Globals
var getId = document.getElementById.bind(document);
var getClass = document.getElementsByClassName.bind(document);
var allPrices = [];

// Check to see if en element has the class "printThis". If so remove it, if not add it.
const checkPrint = (elemId, sibling = false) => {
  if (elemId.classList.contains("printThis")) {
    elemId.classList.remove("printThis");
  } else {
    elemId.classList.add("printThis");
  }
  if (sibling && elemId.classList.contains("printThis")) {
    elemId.nextElementSibling.classList.add('printThis');
  } else if (!elemId.classList.contains("printThis")) {
    elemId.nextElementSibling.classList.remove('printThis')
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
    checkPrint(setupCheck, true);
    if (setupCost.value == "") {
      setupCost.textContent = "7.50";
      setupCost.value = "7.50";
    }
    setupPrice.textContent = parseFloat(setupCost.value).toFixed(2);
    setupPrice.value = parseFloat(setupCost.value);
  } else {
    checkPrint(setupCost);
    checkPrint(setupPrice);
    checkPrint(getId("setupReason"));
    setupPrice.textContent = "";
    setupPrice.value = 0;
  }
  setupCost.classList.remove("fillme");
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

  let burlingtonPrices = getId("burlingtonPrices");
  let lineQuantities = checkQuant();
  let jobType = getClass("jobs");
  let mediaType = getClass("paper");
  let size = getClass("sizes");
  let custSize = getId("custCheck");
  let subTots = 0;

  if (burlingtonPrices.checked) {
    priceList = burlPrices;
  } else {
    priceList = gsoPrices;
  }

  //Calculate Line Items
  if (custSize.checked) {
    let custPrice = getId("Price7");
    let custValue = customJob();
    custPrice.value = custValue;
    custPrice.textContent = custValue.toFixed(2);
    checkPrint(getId("custSizeRow"));   
  }
  
  if (lineQuantities.some(el => el > 0)) {
    //call a function to process the lines with quants.
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
        linePost = "Price" + ((i+1).toString()); // target for value is "Price" + i+1
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
          checkPrint(lineArr[item]);
        }
      }
    }
  } 

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