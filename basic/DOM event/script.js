let input = document.getElementsByClassName('yourInput')[0]
let input1 = document.getElementsByClassName('yourInput')[0]


let inputValue;

input.onchange = (e) => {
    console.log(e.target.value)
}

// onchange phải thay đổi thì mới cập nhật lại giá trị 

input.oninput = (e) => {
    inputValue = e.target.value
}

// oninput giá trị được cập nhật liên tục

console.log(inputValue)

input.onkeydown = (e) => {
    e.target
}

input.onkeyup = (e) => {
    e.target
}

// PREVENT DAUFAULT 
let aList = document.anchors

aList = document.querySelectorAll('a')

for (let i = 0; i < aList.length; i++) {
    aList[0].target.href 
    e.preventDefault()
}


