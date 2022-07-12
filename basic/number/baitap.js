let isNumber = (value) => { 
    if (typeof value === 'number') {
        if (isNaN(value)) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false