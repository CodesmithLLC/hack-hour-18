/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */


 //() [] {} 
 

function balancedParens(input){
	var opener = "({[";
	var closer = ")}]"
	var follow = {
		"(": ")",
		'{':'}',
		'[':']'
	}
	var mirror = ["."];
	for (var char of input) {
		if (opener.includes(char)) {
			mirror.push(follow[char]);
		}
		if (closer.includes(char)) {
			mirror.unshift(char)
		}
	}
	console.log(mirror)
	for (let i = 0 ; i < mirror.length; i++) {
		if (mirror.shift() !== mirror.pop()) {
			return false;  //got the order of the symbols before the period in the mirror wrong. if the order was reversed, it might be more valid. 
		}
	}	
	return true;
}
module.exports = balancedParens;









