function train(train) {
    let passangersInWagons = train.shift().split(' ').map(Number)
    let maxCapacity = Number(train.shift())

    for (let command of train) {
        let currentCommand = command.split(' ')

        if (currentCommand[0] === 'Add') {
            passangersInWagons.push(Number(currentCommand[1]))
        } else {
            for (let index = 0; index < passangersInWagons.length; index++) {
                if (passangersInWagons[index] + Number(currentCommand[0]) <= maxCapacity) {
                    passangersInWagons[index] += Number(currentCommand[0])
                    break
                }
            }
        }
    }

    console.log(passangersInWagons.join(' '))

}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
)