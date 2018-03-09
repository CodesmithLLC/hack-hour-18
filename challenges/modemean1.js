function modemean(array) {
  const modeMap = {};
  let highestFrequency = 0;
  let mode = -Infinity;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    modeMap[array[i]] = (modeMap[array[i]] || 0) + 1;    
    if (modeMap[array[i]] > highestFrequency || (modeMap[array[i]] === highestFrequency && array[i] > mode)) {
      mode = array[i];
      highestFrequency = modeMap[array[i]];
    }
    sum += array[i];
  }
  let average = Math.floor(sum / array.length);
  return average === mode;
}

console.log(modemean([1, 2, 3,2,2,2]));