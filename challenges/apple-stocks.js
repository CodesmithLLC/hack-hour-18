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

    let i = 0
    let global_max = stock_prices_yesterday[1] - stock_prices_yesterday[0]
        while (i < stock_prices_yesterday.length - 1) {
            j = 1
            while (j < (stock_prices_yesterday.length - i) ) {
                let local_max = stock_prices_yesterday[i + j] - stock_prices_yesterday[i] 
                if (local_max > global_max) {
                    global_max = local_max
                }
            j += 1
            }
        i += 1
        }
    return global_max
}

module.exports = bestProfit;
