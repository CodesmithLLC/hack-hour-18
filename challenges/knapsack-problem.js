/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/


  function solveKnapsack(items, weightAvailable) {
    let y = Object.values(items).length
    let w = []
    let v = []
    let tempIndex = 0;
    let tempMaxWeight = 0;
    let tempMaxValue = 0;
    let returnValue = 0;
    let wAvaliable = weightAvailable;
    
    
    for (var i = 0; i < y; i++){
      w.push(items[i].weight)
      v.push(items[i].value)
    }
    for(var j = 0; j <= y; j++){
      tempIndex = v.indexOf(Math.max.apply(null,v))
      tempMaxWeight = w[tempIndex]
      tempMaxValue = Math.max.apply(null,v)
    
      if (tempMaxWeight <= wAvaliable){
        returnValue += tempMaxValue
        wAvaliable -= tempMaxWeight
      }
     
      v.splice(tempIndex,1)
      w.splice(tempIndex,1)
      
    }
    
    return returnValue
    
    };


module.exports = solveKnapsack;
