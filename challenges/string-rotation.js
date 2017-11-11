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
  if(s1.length > s2.length){
    return false;
  }
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if(typeof s1 !== 'string' || typeof s2 !== 'string' || s1.length === 0 || s2.length === 0){
    return '';
  }
  var start = '';
  
  for(var i = 0;i < s2.length;i++){
    if(s2[i] === s1[0]){
      start += s2.slice(i,s2.length);
      start += s2.slice(0,i);
      s2 = start;
    }
  }
  return isSubstring(s1,s2);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
