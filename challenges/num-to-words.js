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
  if (typeof num !== 'number') return undefined;
  if (num === 0) return 'Zero';
  const split = String(num).split('');
  const seperated = [];
  let index = split.length - 1;
  while (index >= 0) {
    let str = '';
    for (let i = 0; i < 3; i++) {
      if (split[index]) str = split[index--] + str;
    }
    seperated.push(str);
  }
  return seperated.reduce((final, current, index) => {
    final = numberHelper(current, index) + final;
    return final;
  }, '');
}

function numberHelper(num, index) {
  const suffix = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion', 'Decillion'];
  const single = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const double = ['', '', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const tens = {10: 'Ten', 11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', 19: 'Nineteen'};
  let final = '';
  if (single[num[0]]) {
    final += single[num[0]];
    final += suffix[index];
  };
  if (num[1] && num[2] && (Number(num[1] + num[2]) >= 10 && Number(num[1] + num[2]) < 20)) {
    const teen = Number(num[1] + num[2]);
    final += tens[teen];
  } else {
    if (double[num[1]]) final += double[num[1]];
    if (single[num[2]]) final += single[num[2]];
  }
  return final;
}

console.log(numToWords(0));
console.log(numToWords(43));
console.log(numToWords(2999));
console.log(numToWords(15));
console.log(numToWords(2483579411));
// 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'

module.exports = numToWords;
