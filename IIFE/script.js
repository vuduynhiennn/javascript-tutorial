
console.log('hello')

let i = 0

;(myFunction = () => {
    i++
    console.log(i)
    if (i < 10) {
        myFunction()
    }
})



myFunction()
// IIFE là một hàm private 