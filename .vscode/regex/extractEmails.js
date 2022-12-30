function emails(input) {
    let regex = /(?<=\s)([a-z]+|\d+)(\d+|\w+|\.+|-+)([a-z]+|\d+)\@[a-z]+\-?[a-z]+\.[a-z]+(\.[a-z]+)?/g
    let result = input.match(regex)
    for (let line of result) {
        console.log(line)
    }
}

emails('Please contact us at: support@github.com.')
emails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')
emails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de')