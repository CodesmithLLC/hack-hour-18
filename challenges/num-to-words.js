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

function numToWords(num, first = true) {
  if (typeof num !== 'number') return undefined;
  if (num === 0 && first === true) return 'Zero';
  if (num < 10) {
    if (num === 1) return 'One';
    if (num === 2) return 'Two';
    if (num === 3) return 'Three';
    if (num === 4) return 'Four';
    if (num === 5) return 'Five';
    if (num === 6) return 'Six';
    if (num === 7) return 'Seven';
    if (num === 8) return 'Eight';
    if (num === 9) return 'Nine';
  }
  if (num < 20) {
    if (num === 11) return 'Eleven';
    if (num === 12) return 'Twelve';
    if (num === 13) return 'Thirteen';
    if (num === 14) return 'Fourteen';
    if (num === 15) return 'Fifteen';
    if (num === 16) return 'Sixteen';
    if (num === 17) return 'Seventeen';
    if (num === 18) return 'Eighteen';
    if (num === 19) return 'Nineteen';
  }
  if (num < 100) {
    if (parseInt((num + '')[0].toString()) === 2) return 'Twenty' + numToWords(num - 20, false);
    if (parseInt((num + '')[0].toString()) === 3) return 'Thirty' + numToWords(num - 30, false);
    if (parseInt((num + '')[0].toString()) === 4) return 'Forty' + numToWords(num - 40, false);
    if (parseInt((num + '')[0].toString()) === 5) return 'Fifty' + numToWords(num - 50, false);
    if (parseInt((num + '')[0].toString()) === 6) return 'Sixty' + numToWords(num - 60, false);
    if (parseInt((num + '')[0].toString()) === 7) return 'Seventy' + numToWords(num - 70, false);
    if (parseInt((num + '')[0].toString()) === 8) return 'Eighty' + numToWords(num - 80, false);
    if (parseInt((num + '')[0].toString()) === 9) return 'Ninty' + numToWords(num - 90, false);
  }
  if (num < 1000) {
    if (parseInt((num + '')[0].toString()) === 1) return 'OneHundred' + numToWords(num - 100, false);
    if (parseInt((num + '')[0].toString()) === 2) return 'TwoHundred' + numToWords(num - 200, false);
    if (parseInt((num + '')[0].toString()) === 3) return 'ThreeHundred' + numToWords(num - 300, false);
    if (parseInt((num + '')[0].toString()) === 4) return 'FourHundred' + numToWords(num - 400, false);
    if (parseInt((num + '')[0].toString()) === 5) return 'FiveHundred' + numToWords(num - 500, false);
    if (parseInt((num + '')[0].toString()) === 6) return 'SixHundred' + numToWords(num - 600, false);
    if (parseInt((num + '')[0].toString()) === 7) return 'SevenHundred' + numToWords(num - 700, false);
    if (parseInt((num + '')[0].toString()) === 8) return 'EightHundred' + numToWords(num - 800, false);
    if (parseInt((num + '')[0].toString()) === 9) return 'NineHundred' + numToWords(num - 900, false);
  }
  // Thousand
  if (num < 1000000) {
    if (num >= 100000) return numToWords(parseInt((num + '').substring(3, 0)), false) + 'Thousand' + numToWords(parseInt((num + '').substring(3)), false);
    if (num >= 10000) return numToWords(parseInt((num + '').substring(2, 0)), false) + 'Thousand' + numToWords(parseInt((num + '').substring(2)), false);
    if (num >= 1000) return numToWords(parseInt((num + '').substring(1, 0)), false) + 'Thousand' + numToWords(parseInt((num + '').substring(1)), false);
  }
  // Million
  if (num < 1000000000) {
    if (num >= 100000000) return numToWords(parseInt((num + '').substring(3, 0)), false) + 'Million' + numToWords(parseInt((num + '').substring(3)), false);
    if (num >= 10000000) return numToWords(parseInt((num + '').substring(2, 0)), false) + 'Million' + numToWords(parseInt((num + '').substring(2)), false);
    if (num >= 1000000) return numToWords(parseInt((num + '').substring(1, 0)), false) + 'Million' + numToWords(parseInt((num + '').substring(1)), false);
  }
  // Billion
  if (num < 1000000000000) {
    if (num >= 100000000000) numToWords(parseInt((num + '').substring(3, 0)), false) + 'Trillion' + numToWords(parseInt((num + '').substring(3)), false);
    if (num >= 10000000000) numToWords(parseInt((num + '').substring(2, 0)), false) + 'Trillion' + numToWords(parseInt((num + '').substring(2)), false);
    if (num >= 1000000000) numToWords(parseInt((num + '').substring(1, 0)), false) + 'Trillion' + numToWords(parseInt((num + '').substring(1)), false);
  }
  //Quadrillion
  if (num < 1000000000000000) {
    if (num >= 100000000000000) numToWords(parseInt((num + '').substring(3, 0)), false) + 'Quadrillion' + numToWords(parseInt((num + '').substring(3)), false);
    if (num >= 10000000000000) numToWords(parseInt((num + '').substring(2, 0)), false) + 'Quadrillion' + numToWords(parseInt((num + '').substring(2)), false);
    if (num >= 1000000000000) numToWords(parseInt((num + '').substring(1, 0)), false) + 'Quadrillion' + numToWords(parseInt((num + '').substring(1)), false);
  }
}

// console.log(numToWords(0));
// console.log(numToWords(43));
// console.log(numToWords(2999));
// console.log(numToWords(15));
// console.log(numToWords(2483579411));
// -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
// * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
// * numToWords(92120000000000000) ->
module.exports = numToWords;
