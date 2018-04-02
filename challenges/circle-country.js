/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  const tyusArr = [];
  const endArr = [];
  // translate x, y, r to array of circles
  const circles = [];
  let crosses = 0;
  for(let i = 0; i < x.length; i++){
    circles.push([x[i],y[i],r[i]]);
  };
  // console.log('x,y,r: ', x,y,r);
  // console.log('circles: ', circles);

  //See if tyus or endpoint are enclosed in cirlces
  //loop over all circles
  circles.forEach(circle => {
    let [currX, currY, currR]  = circle;
    // console.log('currX, currY, currR: ', currX, currY, currR)
    let distanceTyus = Math.sqrt(Math.pow(currX - start_x, 2) + Math.pow(currY - start_y,2))
    let distanceEnd = Math.sqrt(Math.pow(currX - end_x, 2) + Math.pow(currY - end_y,2))
    // console.log('distanceTyus: ', distanceTyus);
    // console.log('distanceEnd: ', distanceEnd);
    // console.log('currR: ', currR)
    // if radius is greater than distance to circle center - push to array
    if(distanceTyus < currR){
      tyusArr.push(circle)
    };
    if(distanceEnd < currR){
      endArr.push(circle)
    };
  });
  // console.log('tyusArr: ', tyusArr, 'endArr:  ', endArr)
  //edge case - neither encased
  if(!tyusArr.length && !endArr.length) return 0;
  // loop over endArr circles, see if Tyus outside them;
  for(let i = 0; i < endArr.length; i++){
    let [currX, currY, currR] = endArr[i]
    let currCenterToTyus = Math.sqrt(Math.pow(currX - start_x, 2) + Math.pow(currY - start_y,2));
    if(currR < currCenterToTyus){
      crosses++;
    }
  }
  // loop over tyusArr circles, see if end outside them
  for(let i = 0; i < tyusArr.length; i++){
    let [currX, currY, currR] = tyusArr[i]
    let tyusToCurrEnd = Math.sqrt(Math.pow(currX - end_x, 2) + Math.pow(currY - end_y,2));
    if(currR < tyusToCurrEnd){
      crosses++;
    }
  }
  //edge case? - if only 1 each,  see if they're in the same circle
  return crosses;
}

console.log(circleCountry([2,8, 6.5], [3,2, 4.5], [2,1], 9, 5, 1, 4), ' should be: 1'); // 1 ; x in 1 circle, tyus outside but not in a circle
console.log(circleCountry([2,8,3, 6.5], [3,2,2, 4.5], [2,1,1], 3, 2, 1, 4), ' should be: 1'); // 1 ; x in same circle as tyus, but tyus in an additional circle
console.log(circleCountry([2,8,3], [3,2,2], [2,1,1], 3, 2, 5, 6), ' should be: 2'); // 2 ; x outside circles, tyus enclosed in two
console.log(circleCountry([2,8,3, 6.5], [3,2,2, 4.5], [2,1,1,1], 3, 2, 6.5, 4.5), ' should be: 3'); // 3; tyus enclosed in two circles, x in separate circle 
//function crossCheck()
//function insideCircle

module.exports = circleCountry;
