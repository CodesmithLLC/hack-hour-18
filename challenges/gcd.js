/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

 // find the divisors of each number and compare to find the largest number in common
function gcd(a, b) {
  let adivisorsA = [1];
  let adivisor = 2;
  let adivisorMultiple = a / adivisor;
  
  while (adivisor < adivisorMultiple) {
    if (a % adivisor === 0 ) {
      adivisorMultiple = a / adivisor;
      adivisorsA.push(adivisor, adivisorMultiple);
    }
    adivisor += 1;
  }

  let bdivisorsB = [1];
  let bdivisor = 2;
  let bdivisorMultiple = b / bdivisor;
  
  while (bdivisor < bdivisorMultiple) {
    if (b % bdivisor === 0 ) {
      bdivisorMultiple = b / bdivisor;
      bdivisorsB.push(bdivisor, bdivisorMultiple);
    }
    bdivisor += 1;
  }

  bdivisorsB.push(b);
  adivisorsA.push(a);

  let max = 1;

  bdivisorsB.forEach(element => {
    if (adivisorsA.includes(element) && element > max) {
      max = element;
    }
  })

  return max;

}

module.exports = gcd;


// console.log(gcd(60, 20));