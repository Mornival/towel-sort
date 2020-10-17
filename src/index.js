module.exports = function towelSort (matrix) {
  let arra = [];
  if(matrix === undefined)
  {
    return [];
  }
  for(let i = 0; i < matrix.length; i++)
  {
    for(let j = 0;j < matrix[i].length;j++)
    {
      arra.push(matrix[i][j]);
    }
    i++;
    if(i < matrix.length)
    {
      for(let j = matrix[i].length - 1;j >= 0;j--)
      {
        arra.push(matrix[i][j]);
      }
    }
  }
  return arra;
}
