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
  //replace punctuation with space
  str = str.toLowerCase().replace(/[@.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").trim();
  const arr = str.replace(/ +(?= )/g,'').split(' ');
  const obj = {};
  const tempArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!obj[reverseStr(arr[i])]) {
      obj[arr[i]] = reverseStr(arr[i]);
      tempArr.push(arr[i]);
    }
    else if (arr[i] === obj[tempArr[tempArr.length - 1]]) {
      tempArr.pop();
    }
  }
  return tempArr.length === 0;
}

function reverseStr(str) {
  return str.split('').reverse().join('');
}



// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))
// console.log(matchWord('for__if__rof__fi'));

module.exports = matchWord;
