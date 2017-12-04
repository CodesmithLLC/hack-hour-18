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

const ONETONINETEEN = [
  'One', 'Two', 'Three', 'Four', 'Five',
  'Six', 'Seven', 'Eight', 'Nine', 'Ten',
  'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
  'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',
];

const TENS = [
  'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty',
  'Sixty', 'Seventy', 'Eighty', 'Ninety',
];

const SCALE = ['Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

// returns each thousand in reverse order
function toChunks(num) {
  const chunks = [];
  while (num > 0) {
    chunks.push(num % 1000);
    num = Math.floor(num / 1000);
  }
  return chunks;
}

function toEnglish(num) {
  const words = [];
  if (num < 20) return ONETONINETEEN[num - 1];
  if (num < 100) {
    const ones = num % 10;
    const tens = Math.floor(num / 10);
    words.push(TENS[tens - 1]);
    words.push(toEnglish(ones));
    return words.join('');
  }
  const hundreds = Math.floor(num / 100);
  words.push(toEnglish(hundreds));
  words.push('Hundred');
  words.push(toEnglish(num % 100));
  return words.join('');
}

function appendScale(chunk, exp) {
  if (!chunk) return null;
  const scale = SCALE[exp - 1];
  return [chunk, scale].join('');
}

function numToWords(num) {
  if (num === 0) return 'Zero';
  return toChunks(num)
    .map(toEnglish)
    .map(appendScale)
    .reverse()
    .join('');
}

// console.log(numToWords(300525151340440));
module.exports = numToWords;
