/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function eachPermutation(arr, callback) {
  function helper(array, remaining) {
    if (remaining.length === 0) return callback(array);
    for (let i=0; i<remaining.length; i++) {
      let copyArr = remaining.slice();
      copyArr.splice(i, 1);
      helper(array.concat(remaining[i]), copyArr);
    }
  }
  helper([], arr);
}

// eachPermutation([1, 2, 3], function(perm) {
//   console.log(perm)
// });

module.exports = eachPermutation;
