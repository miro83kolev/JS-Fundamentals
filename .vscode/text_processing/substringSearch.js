function substringSearch(searchedWord, text) {
    let words = text.split(' ')
    for (let word of words) {
        if (searchedWord.toLowerCase() === word.toLowerCase()) {
            console.log(searchedWord)
            return
        }           
    }
    console.log(`${searchedWord} not found!`)
}

substringSearch('javascript',
'JavaScript is the best programming language'
)
substringSearch('python',
'JavaScript is the best programming language'
)