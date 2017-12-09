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
   // const ones = 'Zero One Two Three Four Five Six Seven Eight Nine'.split(' ')
   // const teens = 'Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen'.split(' ')
   // const tens = 'Twenty Thirty Fourty Fifty Sixty Seventy Eighty Ninety'.split(' ')
   // const manyZeroes = ' Thousand Million Billion Trillion Quadrillion Quintillion Sextillion'.split(' ')
   // const hundreds = [ones, teens.concat(tens), 'Hundred']
   // let digits = 0
   // const numToThrees = (arr) => {
   //   let digits = 0
   //   const resultArr = []
   //   arr.reduce((acc, numStr, index) => {
   //     if (index === arr.length-1) resultArr.push(acc.concat(numStr))
   //     if (digits++ >= 2) {
   //
   //       digits = 0
   //       resultArr.push(acc.concat(numStr))
   //       return []
   //     }
   //     return acc.concat(numStr)
   //   }, [])
   //   return resultArr
   // }
   // const processedNum = numToThrees(num.toString().split('').reverse())
   // console.log('PROCESSED NUM')
   // console.log(processedNum)
   // console.log(manyZeroes)
   //
   // const acc = []
   // processedNum.reduce((acc, numAcc, index) => {
   //   if (numAcc[1]) {
   //
   //   }
   //   return acc.concat(manyZeroes[index] + hundreds[numAcc[0]] + 321)
   // }, [])
 }

module.exports = numToWords;
