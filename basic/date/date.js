// let date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getHours());
// console.log(date.getDate());

let data = new Date();

let getNextYear = (data) => {
    return data.getFullYear() + 1;
}


console.log(getNextYear(data));