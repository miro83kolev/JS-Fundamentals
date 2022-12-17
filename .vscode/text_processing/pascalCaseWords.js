function pascalCase(text) {
    let words = []
    let currentWord = text[0]
     
    for (let i = 1; i < text.length; i++) {
        if(text[i].toUpperCase() !== text[i]){
            currentWord = currentWord.concat(text[i])
        } else{
            words.push(currentWord)
            currentWord = text[i]
        }
    }
    words.push(currentWord)
    console.log(words.join(', '))
}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')