function mapToNegativize(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * -1);
  }
  return newArray;
}

function mapToNoChange(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

function mapToDouble(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
  }
  return newArray;
}

function mapToSquare(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] ** 2);
  }
  return newArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let iterator = startingPoint;
  for (let i = 0; i < sourceArray.length; i++) {
    iterator = iterator + sourceArray[i];
  }
  return iterator;
}

function reduceToAllTrue(sourceArray) {
  return sourceArray.every(item => item);
}

function reduceToAnyTrue(sourceArray) {
  return sourceArray.some(item => item);
}
