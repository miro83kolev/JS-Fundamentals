function convertToJSON(name, lastName, hairColor) {
    let person = {}
    person.name = name
    person.lastName = lastName
    person.hairColor = hairColor

    console.log(JSON.stringify(person))
}

convertToJSON('George', 'Jones', 'Brown')
convertToJSON('Peter', 'Smith', 'Blond')