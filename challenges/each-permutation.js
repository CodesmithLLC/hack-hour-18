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
  const perms = getPerms(arr);
  perms.forEach(elem => callback(elem));
}

function getPerms(array) {
  let result = [];

  function permute(arr, perm = []) {
    if (arr.length === 0) {
      result.push(perm);
    } else {
      for (let i = 0; i < arr.length; i += 1) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), perm.concat(next));
      }
    }
  }
  permute(array);
  return result;
}

module.exports = eachPermutation;
