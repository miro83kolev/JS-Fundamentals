function reversedChars(char1, char2, char3){

    let word = char1+char2+char3

    let revesed = ''

    for (let i = word.length - 1; i >= 0; i--){
        revesed += word[i] + ' '
    }
    console.log(revesed)
}

reversedChars('A',
'B',
'C'
)