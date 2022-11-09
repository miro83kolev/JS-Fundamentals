function arrayRotation(array, rotations) {

    while (rotations > 0) {
        array.push(array.shift())
        rotations -= 1
    }
    return array.join(' ')
}

console.log(arrayRotation([51, 47, 32, 61, 21], 2))
console.log(arrayRotation([32, 21, 61, 1], 4))