// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function uniques(array) {
  const result = [];
  for (let i=0; i<array.length; i++) {
    if (result.indexOf(array[i]) === -1) {
      result.push(array[i])
    }
  }
  return result;
}

function commonElements(array1, array2, array3, array4){
  const storage = {};
  const result = [];
  for (let i=0; i<array1.length; i++) {
    storage[array1[i]] = 1;
  }

  for (let i=0; i<array2.length; i++) {
    if (storage[array2[i]] === 1) {
      storage[array2[i]] = 2;
    }
  }
  for (let i=0; i<array2.length; i++) {
    if (storage[array3[i]] === 2) {
      storage[array3[i]] = 3;
    }
  }
  for (let i=0; i<array2.length; i++) {
    if (storage[array4[i]] === 3) {
      result.push(array4[i]);
    }
  }
  if (result.length === 0) return "Nothing in Common!";
  return uniques(result);
}
// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// var array4 = ['ferret',12,12,45,9,66,77,78,2000];
// console.log(commonElements(array1, array2, array3, array4));
module.exports = commonElements;
