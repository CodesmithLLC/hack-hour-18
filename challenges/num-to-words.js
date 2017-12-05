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

const digitMap = {
  0: {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  },
  1: {
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    2: 'Twenty',
    3: 'Thirty',
    4: 'Forty',
    5: 'Fifty',
    6: 'Sixty',
    7: 'Seventy',
    8: 'Eighty',
    9: 'Ninety',
  },
};

const place = {
  1: 'Thousand',
  2: 'Million',
  3: 'Billion',
  4: 'Trillion',
  5: 'Quadrillion',
};

function hundredPlace(numArr) {
  if (numArr.join('') === '000') return '';
  let ans = '';
  for (let i = numArr.length - 1; i >= 0; i -= 1) {
    if (i === 2) {
      ans += digitMap[0][numArr[i]] + 'Hundred';
    } else if (i === 1 && numArr[i] === '1') {
      ans += digitMap[1][numArr[1] + numArr[0]];
      i = 0;
    } else if (numArr[i] === '0' && numArr.length > 1) {
      continue;
    } else {
      ans += digitMap[i][numArr[i]];
    }
  }
  return ans;
}

function numToWords(num) {
  if (!Number.isInteger(num)) throw new Error('Not a number');
  const reversedNum = String(num).split('').reverse();
  const numParts = [];
  // Split num into hundred parts (3)
  for (let i = 0; i < reversedNum.length; i += 3) {
    numParts.push(reversedNum.slice(i, i + 3));
  }

  let ans = '';
  for (let i = numParts.length - 1; i >= 0; i -= 1) {
    ans += hundredPlace(numParts[i]);
    if (i !== 0 && hundredPlace(numParts[i]) !== '') ans += place[i];
  }
  return ans;
}

console.assert(numToWords(0) === 'Zero');
console.assert(numToWords(1) === 'One');
console.assert(numToWords(5) === 'Five');
console.assert(numToWords(6) === 'Six');
console.assert(numToWords(7) === 'Seven');
console.assert(numToWords(10) === 'Ten');
console.assert(numToWords(11) === 'Eleven');
console.assert(numToWords(15) === 'Fifteen');
console.assert(numToWords(17) === 'Seventeen');
console.assert(numToWords(20) === 'Twenty');
console.assert(numToWords(21) === 'TwentyOne');
console.assert(numToWords(26) === 'TwentySix');
console.assert(numToWords(43) === 'FortyThree');
console.assert(numToWords(60) === 'Sixty');
console.assert(numToWords(67) === 'SixtySeven');
console.assert(numToWords(100) === 'OneHundred');
console.assert(numToWords(110) === 'OneHundredTen');
console.assert(numToWords(114) === 'OneHundredFourteen');
console.assert(numToWords(176) === 'OneHundredSeventySix');
console.assert(numToWords(386) === 'ThreeHundredEightySix');
console.assert(numToWords(1000) === 'OneThousand');
console.assert(numToWords(3627) === 'ThreeThousandSixHundredTwentySeven');
console.assert(numToWords(10627) === 'TenThousandSixHundredTwentySeven');
console.assert(numToWords(2483579411) === 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven');
console.assert(numToWords(300525151340440) === 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty');
console.assert(numToWords(92120000000000000) === 'NinetyTwoQuadrillionOneHundredTwentyTrillion');

module.exports = numToWords;
