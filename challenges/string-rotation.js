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
<<<<<<< HEAD
  //first check for length of input strings (both strings should be the same length, otherwise it's an automatic false);
  //else if the call to isSubstring returns true, return true;
  //else check to see if the string divided in half and then, when the second half is concated with the first half, is equal to s2. 
  if (s1.length !== s2.length) {
    return false;
  }
  else if (isSubstring(s1, s2) === true) {
    return true;
  } else {
      let firstSlice = s1.slice(0, Math.floor(s1.length/2));
      let rotated = s1.slice(Math.floor((s1.length/2))).concat(firstSlice);
      return rotated === s2;
  }
=======

>>>>>>> d20d22f78050d9491b3d00b22c085605b8a3b8b1
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
