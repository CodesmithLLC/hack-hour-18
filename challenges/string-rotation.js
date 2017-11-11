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
  if(s1.length != s2.length) return false;  // if different length just return false;
  var count = 0, checked = false;
  while(checked === false){
    count++;
    checked = true;
    var startMaybe = s2.indexOf(s1[0]); // Find the indexOf "h2 === h1[0]"
    var comparer = s2.slice(startMaybe) + s2.slice(0,startMaybe); // reorder h2 to make that value h2[0]
    for(let i = 0; i<s2.length;i++){
      if(comparer[startMaybe+i] === s1[i]){
        continue;
      }else{  // next is not the same - rotate 1 spot and check again
        console.log('next is not the same')
        if(count <= s1.length) checked = false; // run while loop until every rotation checked
        s2 = comparer.slice(1)+comparer.slice(0,1);
      }
    }
  }
  return isSubstring(s1,comparer) // compare in isSubstring to see if they're the same
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
