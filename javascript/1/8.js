function zeroMat(mat) {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) mat[i][j] === "x";
    }
  }
}