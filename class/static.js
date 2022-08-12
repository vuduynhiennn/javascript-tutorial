class Car {
    constructor(name) {
        this.name = name
    }
    static hello(x) {
        console.log(x.name)
    }
}

let myCar = new Car('BMV')
Car.hello(myCar)