/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example:
 * var result = anagrams('abc');
 * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

// function anagrams(string) {
//   if (string.length < 2) return string;
//   const output = [];
//   for (let i = 0; i < string.length; i += 1) {
//     console.log(`string:  ${string}`);
//     console.log('*****');
//     const current = string[i];
//     console.log(`i:  ${i}`);
//     console.log(`current:  ${current}`);
//     console.log(`string.slice(0, i):  ${string.slice(0, i)}`);
//     console.log(`string.slice(i + 1, string.length):  ${string.slice(i + 1, string.length)}`);
//     const remaining = string.slice(0, i) + string.slice(i + 1, string.length);
//     console.log(`remaining:  ${remaining}`);
//     for (const anagram of anagrams(remaining)) {
//       console.log('RECURSIVE CALL');
//       output.push(current + anagram);
//       console.log(`OUTPUT:  ${output}`);
//     }
//   }
//   return output;
// }

// console.log(anagrams('abc')); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

function anagrams(string) {
  if (string.length < 2) return string;
  const output = [];
  for (let i = 0; i < string.length; i += 1) {
    const current = string[i];
    const remaining = string.slice(0, i) + string.slice(i + 1, string.length);
    for (const anagram of anagrams(remaining)) {
      output.push(current + anagram);
    }
  }
  return output;
}

module.exports = anagrams;
