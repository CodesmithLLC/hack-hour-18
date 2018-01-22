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
  const position = [];
  str.split('').forEach(letter => {
    if (['1', '2', '3', '4', '5', '6', '7', '8'].includes(letter)) {
      position.push(Number(letter));
    }
  });
  let moves = 8;
  position.forEach(num => {
    if (num <= 2 || num >= 7) {
      moves -= 2;
      if (num === 1 || num === 8) {
        moves -= 1;
      }
    }
  });
  return moves;
}


module.exports = knightjumps;
