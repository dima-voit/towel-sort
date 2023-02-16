
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  if(matrix === undefined) {
    return newArr;
  }
  matrix.forEach((item, index) => {
    index % 2 !== 0 ? newArr.push(...item.reverse()) : newArr.push(...item);
  });

  return newArr;
}
