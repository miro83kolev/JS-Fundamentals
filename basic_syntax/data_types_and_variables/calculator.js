function calculator(num1, operand, num2){

    let result = 0

    if (operand === '+'){
        result = num1 + num2
    }else if(operand === '-'){
        result = num1 - num2
    }else if (operand === '*'){
        result = 1
        result = num1 * num2
    }else if (operand === '/'){
        result = 1
        result = num1 / num2
    }
    console.log(result.toFixed(2))
}

calculator(25.5,
    '-',
    3    
    )
