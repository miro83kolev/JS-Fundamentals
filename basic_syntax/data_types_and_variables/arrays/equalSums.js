function equalSums(arr) {

    let hasEqual = false

    for (let index = 0; index < arr.length; index++) {

        let leftSum = 0
        let rightSum = 0

        for (let j = index - 1; j >= 0; j--) {
            leftSum += arr[j]
        }

        for (let num = index + 1; num < arr.length; num++){
            rightSum += arr[num]
        }

        if (leftSum === rightSum){
            console.log(index)
            hasEqual = true            
        }
    }

    if (!hasEqual){
        console.log('no')
    }
}

equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])