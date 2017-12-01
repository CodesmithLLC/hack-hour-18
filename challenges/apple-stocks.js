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

function bestProfit(stockPricesYesterday) {
  if (stockPricesYesterday.length < 2) return 0;
  let buyPrice = Infinity;
  let highestProfit = 0;

  for (let i = 0; i < stockPricesYesterday.length; i += 1) {
    const curPrice = stockPricesYesterday[i];
    const curProfit = curPrice - buyPrice;
    highestProfit = Math.max(highestProfit, curProfit);
    buyPrice = Math.min(buyPrice, curPrice);
  }

  return highestProfit;
}

// // Tests
// const testPrices1 = [10, 20, 5, 6, 30, 2, 100, 0, 20, 15, 100, 50];
// console.assert(bestProfit(testPrices1) === 100);
// const testPrices2 = [3, 2, 0, 100, 5, 6, 7, 99, 1, 99];
// console.assert(bestProfit(testPrices2) === 100);
// const testPrices3 = [0, 100, -1, 98, -2, 97];
// console.assert(bestProfit(testPrices3) === 100);
//
// // Edge cases
// const testPrices0 = [3, 2, 1];
// console.assert(bestProfit(testPrices0) === 0);
// const testPrices0a = [2, 1];
// console.assert(bestProfit(testPrices0a) === 0);
// const testPrices0b = [1];
// console.assert(bestProfit(testPrices0b) === 0);
// const testPricesNone = [];
// console.assert(bestProfit(testPricesNone) === 0);

module.exports = bestProfit;
