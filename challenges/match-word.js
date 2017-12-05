// Some languages have "if" statements that are closed by "fi" instead of curly brackets.
//Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". 
//Write a function that takes a string and returns true if every word is closed by its backwards counterpart. 
//Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    //change everything to lowercase 
    if (str.length === 0) return true;
    let lowerCase = str.toLowerCase().replace(/[^a-z]/g, '-').split('-');
    let stack = [];
    let test = [];
    for (let i = 0; i < lowerCase.length; i++) {
        if (lowerCase[i] !== '') {
            stack.push(lowerCase[i]);
        }
    }
    
    for (let f = 0; f < stack.length; f++){
        if (test.indexOf(stack[f].split('').reverse().join('')) === -1 ){
            test.push(stack[f]);
        } else {
            if (test.pop() !== stack[f].split('').reverse().join('')) return false;
        }
    }
    return test.length === 0;
    
    // return stack.reduce((acc, curVal, i, array) => {
    //     if (curVal !== array[array.length - 1 - i].split('').reverse().join('') || array.length === 1) {
    //         return false && acc;
    //     } else {
    //         return acc;
    //     }
    // }, true)
}

module.exports = matchWord;

console.log(matchWord('__END-DNE-----'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));