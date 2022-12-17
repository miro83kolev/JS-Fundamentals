function cutAndReverse(text) {
    let firstHalf = text.split('').splice(0, text.length / 2).reverse().join('');
    console.log(firstHalf)
    let secondHalf = text.split('').splice(text.length / 2, text.length).reverse().join('');
    console.log(secondHalf)
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')