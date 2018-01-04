'use strict';

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  const arr = [];
  let sum = 0;
  for (let i = 1; i * 3 < 1000 || i * 5 < 1000; i++) {
    const threes = i * 3;
    const fives = i * 5;
    if (threes < 1000 && !arr.includes(threes)) {
      arr.push(threes);
      sum += threes;
    }
    if (fives < 1000 && !arr.includes(fives)) {
      arr.push(fives);
      sum += fives;
    }
  }
  return sum;
}

// console.log(sumMultiples3Or5Below1000());


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  const arr = [];
  let sum = 0;
  for (let i = 1; i * x < z || i * y < z; i++) {
    const xs = i * x;
    const ys = i * y;
    if (xs < z && !arr.includes(xs)) {
      arr.push(xs);
      sum += xs;
    }
    if (ys < z && !arr.includes(ys)) {
      arr.push(ys);
      sum += ys;
    }
  }
  return sum;
}

// console.log(sumMultiplesXOrYBelowZ(3, 5, 10));

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
