function magicSum(arr, magicNum) {

    for (let index = 0; index < arr.length - 1; index++) {

        let currentEl = arr[index]

        for (let j = index + 1; j < arr.length; j++) {
            let nextEl = arr[j]
            let sum = currentEl + nextEl

            if (sum === magicNum){
                console.log(`${currentEl} ${nextEl}`)
            }

        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8 )
