function triangleArea(a, b, c){

    let s = (a + b + c) / 2
    let sideA = s - a
    let sideB = s - b
    let sideC = s - c

    let area = Math.sqrt(s * sideA * sideB * sideC)

    console.log(area)
}

triangleArea(3,
    5.5,
    4    
    )