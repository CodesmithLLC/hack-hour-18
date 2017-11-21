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

// NOT WORKING
function matchWord(str) {
  let string = '';

  for (let i = 0; i < str.length; i += 1) {
    if (str[i].match(/[a-z]/i)) {
      string += str[i]
    } else {
      string += ' ';
    }
  }
  const strArray = string.split(' ')
    .filter(elem => elem !== '')
    .map(el => el.toLowerCase());

  console.log(strArray)
  for (let i = 0; i < strArray.length; i += 1) {
    let next = strArray[i + 1].split('').reverse().join('');
    let last = strArray[strArray.length - (1 + i)].split('').reverse().join('');
    let current = strArray[i];

    if (current !== next && current !== last) return false;
  }
  return true;
}

module.exports = matchWord;
