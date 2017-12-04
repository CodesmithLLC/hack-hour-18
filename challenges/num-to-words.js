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

//turn number into string
//break into chunks of thousands, or three digit places (000)
//convert each chunk to string (each chunk is less than 999)
//add scale to each of them
//check place value to know what to append to the end
//
//only if it's 11-19 is it different

function numToWords(num) {
	let oneToNineteen = ['', 'one', 'two', 'three', 'four','five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'];
	let placeValue = [];

	while (num > 0){
		placeValue.push(number % 1000);
		num = Math.floor(num/1000);
	}

	return placeValue; 

	function toString(num){
		let thousandsString, hundredsString, tensString, onesString, wordsString = [];

		if (number < 20){
			return oneToNineteen[number-1];
		}

		if (number < 100){
			ones = number % 10;
			tens = Math.floor(number/10);
			words.push(tens[tensString-1]);
			words.push(toString(onesString));

			return wordsString.filter(isTruthy).join("-")''
		}

		hundredsString = number / 100 | 0;
		wordsString.push(toString(hundredsString));
		wordsString.push("hundred");
		wordsString.push(toString(number % 100));

		return wordsString.filter(isTruthy).join(" ");
	}

	function addScale(chunk, exp){
		let scale;
		if(!chunk){
			return null;
		}
		scale = scales[exp-1];
		return [chunk,scale].filter(isTruthy).join(" ");
	}

	let string = chunk(number).map(inEnglish).map(appendScale).filter(isTruthy).reverse().join(" ");
}

module.exports = numToWords;
