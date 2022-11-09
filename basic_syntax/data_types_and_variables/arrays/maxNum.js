function maxNum(arr) {
    let topInteger = []

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i]
        let isTopInteger = true

        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j]

            if (currentEl <= nextEl) {
                isTopInteger = false
                break
            }

        }
        if (isTopInteger) {
            topInteger.push(currentEl)
        }
    }
    console.log(topInteger.join(' '))
}
maxNum([1, 4, 3, 2])
maxNum([14, 24, 3, 19, 15, 17])