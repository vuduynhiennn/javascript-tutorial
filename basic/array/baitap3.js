var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];

function arrToObj(array) {
    return array.reduce(function(newArr, item) {
        newArr[item[0]] = item[1];
        return newArr;
    }, {})
}

arrToObj(arr); // { name: 'Sơn Đặng', age: 18 }