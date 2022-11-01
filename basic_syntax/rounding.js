function rounding(num1, num2){

    if (num2 > 15){
        num2 = 15
    }
    num1 = num1.toFixed(num2)
    console.log(parseFloat(num1))
}

rounding(10.5,3)