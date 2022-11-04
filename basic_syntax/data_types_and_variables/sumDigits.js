function sumDigits(num){
    let sum = 0
    let output = num.toString()

    for (let i = 0; i < output.length; i++){
        sum += Number(output[i])

    }
    console.log(sum)
}
sumDigits(97561)