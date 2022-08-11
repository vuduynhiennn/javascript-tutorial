var name = 'Vu Duy Nhien'
var price = 18
// normal
var course = {
    name: name,
    price: price,
    getName: function() {
        return this.name
    }
}
// enhenced object literal
// var course = {
//     name,
//     price,
//     getName() {
//         return name
//     }
// }
// console.log(course.name)

// normal
var fieldName = 'name'
var fieldPrice = 'price'
// const course = {
//     name: 'Javascript',
//     price: 10
// }
// enhenced object literal
const course = {
    [fieldName]: 'javascript',
    [fieldPrice]: 'price'
}

console.log(course)
