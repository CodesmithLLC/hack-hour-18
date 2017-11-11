/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') throw new Error('Must pass string');
  return s2.split('').some((curLetter, i, letterArr) => {
    if (curLetter === s1[0]) {
      const newStr = letterArr.slice(i).concat(letterArr.slice(0, i)).join('');
      if (newStr === s1) return true;
    }
    return false;
  });
}

// console.log('testing');
// console.log(stringRotation('hello', 'hello'));
// console.assert(stringRotation('hello', 'hello') === true);
//
// console.log(stringRotation('hello', 'llohe'));
// console.assert(stringRotation('hello', 'llohe') === true);
//
// console.log(stringRotation('hello', 'he'));
// console.assert(stringRotation('hello', 'he') === false);
//
// console.log(stringRotation('hello', 'ollhe'));
// console.assert(stringRotation('hello', 'ollhe') === false);
//
// console.log(stringRotation('anna', 'nnaa'));
// console.assert(stringRotation('anna', 'nnaa') === true);
//
// console.log(stringRotation('hellohello', 'hellohello'));
// console.assert(stringRotation('hellohello', 'hellohello') === true);

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
