function charInRange(char1, char2) {

    let char1Assci = char1.charCodeAt(0)
    let char2Assci = char2.charCodeAt(0)
    let output = []

    if (char1Assci > char2Assci){
        for (let index = char2Assci + 1, end = char1Assci; index < end; index++ ){
            output.push(String.fromCharCode(index))
        }        
    }else {
        for (let index = char1Assci + 1, end = char2Assci; index < end; index++ ){
            output.push(String.fromCharCode(index))
        }
    }      
    return output.join(' ')
}

console.log(charInRange('a',
'd'
))


