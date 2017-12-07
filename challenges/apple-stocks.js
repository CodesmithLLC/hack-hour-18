/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */
Array.prototype.consistentPrice = () => {
  for (let i = 1; i < this.length; i += 1) {
   if(this[i] !== this[0]) return false;
  }
  return true;
}

function bestProfit(stock_prices_yesterday) {
  if (!stock_prices_yesterday.length || !Array.isArray(stock_prices_yesterday)) return 0;

  // if (consistentPrice) return 0;
  return 'test';
}

console.log(bestProfit([]));
console.log(bestProfit(1));
console.log(bestProfit([1]));
console.log(bestProfit([1, 1, 1, 1, 1, 1]));

module.exports = bestProfit;
