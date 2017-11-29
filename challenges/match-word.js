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

// going to try to push on a queue
function matchWord(str) {
    const splitWords = str.match(/[a-zA-Z]+/g);  //using regex to split
    const queue = [];
    for (i = 0; i < splitWords.length; i+=1) {
        if(splitWords[i] !== ""){
            const reversedWord = splitWords[i].split('').reverse().join('');
            if(splitWords.indexOf(reversedWord) !== -1) {
                if(queue[queue.length - 1] === splitWords[i]) queue.pop();
                else queue.push(reversedWord);
            }
        }
    }
    return queue.length === 0;
}

// matchWord('__END_DNE-----');
// matchWord('IF()()fi[]'); 
matchWord('for__if__rof__fi');
module.exports = matchWord;








// const origAndReversed = []; //an array of wordForward1, wordBackward1, wordForward2, wordBackward2 ...
// splitWords.forEach(x => { //
//     origAndReversed.push(x);
//     origAndReversed.push(x.split('').reverse().join(''));
// })