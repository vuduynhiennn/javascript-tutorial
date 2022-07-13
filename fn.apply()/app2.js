function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Parrot(name, weight) {
    Animal.apply(this, arguments)
    this.speak = () => {
        console.log('nhà có khách nè')
    }
}

const conVet = new Parrot('Trang', 300)
console.log(conVet)