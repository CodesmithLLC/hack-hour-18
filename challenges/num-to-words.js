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

const ones = {
  '0': 'Zero',
  '1': 'One',
  '2': 'Two',
  '3': 'Three',
  '4': 'Four',
  '5': 'Five',
  '6': 'Six',
  '7': 'Seven',
  '8': 'Eight',
  '9': 'Nine',
}

const teens = {
  '11': 'Eleven',
  '12': 'Twelve',
  '13': 'Thirteen',
  '14': 'Fourteen',
  '15': 'Fifteen',
  '16': 'Sixteen',
  '17': 'Seventeen',
  '18': 'Eighteen',
  '19': 'Nineteen',
}

const tens = {
  '1': 'Ten',
  '2': 'Twenty',
  '3': 'Thirty',
  '4': 'Forty',
  '5': 'Fifty',
  '6': 'Sixty',
  '7': 'Seventy',
  '8': 'Eighty',
  '9': 'Ninety',
};

function numToWords(num) {
  if (typeof num !== 'number') return;
  let newStr = '';
  let numStr = num.toString().split('');
  let length = numStr.length;
  let temp;

  if (num > 10 && num < 20) {
    const teen = num.toString();
    newStr += `${teens[teen]}`
    return newStr;
  }

  if (length === 5) {
    newStr += `${tens[numStr[0]]}`;
    numStr.shift();
    length -= 1
  }
  if (length === 4) {
    newStr += `${ones[numStr[0]]}Thousand`;
    numStr.shift();
    length -= 1
  }
  if (length === 3) {
    newStr += `${ones[numStr[0]]}Hundred`;
    numStr.shift();
    length -= 1
  }
  if (length === 2) {
    newStr += `${tens[numStr[0]]}`;
    numStr.shift();
    length -= 1
  }
  if (length = 1) {
    newStr += `${ones[numStr[0]]}`;
  }
  return newStr;
}

console.log(numToWords(0))// -> 'Zero'
console.log(numToWords(43))// -> 'FortyThree'
console.log(numToWords(2999))// -> 'TwoThousandNineHundredNintyNine'
console.log(numToWords(15))// -> 'Fifteen'
console.log(numToWords(2483579411))// -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
console.log(numToWords(300525151340440))// -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
console.log(numToWords(92120000000000000))// -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'

module.exports = numToWords;
