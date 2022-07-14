console.log(document) // đối tượng đại diện cho toàn bộ website, chứa tất cả các thành phần khác
// làm gì thì làm phải đi qua tao, bởi tao là tất cả 


document.write('Hello bro')

// getElement


var rootNode = document.getElementById('root')
var headingNode = document.getElementsByClassName('heading')
var queryAll = document.getElementsByTagName('h1')

// css selector 
var select1 = document.querySelector('#root')
var select2 = document.querySelector('.db .db2')
var select3 = document.querySelector('.db:first-child')
var select4 = document.querySelector('.db:nth-child(2)')

var select5 = document.querySelectorAll('.db2')

var select6 = document.forms

var select7 = document.anchors //  deprecated không dùng nữa
console.log(select6['form-1'])


var select8 = document.getElementsByClassName('db')

select8.getElementsByTagName('h2');


console.log(queryAll)
console.log(headingNode) 
console.log(rootNode) 
