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
 *              stringRotation("hello", "ollheS") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  for (var i=0; i<s2.length; i++){
    var s2a = s2.slice(0, s2.length-1);
    var s2b = s2.slice(s2.length-1);
    s2 = s2b + s2a;
    if (isSubstring(s1, s2) === true){
      return true;
    }
  }
  return false;
}

// var s1 = "hello";
// var s2 = "elloh";
// s2 = s2.slice(s2.length-1) + s2.slice(0, s2.length-1);
// s2a = s2.slice(0, s2.length-1);
// s2b = s2.slice(s2.length-1);
// console.log(s2a);
// console.log(s2b);
// console.log(s2b+s2a);
// stringRotation(s1, s2);

//1x isSubstring call
//need to take two strings
//run them through
//return boolean
	
//rotate string s2 by attaching end char to front char using string methods (charAt, splice, substr, substring) one at a time
//each time rotate, call isSubstring
//s2 = s2.splice(1, 0)

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
