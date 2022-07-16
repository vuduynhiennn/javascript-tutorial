const numbers = [1, 2, 3, 4, 5]

const result = numbers.reduce((ac, elm) => {
    return ac + elm
}, 0)

const result1 = numbers.reduce((ac, elm) => {
    return ac + elm
}) // khi không truyền initial value thì ac sẽ là phần từ đầu tiên của mảng


function reduce2(params) {
    
}


console.log(result)