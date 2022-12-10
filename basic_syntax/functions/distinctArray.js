function distict(arr) {
    for (let index = 0; index < arr.length; index++) {
        let currentEl = arr[index]
        for (let j = index + 1; j < arr.length; j++) {
            let nextEl = arr[j]
            if (currentEl === nextEl) {
                arr.splice(j, 1)
                j = j - 1
            }
        }
    }
    console.log(arr.join(' '))
}

distict([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
distict([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])