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
  if (s1.length !== s2.length) return false;
  let counter = 0;
  let notYetFoundCounter = s1.length;
  while (notYetFoundCounter) {
    const end = s1.slice(counter);
    const beginning = s1.slice(0, counter);
    if (end + beginning === s2) return isSubstring(end + beginning, s2); //would be cleaner to use return true here;
    counter += 1;
    notYetFoundCounter -= 1;
  }
  return false;
}

module.exports = { isSubstring, stringRotation };

// console.log(stringRotation('hids', 'idsh'));
=======

}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
>>>>>>> d20d22f78050d9491b3d00b22c085605b8a3b8b1
