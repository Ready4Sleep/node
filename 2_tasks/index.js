function transposematrix(inputMatrix){
    var m = inputMatrix.length, n = inputMatrix[0].length, inputMatrixTransposed = [];
    for (var i = 0; i < n; i++)
     { inputMatrixTransposed[ i ] = [];
       for (var j = 0; j < m; j++) inputMatrixTransposed[ i ][j] = inputMatrix[j][ i ];
     }
    return inputMatrixTransposed;
}

module.exports = {transposematrix};

