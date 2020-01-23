/* test.js file for testing new code for invoice.html */

let prices = // JSON.parse(priceList)
// bond first 10, bond after 10, mylar, plain vellum, erasable vellum, glossy, satin
/*
bw, cline, cmid, cfull - multi part prices
cscan, bscan, mount - single prices based on size
cut, sbook - single price regardless of size 
*/
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
      "prices": [0.29, 0.29, null, null, null, null, null]
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
      "prices": [1.65, 1.65, null, null, null, null, null]
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
      "prices": [4.50, null, null, null, null, null, null]
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
      "prices": [8.25, null, null, null, null, null, null]
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

// Globals
var getId = document.getElementById.bind(document);
var getClass = document.getElementsByClassName.bind(document);

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
    }
  }
  return quants
}

//Calculate Line Items
const calcLinePrice = () => {}

//Check for Setup
const checkSetupFee = () => {}

//Calculate Setup Fee
const calcSetupFee = () => {}

//Check for Discount
const checkForDiscount = () => {}

//Calculate discount
const calcDiscount = () => {}

//Check if tax exempt
const checkExempt = () => {}

//Calculate Subtotal
const calcSubTotal = () => {}

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
    if (setupCost.value == "") {
      setupCost.textContent = "7.50";
      setupCost.value = "7.50";
    } 
    setupPrice.textContent = parseFloat(setupCost.value).toFixed(2);
  } else {
    setupPrice.textContent = "";
  }
}

//Calculate Total
const calcTotal = () => {}

// Handle incoming click for when the user selects the "Calculate" button
const handleClick = () => {
  //Validate Data for required fields
  // checkRequiredFields()

  //Calculate Line Items - May be Helper Function
  let lineQuantities = checkQuant();
  if (lineQuantities.some(el => el > 0)) {
    //call a function to process the lines with quants.
    for (i=0, i<lineQuantities.length, i++) {
      if (lineQuantities[i] <= 0) {
        console.log(0);
      } else {
        // get values of different columns and send to function for pricing.
      }
    }
  } else {
    console.log("No quantities")
  }


  //Check for Setup
  //Check for Discount
  //Check if tax exempt
  //Calculate Subtotal
  //Calculate tax if not exempt
  //Calculate Total
  //Display Print Button
  getId("printButton").classList.remove("hidden");
}

const clearDivs = () => {
  location.reload();
}

const printClick = () => {
  //create code to send to print preview with print-friendly CSS
  console.log("Print Me!");
}


// function for adding two numbers. Easy!
const add = (a, b) => a + b