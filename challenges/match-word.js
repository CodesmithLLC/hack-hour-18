// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

function matchWord(str) {
  const arr = str.match(/[a-z]+/ig);
  if (!arr.length) return false;
  const stack = [];
  let currentWord = '';
  for (let i = 0; i < arr.length; i++) {
  	currentWord = arr[i].split('').reverse().join('');
  	console.log(stack);
  	if (!stack.length || stack[stack.length - 1].toLowerCase() !== currentWord.toLowerCase()) {
  		stack.push(arr[i]);
  	} else {
  		stack.shift();
  	}
  }
  if (stack.length === 0) return true;
  else return false;
}

console.log(matchWord('__END_DNE-----')); // -> true
console.log(matchWord('__ENDDNE__')); // -> false       (not separated by a space)
console.log(matchWord('IF()()fi[]')); // -> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi')); // -> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // -> true
console.log(matchWord('')); // -> true

// module.exports = matchWord;
