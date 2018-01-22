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
  let values = {
    "(1 1)": 4,
    "(1 2)": 4,
    "(1 3)": 6,
    "(1 4)": 6,
    "(1 5)": 6,
    "(1 6)": 6,
    "(1 7)": 4,
    "(1 8)": 4,
    "(2 1)": 5,
    "(2 2)": 6,
    "(2 3)": 8,
    "(2 4)": 8,
    "(2 5)": 8,
    "(2 6)": 8,
    "(2 7)": 6,
    "(2 8)": 5,
    "(3 1)": 8,
    "(3 2)": 10,
    "(3 3)": 16,
    "(3 4)": 16,
    "(3 5)": 16,
    "(3 6)": 16,
    "(3 7)": 10,
    "(3 8)": 8,
    "(4 1)": 8,
    "(4 2)": 10,
    "(4 3)": 16,
    "(4 4)": 16,
    "(4 5)": 16,
    "(4 6)": 16,
    "(4 7)": 10,
    "(4 8)": 8,
    "(5 1)": 8,
    "(5 2)": 10,
    "(5 3)": 16,
    "(5 4)": 16,
    "(5 5)": 16,
    "(5 6)": 16,
    "(5 7)": 10,
    "(5 8)": 8,
    "(6 1)": 8,
    "(6 2)": 10,
    "(6 3)": 16,
    "(6 4)": 16,
    "(6 5)": 16,
    "(6 6)": 16,
    "(6 7)": 10,
    "(6 8)": 8,
    "(7 1)": 5,
    "(7 2)": 6,
    "(7 3)": 8,
    "(7 4)": 8,
    "(7 5)": 8,
    "(7 6)": 8,
    "(7 7)": 6,
    "(7 8)": 5,
    "(8 1)": 8,
    "(8 2)": 10,
    "(8 3)": 16,
    "(8 4)": 16,
    "(8 5)": 16,
    "(8 6)": 16,
    "(8 7)": 10,
    "(8 8)": 8,
  }

  for(let key in values){
    if(key === str) return values[key];
  }
}

module.exports = knightjumps;
