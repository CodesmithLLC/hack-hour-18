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
  if (prices.length < 2) return 0;
  let maxProfit = prices[1] - prices[0];
  let price1 = prices[0];
  let price2;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] < prices[i]) {
      price2 = prices[i];
      maxProfit = Math.max(maxProfit, price2 - price1);
      price1 = prices[i + 1];
    }
  }
  return maxProfit;
}

// const profits = [1, 10, 2, 3, 0, 22, 23, 15];

// console.log(bestProfit(profits));

module.exports = bestProfit;
