function cat(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];

    for (let catArr of arr) {
        let tokens = catArr.split(' ');
        let cat = new Cat(tokens[0], Number(tokens[1]));
        cats.push(cat)
    }

    for (let cat of cats) {
        cat.meow();
    }
}

cat(['Mellow 2', 'Tom 5'])
cat(['Candy 1', 'Poppy 3', 'Nyx 2'])