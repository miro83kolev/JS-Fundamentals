function negPos(arr) {

    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i])

        if (num < 0) {
            newArr.unshift(num)
        } else {
            newArr.push(num)
        }
    }

    for (num of newArr) {
        console.log(num)
    }
}

negPos(['3', '-2', '0', '-1'])