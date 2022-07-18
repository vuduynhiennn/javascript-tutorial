
// 1. pendding
let promise = new Promise(
    function(resolve, reject) {
        resolve()
        // reject()
    }
)

promise 
    .then(function() {
        return 1
    })

    .then(function(data) {
        console.log(data)
        return 2   
    })

    .then(function(data) {
        console.log(data)
        return 3
    })

    .catch(function() {
        console.log('failure')
    })

    .finally(function() {
        console.log('Done')
    })

    .catch(function(error) {
        console.log(error)
    })

// chain 