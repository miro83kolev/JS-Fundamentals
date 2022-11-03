function echo(str){

    if (typeof str === "string"){
        console.log('string')
        console.log(str)
    }else if (typeof str === "number"){
        console.log ('number')
        console.log(str)
    }else{
        console.log(typeof str)
        console.log('Parameter is not suitable for printing')
    }

}
echo(null)