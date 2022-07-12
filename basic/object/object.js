let myInfo = {
    name: 'Vu Duy Nhien',
    age: 18,
    address: 'Yên Phúc, Ý Yên, Nam Định',
    getName: function getMyOwnName() {
        console.log(this.name);
    }
};

myInfo.email = 'nhienduyvu@gmail.com';

myInfo.getName();
