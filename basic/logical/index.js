// ngầm định false trong javascript 
// có 6 giá trị javascript sẽ convert boolean sẽ sang false
// 0
// ''
// null
// undefined
// false 


// TOÁN TỬ AND &&
// chạy từ trái sang phải 
var isOk = 'A' && 1 && null && undefined && false;
console.log(isOk);

// TOÁN TỬ OR
// chạy từ trái sang phải 
var result1 = 1 || null || undefined || 0 || 'string'
// 1 trong các trường chỉ cần 1 vế đáp ứng điều kiện là ok 
console.log(result1)



// tham số và đối số
// http://minhhn.com/javascript/tham-so-va-doi-so-cua-ham-javascript/

function tenFuntion(parameter1, parameter2, parameter3) {
     // code xử lí
}

tenFuntion(argument);

// tham số - parameter là biến được xác định bởi hàm, nhận giá trị khi hàm được gọi