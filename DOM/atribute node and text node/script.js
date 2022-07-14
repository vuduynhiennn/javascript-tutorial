var boxNode = document.getElementsByClassName('box')

console.log(boxNode[0])


// từ khóa: setter
boxNode[0].title = 'đây là box node'
boxNode[0].id = 'đây là box node'
boxNode[0].className = 'đây là box node'
boxNode[0].href = 'đây là box node'

//với element có các atribute hợp lệ thì k đc, vd thẻ h1 k thêm đc href


boxNode[0].setAttribute('class', 'heading');
boxNode[0].setAttribute('id', 'heading');
boxNode[0].setAttribute('href', 'heading');
boxNode[0].setAttribute('your-custom-atribute', 'heading');

boxNode[0].getAttribute('title');
boxNode[0].title; /// get đc kiểu này nếu nó hợp lệ với element đó
