function oddEvenSum(num) {

    let arr = []
    let numToString = num.toString()

    for (let index = 0; index < numToString.length; index ++) {
        arr.push(Number(numToString[index]))
    }
    
    let evenSum = 0
    let oddSum = 0

    for (let num of arr) {

        if (num % 2 === 0) {
            evenSum += num
        }else{
            oddSum += num
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddEvenSum(3495892137259234)