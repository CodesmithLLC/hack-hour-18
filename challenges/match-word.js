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
  if (str === '') {return true};
  var clone = "";
  var letters = str.replace(/[^a-zA-Z]+/g, '');
  var array = letters.split("");
  for (let i = 0 ; i < array.length; i++) {
    array[i] = array[i].toLowerCase()
  }
  var status = true;
  for (let i = 0, j = array.length -1; i <= j, j >= 0; i++, j--) {
    if (array[i] !== "_" && array[j] !== "_") {
        if (array[i] !== array[j]) {
        status = false;
      }
      // if (i === Math.floor(array.length/2)) {
      //   console.log(i)
      // if (array[i + 1] !== "_") {
      //   status = false;
      //   }
      // }
    }
  }
  return status;
}

module.exports = matchWord;
