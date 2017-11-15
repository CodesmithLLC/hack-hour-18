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
let y = Array.from(s2);
for(var i = 0; i < y.length; i++){
 y.unshift(y.pop())
x = y;
let c = x.toString().replace(/,/g, "")
if (c == s1){return isSubstring(c, s1)}
}
return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
