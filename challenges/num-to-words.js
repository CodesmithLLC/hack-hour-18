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
    //const scale that we're pulling from
    const ones = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const others = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion','Quintillion','Sextillion','Septillion','Octillion','Nonillion'];
    //get first three digits
    firstThree = (str) => {
        return ('000' + str).substr(-3);
    }
    restString = (str) => {
        return str.substr(0, str.length - 3);
    }
    threeDigitWord = (third, second, first) => {
        return (third === '0' ? '' : ones[third] + 'Hundred') + (first === '0' ? tens[second] : tens[second]) + (ones[second + first] || ones[first]);
    }
    add_to_words = (words, triplet_words, scale_word) => {
        return triplet_words ? triplet_words + scale_word + words : words;
    }
    iter = (words, i, first, rest) => {
        if (first == '000' && rest.length === 0) return words;
        return iter(add_to_words(words, threeDigitWord(first[0], first[1], first[2]), others[i]), ++i, firstThree(rest), restString(rest));
    }
    return iter ('', 0, firstThree(String(num)), restString(String(num)));
}

console.log(numToWords(92120000000000000));

module.exports = numToWords;
