function sum(n){
    let sum = 0
    for (let i = 1; i <= n + n; i += 2 ){
        console.log(i)
        sum += i
        }
    console.log(`Sum: ${sum}`)
}

sum(5)