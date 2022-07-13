// // đối tượng math 

// console.log(Math.PI);
// console.log(Math.round(2,6));
// console.log(Math.abs(-5));
// console.log(Math.ceil(4.1)); // làm tròn trên
// console.log(Math.floor(5.3)); // làm tròn dưới
// console.log(Math.random()); // random nho hon 1 
// console.log(Math.min(1, 23, -100, 82));
// console.log(Math.max(1, 2, 5, 6, 3, 5, 6, 10));

// let result = Math.floor(2.5);
let result = Math.floor(Math.random() * 7);
let arr = [
    'javascript',
    'php',
    'ruby',
    'python'
];

let getRandomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}
