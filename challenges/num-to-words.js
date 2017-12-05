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

function groupByPlaces(arr) {
	const groupedArr = [];
	for (let i = arr.length - 1; i >= 0; i -= 3) {
		const group = [];
		if (arr[i-2]) group.push(arr[i-2]);
		if (arr[i-1]) group.push(arr[i-1]);
		if (arr[i]) group.push(arr[i]);
		
		groupedArr.unshift(group);
	}
	return groupedArr;
}

function numToWords(num) {
	let words = '';
	const digitText = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
	const placesText = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];
  const digitArr = num.toString().split('');
  const groupedArr = groupByPlaces(digitArr);
	
	groupedArr.forEach((group, i) => {
		let groupStr = '';
		if (group.length === 3) {
			groupStr += group[0] + 'Hundred' ? digitText[group[0]] : '';
			groupStr += group[1] + 'teen' ? digitText[group[1]] : '';
			groupStr += group[2] ? digitText[group[3]] : '';
		} else if (group.length === 2) {
			groupStr += group[0] + 'teen' ? digitText[group[0]] : '';
			groupStr += group[1] ? digitText[group[1]] : '';
		} else {
			groupStr += group[0] ? digitText[group[0]] : '';
		}
		words += groupedArr.lengthlength - i ? groupStr + groupedArr[groupedArr.lengthlength - i] : '';
	});
	return words;
}

console.log(numToWords(2000));

module.exports = numToWords;
