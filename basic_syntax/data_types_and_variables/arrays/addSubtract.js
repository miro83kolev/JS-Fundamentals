function addSub(arr){
    let myArr = arr

    let sumOriginalArray = 0
    let modifiedSumArray = 0

    for (let i = 0; i < myArr.length; i ++){
        sumOriginalArray += myArr[i]

        if (myArr[i] % 2 === 0){
            myArr[i] += i
        }else{
            myArr[i] -= i
        }
        modifiedSumArray += myArr[i]    
    }
    console.log(myArr)
    console.log(sumOriginalArray)
    console.log(modifiedSumArray)
}

addSub([5, 15, 23, 56, 35])