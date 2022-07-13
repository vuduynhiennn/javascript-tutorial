let myInfor = {
    name: 'Vu Duy Nhien',
    age: 18,
    address: 'Yên Phúc, Ý Yên, Nam Định',
    getName: function getMyOwnName() {
        console.log(this.name);
    }
};

myInfor.email = 'nhienduyvu@gmail.com';
myInfor['myFuck'] = 'nhienduyvu@gmail.com';

delete myInfor.address;

console.log(myInfor.address);
console.log(myInfor['name']);

