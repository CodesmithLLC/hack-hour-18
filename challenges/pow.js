/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
<<<<<<< HEAD
 if(typeof base !== 'number' || typeof power !== power || base === 0 || power === 0) return;
 let numArr = [];
 while(power !== 0){
  numArr.push(base);
  power--;
 }
 let total = 1;
 for(let i = 0;i < numArr.length;i++){
   total *= numArr[i]
 }
 return total;
=======

>>>>>>> 0f6a8f50172c9a792500c914e92ddb30987ac4e7
}

module.exports = pow;
