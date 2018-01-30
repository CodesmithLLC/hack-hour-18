/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 * 
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
const ranks = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  'Jack': 11,
  'Queen': 12,
  'King': 13,
  'Ace': 14,
};
function countElems(array, val) {
  let result = 0;
  for (let i=0; i<array.length; i++) {
    if (array[i] === val) result++;
  }
  return result;
}

function handEval(hand) {
  const counts = {};
  const maxRank = Math.max(...hand);

  for (let i=0; i<hand.length; i++) {
    if (!counts[i]) {
      counts[i] = countElems(hand, hand[i]);
    }
  }
  //Check 4 of kind
  if (Object.values(counts).includes(4)) return 6;

  //Check full house
  if (Object.values(counts).includes(3) && Object.values(counts).includes(2)) {
    return 5;
  }

  //Check straight

  //Check 3 of kind
  if (Object.values(counts).includes(3)) return 3;

  //Check Two Pair
  // if (Object.values(counts).includes(2)) return 2;

  //Check Pair
  if (Object.values(counts).includes(2)) return 1;

  //Check Card
  return 0;
}

function poker(hand1, hand2) {


}

module.exports = poker;
