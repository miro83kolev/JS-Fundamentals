function signCheck(num1, num2, num3) {
    if (num1 < 0 && num2 < 0 && num3 < 0){
        console.log('Negative')
    }else if (num1 < 0 && num2 < 0 && num3 > 0 ){
        console.log('Positive')
    }else if (num1 > 0 && num2 > 0 && num3 > 0){
        console.log('Positive')
    }else if (num1 > 0 && num2 > 0 && num3 < 0){
        console.log('Negative')
    }else if (num1 < 0 && num2 > 0 && num3 > 0){
        console.log('Negative')
    }else if (num1 > 0 && num2 < 0 && num3 > 0){
        console.log('Negative')
    }
}

signCheck(-5,
    1,
    1   
   )

function solve(num1, num2, num3) {
    result = num1 * num2 * num3

    if (result < 0){
        console.log('Negative')
    }else{
        console.log('Positive')
    }
}

solve(5,
    12,
   -15
   )