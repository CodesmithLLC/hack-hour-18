/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(array.length<3){
        return "invalid array";
    }

    let largestproduct = 0;
        array.reduce(function(a,b,c){
          let currentproduct = a*b*c;
          if (currentproduct>largestproduct){
          largestproduct = currentproduct;
          }
        });

    return largestproduct;
}


module.exports = highestProduct;
