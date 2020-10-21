
module.exports = function towelSort(matrix) {
  if(matrix === undefined) return []
  let arrSort = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0 || i === 0) {
      console.log('-')

      for (let j = 0; j < matrix[i].length; j++) {
        arrSort.push(matrix[i][j])
      }

    } else {
      matrix[i] = matrix[i].reverse();
      for (let j = 0; j < matrix[i].length; j++) {
        arrSort.push(matrix[i][j])
      }
    }
  }
  return arrSort;
}