/* funcs.js file for invoice.html */

let allPrices = [];

// function for adding two numbers. Easy!
const add = (a, b) => a + b

// import prices from "prices.json";
let prices = 
{
  "bw":{
    "bw01":{
      "size": "8.5 x 11",
      "price1": 0.12,
      "price11": 0.12
    },
    "bw02":{
      "size": "11 x 17",
      "price1": 0.42,
      "price11": 0.42
    },
    "bw03":{
      "size": "12 x 18",
      "price1": 0.95,
      "price11": 0.95
    },
    "bw04":{
      "size": "15 x 21",
      "price1": 1.70,
      "price11": 0.98
    },
    "bw05":{
      "size": "18 x 24",
      "price1": 1.70,
      "price11": 1.15
    },
    "bw06":{
      "size": "24 x 36",
      "price1": 1.70,
      "price11": 1.45
    },
    "bw07":{
      "size": "30 x 42",
      "price1": 2.30,
      "price11": 1.75
    },
    "bw08":{
      "size": "36 x 48",
      "price1": 3.65,
      "price11": 2.85
    },
    "bw09":{
      "size": "Custom",
      "price1": 0.29,
      "price11": 0.29
    }
  },
  "cline": {
    "cline01":{
      "size": "8.5 x 11",
      "price1": 0.69,
      "price11": 0.69
    },
    "cline02":{
      "size": "11 x 17",
      "price1": 1.49,
      "price11": 1.49
    },
    "cline03":{
      "size": "12 x 18",
      "price1": 1.79,
      "price11": 1.79
    },
    "cline04":{
      "size": "15 x 21",
      "price1": 4.95,
      "price11": 4.95
    },
    "cline05":{
      "size": "18 x 24",
      "price1": 6.25,
      "price11": 6.25
    },
    "cline06":{
      "size": "24 x 36",
      "price1": 9.90,
      "price11": 9.90
    },
    "cline07":{
      "size": "30 x 42",
      "price1": 14.45,
      "price11": 14.45
    },
    "cline08":{
      "size": "36 x 48",
      "price1": 19.80,
      "price11": 19.80
    },
    "cline09":{
      "size": "Custom",
      "price1": 1.65,
      "price11": 1.65
    }
  },
  "cmid": {
    "cmid01":{
      "size": "8.5 x 11",
      "price1": 0.69,
      "price11": 0.69
    },
    "cmid02":{
      "size": "11 x 17",
      "price1": 1.49,
      "price11": 1.49
    },
    "cmid03":{
      "size": "12 x 18",
      "price1": 1.79,
      "price11": 1.79
    },
    "cmid04":{
      "size": "15 x 21",
      "price1": 12.50,
      "price11": 12.50
    },
    "cmid05":{
      "size": "18 x 24",
      "price1": 15.50,
      "price11": 15.50
    },
    "cmid06":{
      "size": "24 x 36",
      "price1": 27.00,
      "price11": 27.00
    },
    "cmid07":{
      "size": "30 x 42",
      "price1": 42.00,
      "price11": 42.00
    },
    "cmid08":{
      "size": "36 x 48",
      "price1": 54.00,
      "price11": 54.00
    },
    "cmid09":{
      "size": "Custom",
      "price1": 4.50,
      "price11": 4.50
    }
  },
  "cfull": {
    "cfull01":{
      "size": "8.5 x 11",
      "price1": 0.69,
      "price11": 0.69
    },
    "cfull02":{
      "size": "11 x 17",
      "price1": 1.49,
      "price11": 1.49
    },
    "cfull03":{
      "size": "12 x 18",
      "price1": 1.79,
      "price11": 1.79
    },
    "cfull04":{
      "size": "15 x 21",
      "price1": 18.00,
      "price11": 18.00
    },
    "cfull05":{
      "size": "18 x 24",
      "price1": 24.75,
      "price11": 24.75
    },
    "cfull06":{
      "size": "24 x 36",
      "price1": 49.50,
      "price11": 49.50
    },
    "cfull07":{
      "size": "30 x 42",
      "price1": 72.19,
      "price11": 72.19
    },
    "cfull08":{
      "size": "36 x 48",
      "price1": 99.00,
      "price11": 99.00
    },
    "cfull09":{
      "size": "Custom",
      "price1": 8.25,
      "price11": 8.25
    }
  },
  "cscan":{
    "cscan01":{
      "size": "8.5 x 11",
      "price1": 0.39,
      "price11": 0.39
    },
    "cscan02":{
      "size": "11 x 17",
      "price1": 2.50,
      "price11": 2.50
    },
    "cscan03":{
      "size": "12 x 18",
      "price1": 3.00,
      "price11": 3.00
    },
    "cscan04":{
      "size": "15 x 21",
      "price1": 4.50,
      "price11": 4.50
    },
    "cscan05":{
      "size": "18 x 24",
      "price1": 5.00,
      "price11": 5.00
    },
    "cscan06":{
      "size": "24 x 36",
      "price1": 5.75,
      "price11": 5.75
    },
    "cscan07":{
      "size": "30 x 42",
      "price1": 6.90,
      "price11": 6.90
    },
    "cscan08":{
      "size": "36 x 48",
      "price1": 8.90,
      "price11": 8.90
    }
  },
  "bscan":{
    "bscan01":{
      "size": "8.5 x 11",
      "price1": 0.12,
      "price11": 0.12
    },
    "bscan02":{
      "size": "11 x 17",
      "price1": 0.29,
      "price11": 0.29
    },
    "bscan03":{
      "size": "12 x 18",
      "price1": 0.65,
      "price11": 0.65
    },
    "bscan04":{
      "size": "15 x 21",
      "price1": 0.95,
      "price11": 0.95
    },
    "bscan05":{
      "size": "18 x 24",
      "price1": 1.05,
      "price11": 1.05
    },
    "bscan06":{
      "size": "24 x 36",
      "price1": 1.15,
      "price11": 1.15
    },
    "bscan07":{
      "size": "30 x 42",
      "price1": 1.35,
      "price11": 1.35
    },
    "bscan08":{
      "size": "36 x 48",
      "price1": 1.80,
      "price11": 1.80
    }
  }
}

