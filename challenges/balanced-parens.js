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

function balancedParens(input, pos = 0) {
	if (input.length <= 1) return false;
	const newInput = input.replace(/[^\(\)\[\]\{\}]/g, '');
	
	
	while (pos < newInput.length) {

		if (input.charAt(pos) === '(') {
			
			return balancedParens(newInput, pos++);
    }
    pos++;
	}
}
var t = 20;

balancedParens('(');  // false
// balancedParens('()'); // true
// balancedParens(')(');  // false
// balancedParens('(())');  // true

module.exports = balancedParens;
