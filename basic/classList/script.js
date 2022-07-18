const root = document.getElementById('root')


let classList = root.classList
let result;

root.classList.add('dauBuoiChieu')
root.classList.remove('dauBuoiChieu')
root.classList.contains('dauBuoiChieu')
root.classList.value
root.classList.toggle('red')

setInterval(() => {
    root.classList.toggle('red');
}, 1000)

console.log(result)