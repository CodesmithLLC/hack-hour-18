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
  if (s1.length !== s2.length || s1.constructor !== String || s2.constructor !== String) {return false}
  return stringRotation(s1, s2)
  // return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (s1.length !== s2.length || s1.constructor !== String || s2.constructor !== String) {return false}
  let count = 0
  let arr = s2.split("")
  while(count !== s1.length) {
   if (s1.indexOf(arr.join("")) >= 0) {
     return true
   }
   arr.push(arr[0])
   arr.shift()
   count++
  }
  return false
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
