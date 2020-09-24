/*
bw, cline, cmid, cfull - multi part prices
cscan, bscan, mount - single prices based on size
cut, sbook - single price regardless of size 
*/

/* 
Pricing Key:
    bond first 10, bond after 10, mylar, plain vellum, erasable vellum, glossy, satin
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
      "prices": [0.35, 0.29, 2.70, 1.65, 1.93, null, null]
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
      "prices": [1.00]
    },
    "bscan05":{
      "size": "18 x 24",
      "prices": [1.10]
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
  }
}