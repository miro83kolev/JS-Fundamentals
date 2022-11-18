function printNElement(input) {

    let arr = []
    let step = Number(input[input.length - 1])

    for (let i = 0; i < input.length - 1; i += step){

        arr.push(input[i])
    }

    console.log(arr.join(' '))
}

printNElement(['1', '2', '3', '4', '5', '6'])