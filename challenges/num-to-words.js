// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
<<<<<<< HEAD
  if (num === 0) {return 'zero'};
  let length = num.toString().split("").length;
  let arr = num.toString().split("");
	const singleDigits = ["", 'One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
	const tenDigits = ['','Eleven','Twelve','Thirteen','Forteen','Fiftee','Sixteen','Seventeen','Eighteen','Ninteen'];
	const twoDigits = ['', "",'Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
	
	const tensPower = ["Hundreds",'Thousands'];
	
	if (length === 1) {
	  let index = arr[0];
	  return singleDigits[index]
	}
	else if (length === 2 && num < 20) {
	  let index = arr[arr.length-1]
	  return tenDigits[index]
	}
	else if (length ===2 && num < 100) {
	  let index10 = arr[0];
	  let index = arr[1];
	  return twoDigits[index10] + singleDigits[index];
	}
	else if (length ===3 && num < 1000) {
	  let indexH = arr[0];
	  let indexT = arr[1];
	  let indexU = arr[2];
	  if (num%100 === 0) {
	    return singleDigits[indexH] + tensPower[0]
	  }
	  return singleDigits[indexH] + tensPower[0] + 'and'+  twoDigits[indexT] + singleDigits[indexU]
	}
	else if (length === 4 && num < 10000) {
	  let indexTH = arr[0]
	  let indexH = arr[1];
	  let indexT = arr[2];
	  let indexU = arr[3];
	  if (num%1000 === 0) {
	    return singleDigits[indexTH] + tensPower[1]
	  }
	  else {
	    return singleDigits[indexTH] + tensPower[1] + singleDigits[indexH] + tensPower[0] + 'and' + twoDigits[indexT] + singleDigits[indexU]
	  }
	  
	}
}

=======

}
>>>>>>> c419cccd3404616847f3063162be0198b0248314

module.exports = numToWords;
