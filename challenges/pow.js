/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 function pow(base, power) {
  return power === 0? 1 : base * pow(base, power-1);
}

// function pow(base, power) {
//     let count = 0;
//     while(count!==power){
//         base = base*base;
//         count++;
//     }
//     return base;
// }

// let count = 0;

// function pow(base,power) {
//   if(power === 0){
//       return base;
//   }else if(count !== power){
//     base = base*base;
//     count++;
//     pow();
//   }else{
//     return base;
//   }   
// }

module.exports = pow;
