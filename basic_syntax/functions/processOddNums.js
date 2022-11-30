function processOdd(arr) {

    let result = []

    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 != 0) {
            result.push(arr[i] * 2)
        }
    }
    console.log(result.join(' '))
}

processOdd([10, 15, 20, 25])


function solve(arr) {
    // filter by index elements with odd position
    let filtered = arr.filter((x, i) => i % 2 == 1)

    // double filtered values
    let doubled = filtered.map(x => x * 2)

    let reversed = doubled.reverse()

    console.log(reversed.join(' '))
}
solve([10, 15, 20, 25])