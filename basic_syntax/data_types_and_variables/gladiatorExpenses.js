function gladiator(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice){
    
    let neededMoney = 0
    let shieldCount = 0

    for (let fight = 1; fight <= lostFightCount; fight++){
        if (fight % 2 === 0){
            neededMoney +=helmetPrice
        }
        if (fight % 3 === 0){
            neededMoney += swordPrice
        }
        if (fight % 2 === 0 && fight % 3 === 0){
            neededMoney += shieldPrice
            shieldCount ++
        }
        if (shieldCount % 2 === 0 && shieldCount > 0){
            neededMoney += armorPrice
            shieldCount = 0
        }
    }
    console.log(`Gladiator expenses: ${neededMoney.toFixed(2)} aureus`)
}

gladiator(23,
    12.50,
    21.50,
    40,
    200
    )
