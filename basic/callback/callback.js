// là hàm được truyền qua đôi số
// khi gọi hàm khác

// 1. là hàm
// 2. được truyền qua đối số
// lí thuyết: định nghĩa ra 1 function, dùng cái function đã định nghĩa làm đối số cho 
//một function khác gọi là callback
function myFunction(params) {
    if (typeof params === 'function') {
        params('Học lập trình tại F8');
    }
}
function myCallBack(value) {
    console.log('Value:', value)
}

myFunction(myCallBack)

