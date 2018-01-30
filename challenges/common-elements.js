// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

const array1 = [1, 4, 6, 7, 'ferret', 12, 12, 99, 2000, 'dog', 'dog', 99, 1000];
const array2 = [15, 9, 9, 'ferret', 9, 26, 12, 12, 'dog'];
const array3 = [23, 12, 12, 77, 'ferret', 9, 88, 100, 'dog'];
const array4 = ['ferret', 12, 12, 45, 9, 66, 77, 78, 2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4) {
  const args = [...arguments];
  const result = [...new Set(args.reduce((a, b) => b.filter(x => a.includes(x))))];
  return result.length === 0 ? 'Nothing in Common!' : [...result];
}

// console.log(commonElements(array1, array2, array3, array4));
module.exports = commonElements;
