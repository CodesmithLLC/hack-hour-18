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

function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday)) return 0;
  let highestPrice = 0;
  let lowestPrice = 0;

  Object.keys(stock_prices_yesterday).forEach((time) => {
    if (stock_prices_yesterday[time] > highestPrice) highestPrice = stock_prices_yesterday[time];
    if (!lowestPrice) lowestPrice = highestPrice;
    if (stock_prices_yesterday[time] < lowestPrice) lowestPrice = stock_prices_yesterday[time];
  });

  return highestPrice - lowestPrice;
}

module.exports = bestProfit;
