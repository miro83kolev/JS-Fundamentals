function sumNumsArr(arr) {

    let firstNum = Number(arr.shift())
    let lastNum = Number(arr.pop())
    let sum = firstNum + lastNum

    console.log(sum)
}

sumNumsArr(['10', '15'])