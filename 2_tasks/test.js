const transpose = require('./index');

const myMatrix = [[1,2], [3,4]];

/*
1 2
3 4
>>>
1 3
2 4
*/

const transposed = transpose.transposematrix(myMatrix)
console.log(transposed);
