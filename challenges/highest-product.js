/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

//use reduce to constantly update the highest product
//get power set?
function highestProduct(array) {
	let product1,
	product2;

	array = array.sort((a,b)=>{
		return a-b;
	});

	//min1*min2*max1 to account for smallest, negative numbers
	product 1 = data[0]*data[1]*data[data.length-1];
	//max1*max2*max3 to account for largest numbers
	product 2 = data[data.length-1]*data[data.length-2]*data[data.length-3];

	return Math.max(product1,product2);
}


module.exports = highestProduct;
