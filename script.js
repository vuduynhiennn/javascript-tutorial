let listImg = document.getElementById('list--img')

for (let i = 1; i <= 20; i++) {
    let temp = document.createElement('canvas')
    temp.setAttribute('id', `canvas${i}`)
    listImg.appendChild(temp)
}

