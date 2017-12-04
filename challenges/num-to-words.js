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
  let output = '';
  const dictionary = {
    edge: ['Zero'],
    ones: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
    tweens: ['Eleven', 'Twelve'],
    teens: ['Thir', 'Fif'],
    tens: ['Ten', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'],
    suffixes: ['teen', 'Hundred', 'Thousand', 'Million', 'Billion', 'Trillion'],
  };

  const stringNum = num.toString();
  let number;

  if (stringNum < 0) {
    output += 'Negative';
    number = stringNum.substr(1);
  }

  if (num === 0) output += dictionary.edge[num];

  for (let i = 0; i < stringNum.length; i += 1) {
    console.log('stringNum.length:  ', stringNum.length);
    console.log('stringNum[i]:  ', stringNum[i]);
    if (stringNum.length === 1) output += dictionary.ones[Number(stringNum - 1)];
  }

  return output;
}
console.log(numToWords(1));
console.log(numToWords(2));
console.log(numToWords(3));
// console.log(numToWords(-10));
// console.log(numToWords(0)); // -> 'Zero'
// console.log(numToWords(43)); // -> 'FortyThree'
// console.log(numToWords(2999)); // -> 'TwoThousandNineHundredNintyNine'
// console.log(numToWords(15)); // -> 'Fifteen'

module.exports = numToWords;
