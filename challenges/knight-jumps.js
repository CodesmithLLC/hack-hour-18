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
  let x = parseInt(str[1]);
  let y = parseInt(str[3]);

  function validMove(posX, posY) {
    // console.log(posX, posY);
    if (posX < 1 || posX > 8) return 0;
    if (posY < 1 || posY > 8) return 0;
    return 1;
  }
  return validMove(x + 2, y + 1) +
    validMove(x + 2, y - 1) +
    validMove(x - 2, y + 1) +
    validMove(x - 2, y - 1) +
    validMove(x + 1, y + 2) +
    validMove(x - 1, y + 2) +
    validMove(x + 1, y - 2) +
    validMove(x - 1, y - 2);
}
// console.log(knightjumps('(4 5)'));

module.exports = knightjumps;
