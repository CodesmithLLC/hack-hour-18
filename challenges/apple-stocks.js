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
    let biggestDiff = -Infinity;
    function recursion(array, i, f) {
        if ((array[i] - array[f]) > biggestDiff) biggestDiff = array[i] - array[f];
        if ((array[f] - array[i]) > biggestDiff) biggestDiff = array[f] - array[i];

        //end cases
        if (i === array.length - 2) return;
        if (f === array.length - 1) recursion(array, i + 1, i + 2);
        else recursion(array, i, f + 1);
    }
    recursion(stock_prices_yesterday, 0, 1);
    if (biggestDiff < 0) return 0;
    else return biggestDiff;
}

console.log(bestProfit([0,20,10,5,7,10,4,200,10,11,2,3,4,5,6,7,1,2,4]));

module.exports = bestProfit;
