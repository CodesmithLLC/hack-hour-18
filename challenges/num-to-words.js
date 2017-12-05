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
  if (num === 0) return 'Zero';

  const belowTwenty = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
  'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']

  const tens = {
    2: 'Twenty',
    3: 'Thirty',
    4: 'Forty',
    5: 'Fifty',
    6: 'Sixty',
    7: 'Seventy',
    8: 'Eighty',
    9: 'Ninety'
  }

  const parse = (n) => {
    let output = '';
    if (n === 0) return output;
    if (Math.floor(n / 100) > 0) {
      output += belowTwenty[Math.floor(n / 100)] + 'Hundred';
    }
    if (n % 100 === 0) return output;
    if (n % 100 >= 20) {
      output += tens[Math.floor((n % 100 / 10))];
      if (n % 10 === 0) return output;
      output += belowTwenty[n % 10];
    }
    else output += belowTwenty[n % 100];
    return output;
  }

  let quintillions, quadrillions, trillions, billions, millions, thousands, ones;
  Math.floor(num / Math.pow(10, 18)) === 0 ? quintillions = '' : quintillions = parse(Math.floor(num / Math.pow(10, 18))) + 'Quintillion';
  Math.floor(num % Math.pow(10, 18) / Math.pow(10, 15)) === 0 ? quadrillions = '' : quadrillions = parse(Math.floor(num % Math.pow(10, 18) / Math.pow(10, 15))) + 'Quadrillion';
  Math.floor(num % Math.pow(10, 15) / Math.pow(10, 12)) === 0 ? trillions = '' : trillions = parse(Math.floor(num % Math.pow(10, 15) / Math.pow(10, 12))) + 'Trillion';
  Math.floor(num % Math.pow(10, 12) / Math.pow(10, 9)) === 0 ? billions = '' : billions = parse(Math.floor(num % Math.pow(10, 12) / Math.pow(10, 9))) + 'Billion';
  Math.floor(num % Math.pow(10, 9) / Math.pow(10, 6)) === 0 ? millions = '' : millions = parse(Math.floor(num % Math.pow(10, 9) / Math.pow(10, 6))) + 'Million';
  Math.floor(num % Math.pow(10, 6) / Math.pow(10, 3)) === 0 ? thousands = '' : thousands = parse(Math.floor(num % Math.pow(10, 6) / Math.pow(10, 3))) + 'Thousand';
  Math.floor(num % Math.pow(10, 3)) === 0 ? ones = '' : ones = parse(Math.floor(num % Math.pow(10, 3)));

  return quintillions + quadrillions + trillions + billions + millions + thousands + ones;

}

console.log(numToWords(8192120301420561000)) // 'NintyTwoQuadrillionOneHundredTwentyTrillion'

module.exports = numToWords;
