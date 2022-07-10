const teacher = {
    firstName: "Minh",
    lastName: "Thu",
};

const greet = (greeting, message) => {
    return `${greeting} ${this.firstName} ${this.lastName}. ${message}`;
}

// let result = greet.apply(teacher, ['Em chao co', 'co day mon gi the a ? (da xem co livestream 1 tieng)']);

// console.log(result);

result = greet.call(teacher, 'em chao co', 'co day mon gi the a ?(da xem co livestream 1 tieng)');

console.log(result);        