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

function bestProfit(prices) {
  if (!Array.isArray(prices)) return 0;
  let minLeft = prices[0];
  let maxRight = prices[prices.length - 1];
  // let i = 1;
  // let j = prices.length - 1;
  // while (i <= j) {
  //   if (prices[i+1] < minLeft) {
  //     minLeft = prices[++i];
  //   }
  // }
  for (let i = 1, j = prices.length - 1; i <= j; i++ , j--) {
    minLeft = Math.min(minLeft, prices[i]);
    maxRight = Math.max(maxRight, prices[j]);
  }
  const maxProfit = maxRight - minLeft;
  return maxProfit > 0 ? maxProfit : 0;
}

// const profits = [1, 10, 2, 3, 22, 23, 15];
// const profits = [5, 4, 3, 2, 1];
const profits = [500, 486, 490, 505, 523, 480, 440, 410, 511, 400, 310];
console.log(bestProfit(profits));

module.exports = bestProfit;
