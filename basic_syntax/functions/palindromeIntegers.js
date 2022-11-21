function palindrom(arr) {

    for (num of arr){
        let numToString = String(num)

        if (numToString[0] === numToString[numToString.length - 1]){
            console.log('true')
        }else{
            console.log('false')
        }

    }
}

palindrom([32,2,232,1010])