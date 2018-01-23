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
  if (stock_prices_yesterday.length === 0 || !Array.isArray(stock_prices_yesterday)) return 0;
  const prices = [];
  stock_prices_yesterday.forEach((price, index) => {
    if (price) prices.push(price);
  });
  return prices;
}

// function bestProfit(stock_prices_yesterday) {
//   if (stock_prices_yesterday.length === 0 || !Array.isArray(stock_prices_yesterday.length)) return 0;
//   const prices = [];
//   let min = Infinity, max = -Infinity, after = false;
//   stock_prices_yesterday.forEach(price => {
//     if (price) {
//       if (price < min) {
//         min = price;
//         after = false;
//       }
//       if (price > max) {
//         max = price;
//         after = true;
//       }
//     }
//   });
//   return prices;
// }


// const stock_prices_yesterday = [];
// stock_prices_yesterday[30] = 500;
// stock_prices_yesterday[60] = 486;
// stock_prices_yesterday[90] = 490;
// stock_prices_yesterday[120] = 505;
// stock_prices_yesterday[150] = 523;
// stock_prices_yesterday[180] = 480;
// stock_prices_yesterday[210] = 440;
// stock_prices_yesterday[220] = 410;
// stock_prices_yesterday[300] = 511;
// stock_prices_yesterday[400] = 400;
// stock_prices_yesterday[430] = 310;

// console.log(bestProfit(stock_prices_yesterday));

//101

module.exports = bestProfit;
