function numberSearch(arr1, arr2) {
    
    let numberToTake = arr2[0]
    let numberToDelete = arr2[1]
    let searchedNumber = arr2[2]

    let newArr = arr1.splice(0, numberToTake)
    newArr = newArr.splice(numberToDelete)
    let count = 0

    for (num of newArr) {
        if (num === searchedNumber) {
            count++
        }
    }

    console.log(`Number ${searchedNumber} occurs ${count} times.`)
}

numberSearch([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )