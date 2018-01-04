'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  const threes = Math.floor(999 / 3);
  const fives = Math.floor(999 / 5);
  let threesSum = 0;
  let fivesSum = 0;
  for (let i = 1; i <= threes; i++) {
    threesSum += 3 * i;
  }
  for (let i = 0; i <= fives; i++) {
    fivesSum += 5 * i;
  }
  return threesSum + fivesSum;
}

// console.log(sumMultiples3Or5Below1000());

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
// function sumMultiplesXOrYBelowZ(x, y, z) {
//   const xs = Math.floor((z - 1) / x);
//   const ys = Math.floor((z - 1) / y);
//   let xSum = 0;
//   let ySum = 0;
//   for (let i = 1; i <= xs; i++) {
//     xSum += x * i;
//   }
//   for (let i = 0; i <= ys; i++) {
//     ySum += y * i;
//   }
//   return xSum + ySum;  
// }

function sumMultiplesXOrYBelowZ(x, y, z, sum=0) {
  z -= 1;
  if (z === 0) return sum;
  if (z % x === 0) sum += z;
  else if (z % y === 0) sum += z;
  return sumMultiplesXOrYBelowZ(x, y, z, sum);
}

// console.log(sumMultiplesXOrYBelowZ(3, 5, 1000));

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
