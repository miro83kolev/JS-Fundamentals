function addRemove(command) {

    let initialNum = 1
    let arr = []

    for (let i= 0; i < command.length; i++){
        if (command[i] === 'add') {
            arr.push(initialNum)
            initialNum += 1
        }else if (command[i] === 'remove') {
            arr.pop(initialNum)
            initialNum += 1
        }
    }

    if (arr.length == 0){
        console.log('Empty')
    }else{
        console.log(arr.join(' '))
    }    
}

addRemove(['remove', 'remove', 'remove'])