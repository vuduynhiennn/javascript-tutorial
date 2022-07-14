const root = document.getElementById('root')

console.log(root.innerHTML)
console.log(root.textContent)

root.innerText = 'New Heading' // tạo ra khi js được thực thi
// xem source thấy nó vẫn như cũ
root.textContent = 'New Heading' 
root.textContent = '<i> New Heading/i>' // không đc coi là html

// geter lấy ra giá trị
// seter thay đổi giá trị

// SỰ KHÁC NHAU GIỮA INNTER TEXT VÀ TEXT CONTENT
// innerText lấy giá trị nội dung lấy giống nội dung hiển thị ở trình duyệt, textContent lấy ra nội dung thật trong DOM

console.log(root.innerText)
console.log(root.textContent)



