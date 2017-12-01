import { WSAETOOMANYREFS } from "constants";

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

// function bestProfit(stock_prices_yesterday) {
//   if(stock_prices_yesterday.constructor !== Array || stock_prices_yesterday.length < 2) return 0;
//   let buyPrice = Infinity;
//   // let sellPrice = -Infinity;
//   let bestProfit = 0;
//   // loop through array, 
//   for(let i = 0; i < stock_prices_yesterday.length; i++){
//     // if current index < buy price; set it as buy price
//     if (stock_prices_yesterday[i] < buyPrice) { 
//       buyPrice = stock_prices_yesterday[i];
//       let remaining = stock_prices_yesterday.slice(i+1)
//       // then loop through next elements,
//       for(let j = 0; j < remaining.length; j++){
//         // subtract following elements from current, to see makes a better bestProfit
//         if(remaining[j] - buyPrice > bestProfit){
//           bestProfit = remaining[j] - buyPrice;
//         }
//       }
//     } else {
//       continue;
//     }
//   }
//   return (bestProfit <= 0) ? 0 : bestProfit;
// }

function bestProfit(stock_prices_yesterday) {
  if(stock_prices_yesterday.constructor !== Array || stock_prices_yesterday.length < 2) return 0;
  let buyPrice = Infinity;
  // let sellPrice = -Infinity;
  let bestProfit = 0;
  // loop through array, 
  for(let i = 0; i < stock_prices_yesterday.length; i++){
    // if current index < buy price; set it as buy price, otherwise continue
    if (stock_prices_yesterday[i] < buyPrice) { 
      buyPrice = stock_prices_yesterday[i];
      let remaining = stock_prices_yesterday.slice(i+1)
      // then loop through next elements,
      let bestOption = remaining.sort((a,b) => b-a)
        if(bestOption[0] - buyPrice > bestProfit){
          bestProfit = bestOption[0] - buyPrice;
        }
    } else {
      continue;
    }
  }
  return (bestProfit <= 0) ? 0 : bestProfit;
}

bestProfit([10, 7, 5, 8, 11, 9])
module.exports = bestProfit;
