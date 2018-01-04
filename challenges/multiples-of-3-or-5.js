'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  let threes = 0;
  let fives = 0;
  let multi = 0
  while ((threes += 3) < 1000) sum += threes;
  while ((fives += 5) < 1000) sum += fives;
  while ((multi += 15) < 1000) sum -= multi;
  return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let xSum = 0;
  let ySum = 0;
  const intersection = x * y
  let iSum = 0;
  while ((xSum += x) < z) sum += xSum;
  while ((ySum += y) < z) sum += ySum;
  while ((iSum += intersection) < z) sum -= iSum
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;