const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const [a, ...b] = arr;

const obj = {
    a: 1,
    b: 2, 
    c: 3
}

const { a: x, b: y, c: z } = obj;
console.log(x, y, z)