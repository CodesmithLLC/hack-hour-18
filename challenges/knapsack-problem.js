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
  const filteredItems = items.filter(elem => elem.weight <= weightAvailable);
  const storage = filteredItems.slice();

  const helper = () => {
    if (storage[storage.length - 1].value >= filteredItems.reduce((acc, cur) => acc.value + cur.value)) {
      return;
    } else {
      storage.forEach(elem => {
        
      })
    }
  }

  const sortedStorage = storage.slice().sort((a, b) => a.value - b.value);
  
  for (let i = 0; i < sortedStorage.length; i++) {
    if (sortedStorage[i].weight <= weightAvailable) return sortedStorage[i];
  }

  return 0;
};

module.exports = solveKnapsack;
