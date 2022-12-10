function sorting(arr) {
    arr = arr.sort((a, b) => b - a)
    let newArr = []

    while (arr.length > 0) {
        let biggerNum = arr.shift()
        newArr.push(biggerNum)
        let smallerNum = arr.pop()
        newArr.push(smallerNum)

    }
    console.log(newArr.join(' '))

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])

