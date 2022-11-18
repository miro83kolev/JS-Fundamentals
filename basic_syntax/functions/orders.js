function orders(product, quantity) {

    let totalPrice = 0
    const coffeePrice = 1.50
    const waterPrice = 1.00
    const cokePrice = 1.40
    const snacksPrice = 2.00

    if (product === 'water'){
        totalPrice = quantity * waterPrice
    }else if (product === 'coffee') {
        totalPrice = quantity * coffeePrice        
    }else if (product === 'coke') {
        totalPrice = quantity * cokePrice        
    }else if (product === 'snacks') {
        totalPrice = quantity * snacksPrice        
    }
    
    return totalPrice.toFixed(2)

}

console.log(orders("coffee", 2))