function reading(pages, pagesPerHour, days){

    let totalTimeToRead = pages / pagesPerHour
    let requiredTime = totalTimeToRead / days

    console.log(requiredTime)
}

reading(432,
    15 ,
    4     
    )