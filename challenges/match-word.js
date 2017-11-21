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
    if (str === '') return true;
    const lower = str.toLowerCase();
    const queue = [];
    let pos = 0;

    function checkLetter(c) {
        return c.toLowerCase() !== c.toUpperCase();
    }

    //get words
    while (pos < str.length) {
        if (str[pos] === ' ') {
            pos++;
        } else if (checkLetter(lower[pos])) {
            // add word if find letter
            let wrd = '';
            while (lower[pos] !== undefined && checkLetter(lower[pos])) {
                wrd += lower[pos];
                pos++;
            }
            
            if (wrd.split('').reverse().join('') === queue[queue.length - 1]) {
                queue.pop();
            } else {
                queue.push(wrd);
            }
        } else {
            pos++;
        }
    }

    return queue.length === 0;
}

console.log(matchWord('__END_DNE-----'))
console.log(matchWord('__ENDDNE__'));  
console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
console.log(matchWord(''));

module.exports = matchWord;
