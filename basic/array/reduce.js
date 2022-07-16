// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 100
//     },
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 300
//     },
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 600
//     },
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 1100
//     }
// ]
// let totalCoin = courses.reduce(function(accumulator, currentValue, currentIndex, originArray) {
//     return accumulator + currentValue.coin;
// }, 0) // 2 đối số, 1 function và giá trị khởi tạo

// console.log(totalCoin)



var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

let getTotalGold = (arr) => {
    return (arr.reduce((accumulator, currentValue) => {
        // console.log(accumulator)
        // console.log(currentValue.gold)
        return accumulator + currentValue.gold
    }, 0))
}

console.log(getTotalGold(sports))