// Calculate tax
const calcTax = (subTotal) => {
  taxRate = .0675
  orderTax = Math.ceil((subTotal * taxRate) * Math.pow(10, 2)) / Math.pow(10, 2);
  return orderTax
}

// Calculate the Order total with tax included
const orderTotal = (subTotal) => {
  let isTax = document.getElementById("taxExempt");
  let tax = calcTax(subTotal)
  if (taxExempt.checked == true) {
    tax = 0;
  };
  let orderCalcs = [];
  let total = tax + subTotal
  orderCalcs = [subTotal.toFixed(2), tax.toFixed(2), total.toFixed(2)];
  /*
  console.log("Sub Total: " + subTotal)
  console.log("Tax: " + tax)
  console.log("Total: " + total)
  */
  return orderCalcs // ((total*100) | 0) / 100 // Return the amount with only 2 decimal places
}

// Calculate the Sub Total of the order by adding the line totals together.
const subTotal = (lineItems) => { // takes an array of numbers and returns the sum
  let orderSubTotal = 0
  orderSubTotal = lineItems.reduce(add)
  return orderSubTotal
}

/* 
Calculate the prices for line items.
For items with a different price over a quantity of 10 enter the
price for the first 10 in the first argument and the price for
items 11+ in the second argument.
The third argument is the quantity of the ordered item.
If the price does not change after the first 10 prints enter the same
price in the 1st and 2nd arguments
*/
const lineTotal = (qty, price1, price11=price1) => {
  let linePrice = 0
  if (qty <= 10) {
    linePrice = price1 * qty
  }

  else if (qty > 10) {
    linePrice = (price1 * 10) + (price11 *(qty-10))
  }
  return linePrice
}

// Calculate square footage from inches
const inToSqFt = (widthInch, lengthInch) => {
  widthFeet = Math.round((widthInch / 12) * 1000)/1000
  lengthFeet = Math.round((lengthInch / 12) * 1000)/1000
  return {widthFeet, lengthFeet}
}

// Calculate per page cost of custom sizes.
const otherSize = (width, length) => {
  // Takes width and length in inches
  // Returns the price per page at that size
  args = inToSqFt(width, length)
  priceOther = .29
  pagePrice = Math.round((args.widthFeet * args.lengthFeet * priceOther) * 100) / 100
  // console.log(args.widthFeet, args.lengthFeet);
  return pagePrice
}

