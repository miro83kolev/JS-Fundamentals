function vacation(groupSize, typeOfGroup, dayOfTheWeek){

    let totalPrice = 0

    switch (typeOfGroup){
        case 'Students':
            switch (dayOfTheWeek){
                case 'Friday':
                    totalPrice = groupSize * 8.45
                    if (groupSize >= 30){
                        totalPrice *= 0.85
                    }
                    break
                case 'Saturday':
                    totalPrice = groupSize * 9.80
                    if (groupSize >= 30){
                        totalPrice *= 0.85
                    }
                    break
                case 'Sunday':
                    totalPrice = groupSize * 10.46
                    if (groupSize >= 30){
                        totalPrice *= 0.85
                    }
                    break
            }
            break
        case 'Business':
            switch (dayOfTheWeek){
                case 'Friday':
                    totalPrice = groupSize * 10.90
                    if (groupSize >= 100){
                        groupSize -= 10
                        totalPrice = groupSize * 10.90
                    }
                    break
                case 'Saturday':
                    totalPrice = groupSize * 15.60
                    if (groupSize >= 100){
                        groupSize -= 10
                        totalPrice = groupSize * 15.60
                    }
                    break
                case 'Sunday':
                    totalPrice = groupSize * 16
                    if (groupSize >= 100){
                        groupSize -= 10
                        totalPrice = groupSize * 16
                    }
                    break
            }
            break
        case 'Regular':
            switch (dayOfTheWeek){
                case 'Friday':
                    totalPrice = groupSize * 15
                    if (groupSize >= 10 && groupSize <= 20){                        
                        totalPrice *= 0.95
                    }
                    break
                case 'Saturday':
                    totalPrice = groupSize * 20
                    if (groupSize >= 10 && groupSize <= 20){                        
                        totalPrice *= 0.95
                    }
                    break
                case 'Sunday':
                    totalPrice = groupSize * 22.50
                    if (groupSize >= 10 && groupSize <= 20){                        
                        totalPrice *= 0.95
                    }
                    break
            }
            break
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(40,
    "Regular",
    "Saturday"    
    )