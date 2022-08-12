class Car {
    constructor(brand) {
        this.carname = brand
    }
    present() {
        return 'I have  a ' + this.carname
    }
    get cname() {
        return this.carname
    }
    set cname(x) {
        this.carname = x
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand),
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model
    }
}

let myCar = new Model('Ford', 'Mustang')

myCar.carname = 'hello'
console.log(myCar.carname)