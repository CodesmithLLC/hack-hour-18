// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

/*
 * NOTES
 * Knights move to a square that is two squares away horizontally 
 * and one square vertically, or two squares vertically and one 
 * square horizontally
 *
 * the knight is at the edge of the board if:
 * 1. x position plus 1 or 2 is greater than or equal to 8
 * 2. x position minus 1 or 2 is less than or equal to 1
 * 3. y position plus 1 or 2 is greater than or equal to 8
 * 4. y position minus 1 or 2 is less than or equal to 1
 * 
 * layout all possible combinations of a knights moves in two arrays - x and y
 * figure out the knights position after each possible move, given str coordinates
 * a move is valid if both x and y are greater than 0
 * count all valid moves
*/

function knightjumps(str) {
  let validPos = 0;
  // split input string into x and y values
  const currentX = Number(str.substring(str.indexOf('(') + 1, str.indexOf(' ')));
  const currentY = Number(str.substring(str.indexOf(' ') + 1, str.indexOf(')')));

  // layout all possible combinations of a knights moves in two arrays - x and y
  const posXmoves = [1, 2, 1, 2, -1, -2, -1, -2];
  const posYmoves = [2, 1, -2, 1, 2, 1, -2, -1];

  // loop through all possibilites
  // without consiering invalid positions, there are always 8 moves
  for (let i = 0; i < 8; i += 1) {
    // find x and y position after move
    const finalX = currentX + posXmoves[i];
    const finalY = currentY + posYmoves[i];

    // a move is valid if both x and y are greater than 0
    if (finalX && finalY > 0) validPos += 1;
  }

  return validPos;
}

const str1 = '(4 5)';
const str2 = '(5 6)';
const str3 = '(1 1)';
const str4 = '(2 3)';
console.log(knightjumps(str1));
console.log(knightjumps(str2));
console.log(knightjumps(str3));
console.log(knightjumps(str4));

module.exports = knightjumps;
