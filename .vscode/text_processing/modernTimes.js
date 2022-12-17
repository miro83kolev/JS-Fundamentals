function modernTimes(text) {
    let words = text.split(' ')
    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            word = word.slice(1, word.length)
            console.log(word)
        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')

function solve(text) {
    let texts = text.split(' ');
    for (let text of texts) {
        if (text.startsWith('#') && text.length > 1) {
            asciiCode = text.charCodeAt(1)
            let isLetter = (asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)
            if (isLetter) {
                console.log(text.substring(1))
            }
        }
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')