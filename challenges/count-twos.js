// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
let calculatedtwos = 0;
    if(num<2){
        return 0;
    }else if(num<10 && num>=2){
        return 1;
    }else if(num>10){
        let numoftens = Math.floor(num/10);
        let numtostring = "" + num;
        let firstdigit = numtostring.charAt(0)
        calculatedtwos += numoftens;
    
        if(firstdigit==="0"){
          return calculatedtwos;
        }else if(firstdigit!==0){
          let numofsingles = parseInt(firstdigit);
          let twocount = Math.floor(numofsingles/2);
          calculatedtwos += twocount;
          return calculatedtwos;
        }
    }
}

module.exports = countTwos;