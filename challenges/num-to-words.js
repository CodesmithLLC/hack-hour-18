// Write a function that takes a number as an argument and returns its english word representation 
//as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
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

 /// ran out of time... damn that's a lot of possible cases!! :O

function numToWords(num) {
    let tens="";
    let hundreds="";
    let thousands= "";
    // let hundredthousands = "";
    let millions = "";
    let billions = "";
    let trillions = "";
    let quadrillions ="";

    let digits = (""+num).split("");
    let resolution = "";
    let holder = [ ];


    for(let i=digits.length-1;i=>0;i--){
        if(digit[digits.length-1]==="0"){
            switch(digits[digits.length-2]){
                case "1": 
                  tens="Ten";
                case "2": 
                  tens="Twenty";
                case "3": 
                  tens="Thirty";
                case "4": 
                  tens="Forty";
                case "5": 
                  tens="Fifty";
                case "6": 
                  tens="Sixty";
                case "7": 
                  tens="Seventy";
                case "8": 
                  tens="Eighty";
                case "9": 
                  tens="Ninety";
            }      
        }else{
            switch(digits[digits.length-2]+digits[digits.length-1]){
                case ["10"]: 
                  tens="Ten";
                case ["11"]: 
                  tens="Eleven";
                case ["12"]: 
                  tens="Twelve";
                case ["13"]: 
                  tens="Thirteen";
                case ["14"]: 
                  tens="Fourteen";
                case ["15"]: 
                  tens="Fifteen";
                case ["16"]: 
                  tens="Sixteen";
                case ["17"]: 
                  tens="Seventeen";
                case ["18"]: 
                  tens="Eighteen";
                case ["19"]:
                  tens="Nineteen";
            } 

        }

    }


}

let ex = [3,0,0,5,2,5,1,5,1,3,4,0,4,4,0];

module.exports = numToWords;
