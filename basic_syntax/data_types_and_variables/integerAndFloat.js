function intOrFloat(num1, num2, num3){
    let sum = num1 + num2 + num3
    let type = typeof sum

    console.log(`${sum} - ${type}`)
}
intOrFloat(9, 100, 1.1)