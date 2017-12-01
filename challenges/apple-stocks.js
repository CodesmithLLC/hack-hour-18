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

//check what the max is
//check to see what the min after it is
//so update the min after each max
//if a new max, then update the max
function bestProfit(stock_prices_yesterday) {
	let minIndex = 0;
	let maxIndex = 1;
	let currMinIndex = 0;
	let maxProfit = 0;

	for (let i=1; i< arr.length; i++){
		
		//if the element at index 1 is less than the element at index 0, then update the current Min
		//otherwise keep it the same, because the element at index 0 is still the lowest
		//@index1 < @index0
		//currMinIndex = 1
		if(arr[i] < arr[currMinIndex]){
			currMinIndex = i;
		}

		
		if (arr[maxIndex] - arr[minIndex] < arr[i] - arr[currMinIndex]){
			maxIndex = i;
			minIndex = currMinIndex;
		}
	}

	maxProfit = arr[maxIndex] - arr[minIndex];
	return maxProfit;

}

module.exports = bestProfit;
