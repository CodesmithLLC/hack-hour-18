// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  let stack = [];
  let temp = str.toLowerCase().split(/[^a-zA-Z]/);
  let wordArr = temp.filter( word => (word.length) );

  wordArr.forEach( word => {
    let reversed = word.split('').reverse().join('');
    if (!stack.length) stack.push(word);
    else if (reversed === stack[stack.length-1]) stack.pop();
    else stack.push(word);
  });
  return !stack.length;
}

console.log(matchWord('__END_DNE-----'), '    should be:  true');  //-> true
console.log(matchWord('__ENDDNE__'), '    should be:  false');  //-> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'), '    should be:  true');  //-> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'), '    should be:  false');  //-> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt for if_fi rof #*#  elihw'), '    should be:  true');  //-> true
console.log(matchWord('%%$@$while  try !   for yrt if_fi rof #*#  elihw'), '    should be:  false');  //-> false
console.log(matchWord(''), '    should be:  true');  //-> true

module.exports = matchWord;


/*
function matchWord(str) {
  var keywords = str.match(/[a-zA-Z]+/g) || [];
  var wordStack = [];
  for (var word of keywords) {
    if (
      word.split('').reverse().join('').toLowerCase() === 
      (wordStack[0] || '').toLowerCase()
    )
      wordStack.shift();
    else
      wordStack.unshift(word);
  }
  return !wordStack.length;
}
*/
/*
function matchWord(str) {
  //edge case - if str is empty
  if(str === '') return true;
  //trim leading and ending non-alpha characters
  str = str.replace(/^[^a-z]+/i, "");
  str = str.replace(/[^a-z]+$/i, "");

  //put all words into an array
  //if there is only one word in the array, return false
  var wordArray = str.match(/[a-z]+/ig);
  if(wordArray.length < 2) return false;

  //take first word and convert to lower case;
  //take last word and reverse letters and convert to lower case
  var firstWord = wordArray[0].toLowerCase();
  var lastWordReversed = wordArray[wordArray.length-1].split('').reverse().join('').toLowerCase();
  //return boolean value
  return firstWord === lastWordReversed;
}

*/