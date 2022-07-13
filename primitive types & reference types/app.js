// let a = 1;
// let b = a;
// a = 2;
// console.log(b);
creatCar = (obj) => {
    obj.JSON.parse(JSON.stringify(obj)) // khi object vô cùng lớn ảnh hưởng đến performence
    // obj = {...obj} // sử dụng khi có 1 cấp object
    obj.name = 'mercedes'
    return obj
}
let car = {
    name: "BMW"
}
const newCar = creatCar(car)
console.log(car)


// so sánh s2 object
const c = {
    name: 'mercedes'
}

const d = {
    name: 'mercedes'
}

console.log(c) // result: false