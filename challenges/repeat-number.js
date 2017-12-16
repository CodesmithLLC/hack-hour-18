/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  const store = {};
  for (let i = 0; i < array.length; i += 1) {
    if (!store[array[i]]) {
      store[array[i]] = 1;
    } else {
      store[array[i]] += 1;
    }
  }
  for (const key in store) {
    if (store.hasOwnProperty(key)) {
      if (store[key] === 2) return key;
    }
  }
}

// console.log(repeatNumbers([3, 4, 2, 6, 7, 3]));

module.exports = repeatNumbers;
