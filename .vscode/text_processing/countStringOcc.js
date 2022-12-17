function countStrOcc(text, word) {
    let words = text.split(' ')
    let counter = 0

    for (let Sword of words) {
        if (Sword === word) {
            counter++
        }
    }

    console.log(counter)
}

countStrOcc('This is a word and it also is a sentence',
'is'
)