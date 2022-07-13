function myFunction(login) {
    console.log(login + ' ' + 'login sucessfully')
}
myFunction('user');


const myFunction = (login) =>{
    console.log(login + ' ' + 'login sucessfully')
}

myFunction('user');

const sum = (a, b) => {
    return a + b;
}
console.log(sum(2, 2));


const sum = (a, b) => ({a: a, b: b});

