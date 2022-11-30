function matrix(n){

    let row = n
    let col = n
    let matrix = []
    let num = n

    for (let i = 0; i < row; i++) {
        matrix.push([])
        for (let j = 0; j < col; j++) {
            matrix[i].push(num+ ' ')
        }
    }

    return matrix.join('\n')
    
}

console.log(matrix(7))


function matrix1(n) {
        let m = n
        let result = []
        for(let i = 0; i < n; i++) {
            result.push(new Array(m).fill(n))
        }
        result.join(' ')
        let result1 = result.replace(/,/g, " ")

        return result1

    }
console.log(matrix1(3))