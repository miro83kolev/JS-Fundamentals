function lastKSec(n, k) {

    let firstEl = 1
    let arr = [firstEl]

    for (let i = 0; i < n - firstEl; i++) {
        let lastK = arr.slice(-k)

        let sum = 0

        for (let num of lastK) {
            sum += num

        }
        arr.push(sum)
    }
    console.log(arr.join(' '))
}

lastKSec(6, 3)