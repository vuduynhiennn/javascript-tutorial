// let a = document.createElement('h1');
let a = document.createElement('h1');
a.innerHTML = 'Hello guys my name is Vu Duy Nhien';
console.log(a);
a.id = 'Vuduynhien'
a.style = 'color: red'
Object.assign(a.style, {
    color: 'pink',
    backgroundColor: 'green',
    padding: '20px'
})
document.body.appendChild(a);
document.getElementById('root');
