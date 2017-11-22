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

/*

const matchWord = str => {
  // strip punctuation or return empty array if no letters found
  const words = str.match(/[a-zA-Z]+/g) || [];
  // declare cache to keep track of values
  const wordStack = [];
  // loop through words and start checking to see if the sentence is closed
  words.forEach(word => {
    // grab first cached element
    const cached = (wordStack[0] || '').toLowerCase();
    // grab reversed version of current word
    const reversed = word.split('').reverse().join('').toLowerCase();
    // if the words match up, we'll remove it from our cache, if not we'll add it to the cache
    cached === reversed ? wordStack.shift() : wordStack.unshift(word);
  })
  // if everything was closed properly, we shouldn't have anything left in the stack
  return !wordStack.length;
}
*/
module.exports = matchWord;
