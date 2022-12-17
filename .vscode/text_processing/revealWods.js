function reveal(words, sentence) {
    words = words.split(', ')
    for (const word of words) {
        sentence = sentence.replace('*'.repeat(word.length), word)
    }
    console.log(sentence)
}

reveal('great',
'softuni is ***** place for learning new programming languages'
)