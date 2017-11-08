/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
if(typeof n != 'number'){
  console.log('give me a number!')
  return;
}
let levelArr = [];
let spaces = ' ';
let spacesStart = '';
for(let i =0; i < n; i++){    // defines the # of spaces for the first row
  spacesStart = spacesStart + spaces;
}

while(n>0){
  let spacesLevel = spacesStart.slice(n) // sets the # of spaces for each row
  let stairs = '*';
  let level = '';
  for(let i = 0; i < n; i++){ // sets the # of '*'
    level = level + stairs;
  }
  levelArr.unshift(spacesLevel + level) // combines '*' and ' ' for each row
  n--;
}
  for(i = 0; i <= levelArr.length-1; i++){    //  Let there be stairs!
    console.log(levelArr[i]);
  }
}

// drawStairs(1)
module.exports = drawStairs;
