function cityInfo(city) {
    let props = Object.keys(city)

    for (let prop of props) {
        console.log(`${prop} -> ${city[prop]}`)
    }
}