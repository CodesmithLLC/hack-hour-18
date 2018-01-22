/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {
  let posibilities = 0;
  if (n > 1 || n > 2) posibilities += 1;
  if (n - 2 > 0) posibilities += n - 2;
  if (n - 4 > 0) posibilities += n - 4;

  return posibilities;
}

console.log(countStairs(5));

// keep track of all posibilities
// unless n is equal to 1 or 2, there will always be more than 1 posibility
// the only posibility that can be as long as n is 1 step at a time
// iterate up to n 1 step at a time
// save this possibility
// iterate again, this time introducing a single double step
// fill the remaining steps up to n with single steps

// if n - 2 > 2
// then n - 2 gives us the number of possibilites with a single double step



// iterate again, this time with 2 double steps
// fill the remaining steps up n with single steps



module.exports = countStairs;
