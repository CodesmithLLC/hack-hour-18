/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let bigger, smaller;
  if (b > a){
    bigger = b;
    smaller = a;
  }else{
    bigger = a;
    smaller = b;
  }
  let count = 1;
  let divisor = 1;
  while(count < bigger/2){
    if(bigger % count === 0){
      if(smaller % count === 0){
        divisor = count;        
      }
    }
    count++;
  }
  return divisor;
}
module.exports = gcd;