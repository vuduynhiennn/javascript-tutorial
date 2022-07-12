// các cách tạo chuỗi

//cach 1  
let fullName1 = 'Vu Duy Nhien';

//cach 2   dài dòng hơn, nên dùng cách 1, và ta đang khỏi tạo 1 đối tượng. Cách 1 nhanh hơn
// kiểu dữ liệu tạo ra là object 
let fullName2 = new String('Vu Duy Nhien');

console.log(fullName1);

console.log(typeof fullName2);

// một số trường hợp sử dụng backslash \
console.log("Vu Duy Nhien \"is a programmer\"");
console.log('Vu Duy Nhien \'is a programmer\'');

console.log('Vu Duy Nhien "is a programmer"');
// xem độ dài chuỗi
console.log(fullName1.length); 

// chú ý độ dài khi viết code
let description = 'dài vl dài vl dài vl dài vl dài vl dài vl dài'
+ 'vl dài vl dài dài dài dài dài dài dài dài đài dài dài'
+ 'dài dài dài dài dài dài dài dài dài dài dài dài dài dài';

// template string

let firstName = 'Vu'

let lastName = 'Nhien'

console.log('Toi la', firstName, lastName)

console.log(`toi la ${firstName} ${lastName}`) // template string ES6


/* LÀM VIỆC VỚI CHUỖI */

// 1. length: 
console.log('hello'.length)

// 2. Find index
console.log('hello my dear friends'.indexOf('o'));// đếm từ 0 từ trái qua phải 
console.log('dau buoi'.indexOf('x'))              // không tìm thấy trả về -1
console.log('con cac cac cac '.indexOf('cac'))    // trả về vị trí đầu tiên trong 1 chuỗi lớn
console.log('con cac cac cac cac cac'.indexOf('cac', 9)) // đếm từ 9
console.log('con cac cac cac cac cac'.lastIndexOf('cac')) // đếm từ cuối

console.log('con cac cac cac cac cac'.search('cac')); // tìm kiếm theo biểu thức chính quy, k hỗ trợ tìm theo vị trí tùy chọn

// 3. cut string
let myString1 = 'Hello xin chao ban, duma may';
myString1.slice(5, 7); // cắt từ vị trí 5 đến 7
myString1.slice(5); // cắt từ vị trí 5 đến hết
myString1.slice(-3); // cắt từ phải sang

// 4. replace
let myString2 = 'Hello con cac dit me may';
myString2.replace('con', 'cac'); // thay thế nhưng mà thay thế cái đầu tiên nó gặp phải thôi
myString2.replace(/con/g, 'cac'); // biểu thức chính quy tìm tất cả con rồi thay thành cac

// 5. convert to upper case
let myString3 = 'Hoc js tai F8'
myString3.toUpperCase();
// 6. convert to lower case
myString3.toLowerCase();
// 7. Trim
let myString4 = 'dit cu may   '
myString4.trim() // loai bỏ các khoảng trắng ở 2 đầu

// 8. split 
let myString5 = 'Language, php, ruby, java'

console.log(myString5.split(','))
console.log(myString5.split(''))

// 9 get a character by index
myString5.charAt(2) // lấy ra n

