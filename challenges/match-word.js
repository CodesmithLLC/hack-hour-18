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

// skip spaces or punctuation 
// until opens with a string
// then start tracking and pushing until next space or punctuation
// reverse and save to var
// then skip spaces or punctuation until next string
// then start tracking and pushing until next space or punctuation
// then check if equivalent

function matchWord(str) {
	let caseStr = str.toLowerCase('');
	let openingStr = [];

	//stack push/shift method
	for (let i=0; i<str.length; i++){
		if (caseStr.charAt(i).match([a-zA-Z])){
			openingStr.push(caseStr.charAt(i));
	}

	//regex match/string reverse method
	// for (let i=0; i<caseStr.length; i++){
	// 	if (caseStr.charAt(i).match([a-zA-Z])){
	// 		openingStr.push(caseStr.charAt(i));
	// 	}
	// }

}

module.exports = matchWord;