// Check state of Setup Checkbox and respond
const doesSetup = () => {
  let setupCheck = document.getElementById("setupCheckbox");
  let setupCost = document.getElementById("setupCost");
  let setupPrice = document.getElementById("setupPrice");
    
  if (setupCheck.checked == true) {
    if (setupCost.value == "") {
      setupCost.textContent = "7.50";
      setupCost.value = "7.50";
    } 
    setupPrice.textContent = setupCost.value
  } else {
    setupPrice.textContent = "";
  }
}

// Check for auto charge for setup cost
/*
This needs work. This is currently applied with the calculate button is selected.
However, it needs to change when an item is selected that would incur the charge.
Also, it needs to allow the user to un-select (override) the charge if needed.
*/
const autoSetup = (tf) => {
  let setupCheck = document.getElementById("setupCheckbox");
  let setupCost = document.getElementById("setupCost");
  let setupPrice = document.getElementById("setupPrice");

  if (tf = true) {
    setupCheck.checked = true;
    setupCost.textContent = "7.50";
    setupCost.value = "7.50";
    setupPrice.textContent = "7.50";
  }
}

// Lookup media size and return measurement values
const medLookup = (size, jobType) => {
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
  }

  if (size == "ANSIA") {
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
  }

  if (setupJob && setupPrice) {
    autoSetup(true);
  }
  return priceCode;
}

// Takes a percentage and applies the percentage to a subtotal for the order
const doDiscount = (discountPercent) => {
  let tempPrice = subTotal(allPrices);
  let fraction = discountPercent/100
  let discountPrice = (tempPrice*fraction);
  return discountPrice.toFixed(2); 
}

// Handle form submission
const handleClick = () => {
  let quant = document.getElementsByClassName("quantity");
  let jobType = document.getElementsByClassName("jobs");
  let paper = document.getElementsByClassName("paper");
  let sizes = document.getElementsByClassName("sizes");
  let lineItemPrices = document.getElementsByClassName("LinePrices");
  let setupCheck = document.getElementById("setupCheckbox");
  let setupCost = document.getElementById("setupCost");
  let discountApply = document.getElementById("dicountApply");
  let discountAmount = document.getElementById("discountAmount");

  // Iterate through the lines
  for(i = 0; i < quant.length; i++) {
    if (quant[i].value == "" || quant[i].value < 1) { // If line contains bad quantity log "0"
      // console.log(0);
    } else { // Otherwise process the line item
      // Lookup the media type and get the values
      priceCode = medLookup(sizes[i].value, jobType[i].value);
      // Send all values to be calculated
      cat = priceCode.slice(0, -2);
      lineCost = lineTotal(quant[i].value, prices[cat][priceCode].price1, prices[cat][priceCode].price11)
      allPrices.push(lineCost);
      // Return the values to the line price
      linePost = "Price" + ((i+1).toString());
      document.getElementById(linePost).textContent = lineCost.toFixed(2);
    }
  }
  // Check conditional order items
  if (setupCheck.checked == true) { // Check to see if Setup is selected, if so add to allPrices
    document.getElementById("setupPrice").textContent = setupCost.value;
    allPrices.push(parseFloat(setupCost.value));
  }

  if (discountApply.checked == true) {
    let discountPrice = doDiscount(discountAmount.value);
    document.getElementById("dicountPrice").textContent = "-" + discountPrice;
    allPrices.push(Number("-" + discountPrice));
    // need to subtract the discount price from the total before tax, should happen in the subTotal function
  };

  // Add all line prices to get the total
  // console.log(allPrices);
  let subs = subTotal(allPrices);
  let orderCalcs = orderTotal(subs);
  // console.log(orderCalcs);
  // Display the total
  document.getElementById("subTotal").textContent = orderCalcs[0];
  document.getElementById("orderTax").textContent = orderCalcs[1];
  document.getElementById("orderTotal").textContent = orderCalcs[2];
}

const clearDivs = () => {
  location.reload();
}

/*
Phase 2
To do list
1. Create toggle button to switch to supplies
2. Add pricing for Toners
3. Add pricing for Inks
4. Add pricing for 3" core (all products)
5. Add Pricing for 2" core (all products)
6. Fold pricing info into same order
7. Create pricing area for service calls
*/
