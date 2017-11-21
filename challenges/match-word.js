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
    if(str === '') return true;
    const term = str.replace(/[^a-z0-9+]+/gi, '+');
    const termArr = term.split('');

    if (termArr[0] === '+') termArr.splice(0, 1);
    if (termArr[termArr.length - 1] === '+') termArr.splice(termArr.length - 1, 1);

    const halfLength = Math.ceil(termArr.length / 2);
    const firstTerm = termArr.splice(0, halfLength);
    const lastTerm = termArr.splice(halfLength, termArr.length - 1);
    
    console.log('firstTerm:  ', firstTerm);
    console.log('lastTerm:  ', lastTerm);
    
}

console.log(matchWord('__END_DNE-----')); //  -> true
console.log(matchWord('__ENDDNE__')); //  -> false       (not separated by a space)
// console.log(matchWord('IF()()fi[]')); //  -> true        (should be case-insensitive)
// console.log(matchWord('for__if__rof__fi')); //  -> false     not properly closed. like ( [) ] 
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); //  -> true
// console.log(matchWord('')); //  -> true

module.exports = matchWord;
