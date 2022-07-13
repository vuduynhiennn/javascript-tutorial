function User(name, age, address, isCute) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.isCute = isCute;
    this.getName = function() {
        return `${this.name}  ${this.age}`;
    }
}
User.prototype.title = 'user is a ok man'; // them thuoc tinh ngoai ham tao

let vuDuyNhien = new User('Vu Duy Nhien', 18, 'Yen Phuc Y Yen Nam Dinh', true);
let vuThuNgan = new User('Vu Thu Ngan', 7, 'Yen Phuc Y Yen Nam Dinh', true);

vuDuyNhien.job = 'coding';
vuThuNgan.class = 4;

console.log(vuThuNgan.getName());

// object prototype

console.log(vuDuyNhien, vuThuNgan);