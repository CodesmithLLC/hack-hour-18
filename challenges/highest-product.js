/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  return array.reduce((acc, num) => {
    if (acc.length < 3) {
      acc.push(num);
      return acc;
    } else {
    	for (let i = 0; i < acc.length; i++) {
      	if (Math.abs(num) > Math.abs(acc[i])) {
        	acc[i] = num;
        	break;
      	}
    	}
    }
    return acc.sort((a,b) => a - b);
  }, [])
  .reduce((product, num) => {
  	return product * num;
  }, 1);
}


console.log(highestProduct([1,2,3]));
console.log(highestProduct([1,2,3,4]));
console.log(highestProduct([1,2,3,4,5,6]));
console.log(highestProduct([]));
console.log(highestProduct([1]));

module.exports = highestProduct;
