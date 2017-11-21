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
  const wordStack = [];
  const words = str.match(/[a-z]+/gi);
  if (!words) return true;

  for (let i = 0; i < words.length; i += 1) {
    const curWord = words[i].toLowerCase();
    const lastWord = wordStack[wordStack.length - 1];
    if (curWord === lastWord) {
      wordStack.pop();
    } else {
      wordStack.push(curWord.split('').reverse().join(''));
    }
  }
  return wordStack.length === 0;
}

// console.assert(matchWord('__END_DNE-----') === true);
// console.assert(matchWord('__ENDDNE__') === false);
// console.assert(matchWord('IF()()fi[]') === true);
// console.assert(matchWord('for__if__rof__fi') === false);
// console.assert(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw') === true);
// console.assert(matchWord('') === true);
// console.assert(matchWord('___') === true);

module.exports = matchWord;
