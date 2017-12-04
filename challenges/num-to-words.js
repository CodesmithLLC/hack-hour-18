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
    var digit = {
        0:      'Zero',
        1:      'One',
        2:      'Two',
        3:      'Three',
        4:      'Four',
        5:      'Five',
        6:      'Six',
        7:      'Seven',
        8:      'Eight',
        9:      'Nice',
        10:     'Ten',
        11:     'Eleven',
        12:     'Twelve',
        13:     'Thirteen',
        15:     'Fifteen',
        20:     'Twenty'
    },
    temp,
    numStr = num + "";

    if (num <= 13 || num == 15 || num == 20) {
        return digit[num];
    }
    else {  
        temp = Number(numStr.charAt(1));      
        if (numStr.charAt(0) == 1) {            
            return digit[temp] + "teen";
        }
        else if (numStr.charAt(0) == 2) {
            return "twenty" + digit[temp];
        }
}

numToWords(21);

module.exports = numToWords;
