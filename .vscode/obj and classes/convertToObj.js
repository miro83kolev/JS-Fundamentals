function convertToObj(objStr) {
    let obj = JSON.parse(objStr)

    for (let key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`)
    }

}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}')