/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if(typeof a !== "number" || typeof b !== "number") return;

  let biggest;
  if(a < b){
     biggest = b;
  } else {
      biggest = a;
  }

  let match = false;
  let highest = biggest;
  while(match === false){
    if(a % highest === 0 && b % highest === 0){
        match = true;
    } else {
        highest--;
    }
  }
  return highest;
}

module.exports = gcd;