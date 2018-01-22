// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  if (typeof str !== 'string') return;
  const x = parseFloat(str[1]);
  const y = parseFloat(str[3]);

  let moves = 0;
  let j = 2;

  for (let i = 1; i <= 2; i += 1) {
    if (x + i <= 8 && y + j <= 8) moves += 1;
    if (x + i <= 8 && y - j > 0) moves += 1;
    if (x - i > 0 && y + j <= 8) moves += 1;
    if (x - i > 0 && y - j >= 0) moves += 1;
    j -= 1;
  }
  return moves;
}

module.exports = knightjumps;
