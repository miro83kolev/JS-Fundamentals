function cone(radius, height){

    let volume = (((Math.PI * radius * radius) * height) / 3).toFixed(4);
    let str = 'volume'
    console.log(`${str} = ${volume}`);
    let s = Math.sqrt(radius * radius + height * height);
    let area =  Math.PI * radius * (radius + s);
    let str1 = 'area';
    console.log(`${str1} = ${area.toFixed(4)}`);
}

cone(3.3, 7.8)