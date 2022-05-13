// let matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]
let matrix = [[1,2,0,4,5],[6,7,8,0,10],[11,0,13,14,15],[0,17,0,19,0],[21,22,23,24,25]]
console.log(matrix)


function matrixElementsSum (arr) {
    let sum = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                for (let k = 0; k < matrix.length - i; k++) {
                    matrix[i + k][j] = 0
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum = sum + matrix[i][j]
        }

    }
    return sum;
}

console.log(matrix)
console.log(matrixElementsSum(matrix))