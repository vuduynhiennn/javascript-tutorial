
Array.prototype.forEach2 = function(callback) {
    for (let index in this) {
        if (this.hasProperty(index)) {
            callback(this[index], index, this)
        }
    }
}

let courses = [
    'javascript',
    'php',
    'ruby'
]

courses.length = 100;

courses.forEach2((course, index, array) => {
    console.log(course)
});
