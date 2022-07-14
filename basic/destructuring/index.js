var array = [
    'javascript',
    'php',
    'python'
]

// var a = array[0]
// var b = array[1]
// var c = array[2]

// var [a, b, c] = array
// var [d, ...rest] = array
// var [d, e,...rest] = array

// console.log(rest.toString())


var course = {
    name: 'javacsript',
    price: 1231,
    image: 'hello',
    children: {
        name: 'reactjs',
    },
    description: 'image address'
}

// var {name, ...rest} = course;

// console.log(name, description = 'defaul properties');

// var { name, price, image} = course // phải gọi đúng, 
// var { name, ...rest} = course // phải gọi đúng, 
// var { name: parentName, children: {childrenName}} = course // phải gọi đúng, 
// console.log(parentName, childrenName)

function logger(...params) {
    console.log(params)
}

logger(course)
