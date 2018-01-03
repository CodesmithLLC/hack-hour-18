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
  str = str.replace(/[^A-Za-z0-9]/g, ' ').toLowerCase();
  const strArr = str.split(' ');
  const wordArr = [];
  strArr.forEach((e) => {
    if (e !== '') wordArr.push(e);
  })
  const checkArr = [];
  if (wordArr.length % 2 === 1) return false;
  wordArr.forEach((elem, index) => {
    if (checkArr[0] === undefined) checkArr.push(elem);
    else { for (let i = checkArr.length - 1; i >= 0; i--) {
        if (elem === checkArr[i].split('').reverse().join('')) {
          if (i === checkArr.length - 1) checkArr.pop();
          else return false;
        } else {
          if (i === 0) checkArr.push(elem);
        } 
      } 
    }
  });
  if (checkArr.length > 0) return false;
  return true;

}



console.log(matchWord('__END_DNE-----'));//  -> true
console.log(matchWord('__ENDDNE__')); // ->  false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));//  -> // true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi')); // -> //false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // -> true
console.log(matchWord('')); // -> true


}

module.exports = matchWord;
