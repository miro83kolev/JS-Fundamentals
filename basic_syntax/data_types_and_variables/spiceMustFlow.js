function spice(startingYield){

    let days = 0
    let totalAmountSpice = 0

    while (startingYield >= 100){

        totalAmountSpice += startingYield
        startingYield = startingYield - 10

        totalAmountSpice -= 26
        days ++
    }

    totalAmountSpice = totalAmountSpice - 26

    if (totalAmountSpice < 0){
        totalAmountSpice = 0
    }

    console.log(days)
    console.log(totalAmountSpice)
}

spice(450)