let message = 'hello my dear friend' // global scope


function hellop1(message) {
    console.log(message)
}


function hello(message) {
    console.log(message)
    hellop1(message)
}

hello(message)

{
    // code block
    let age = 18
    console.log(age)
}


function logger() {
    var fullName = 'Son Dang'
}

logger()