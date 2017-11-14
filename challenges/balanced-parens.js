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

//need to refactor to check if open parens are closed in correct order
//outer not closed before inner parens/brackets/braces are closed (e.g. balancedParens('[(]{)}');)
//possible approach: utilize one main stack, in order to keep track of closing outer parens/brackets/braces
//OR pop off last item in stack to compare with current input item
function balancedParens(input){
	//use stack data structure
	let parenStack = [],
	bracketStack = [],
	braceStack = [];

	//loop through each element of string to 
	for (let i=0; i<input.length; i++){

		//if unopened paren/bracket/brace, then end
		if ((input[i]===')' && parenStack.length === 0) || (input[i]===']' && bracketStack.length === 0) && (input[i]==='}' && braceStack.length === 0)){
			return false;
		}

		//if open paren/bracket/brace
		if (input[i]==='('){
			parenStack.push('openparen');
		}
		if (input[i]==='['){
			bracketStack.push('openbracket');
		}
		if (input[i]==='{'){
			braceStack.push('openbrace');
		}

		//if close paren/bracket/brace
		if (input[i]===')'){
			parenStack.shift('openparen');
		}
		if (input[i]===']'){
			bracketStack.shift('openbracket');
		}
		if (input[i]==='}'){
			braceStack.shift('openbrace');
		}
	}

	//check if any paren/bracket/braces left open/unclosed
	if (parenStack.length === 0 && bracketStack.length === 0 && braceStack.length === 0){
		return true;
	} else {
		return false;
	}
}

module.exports = balancedParens;
