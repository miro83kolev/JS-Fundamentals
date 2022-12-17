function passwordGen(input) {
    let [firstStr, secondStr, thirStr] = input
    let combineStr = firstStr.concat(secondStr)
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let reversedPass = ''
    thirStr = thirStr.toLowerCase()

    let vowelIndex = 0

    for (let index = 0; index < combineStr.length; index++) {
        if (vowels.includes(combineStr[index])) {
            let indexOfChar = vowelIndex % thirStr.length
            vowelIndex++
            let currentChar = thirStr.charAt(indexOfChar)
            reversedPass += currentChar.toUpperCase()
        } else {
            reversedPass += combineStr[index]
        }
    }
    reversedPass =  reversedPass.split('').reverse().join('')
    console.log(`Your generated password is ${reversedPass}`)

}

passwordGen([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
)