function calc(num1, num2, operand) {

    let result = 0

    switch (operand) {
        case 'add':
            result = num1 + num2
            break
        case 'subtract':
            result = num1 - num2
            break
        case 'multiply':
            result = 1
            result = num1 * num2
            break
        case 'divide':
            result = 1
            result = num1 / num2
            break
    }

    return result

}

console.log(calc(12,
    19,
    'add'
    ))
