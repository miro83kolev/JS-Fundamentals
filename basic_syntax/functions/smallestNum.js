function smallest(num1, num2, num3) {

    let arr = []
    arr.push(num1)
    arr.push(num2)
    arr.push(num3)
    let smallest = Math.min(...arr)
    console.log(smallest)
     
}

smallest(2,
    5,
    3
    )