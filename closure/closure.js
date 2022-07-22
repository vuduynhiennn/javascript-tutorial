/*1. closure là 1 hàm có thể ghi nhớ nơi nó được tạ
  2. nó có thể truy cập vào các biến ngoài phạm vi của nó 
khi làm việc với function, đang vô ý sử dụng closủe
// */

// function createCounter() {
//     let counter = 0
//     function increase() {
//         return ++counter
//     }
//     return increase
// }

// const counter1 = createCounter()
// console.log(counter1())
// console.log(counter1())
// console.log(counter1())
// console.log(counter1())
// function createLogger(namespace) {
//     function logger(message) {
//         console.log(`[${namespace}] ${message}`)
//     }
//     return logger
// }

// const infoLogger = createLogger('info')

// infoLogger('Hàm gửi mail bắt đầu gửi mail')
// infoLogger('gửi mail lỗi gửi lại')
// infoLogger('gửi mail thành công')

// // forgot passworrd

// const errorLogger = createLogger('error')
// errorLogger('email không tồn tại trong database')
// function createStorage(key) {
//     const store = JSON.parse(localStorage.getItem(key)) ?? {}
//     function save() {
//         localStorage.setItem(key, JSON.stringify(store))
//     }   
//     const storage = {
//         get(key) {
//             return store[key]
//         },
//         set(key, value) {
//             store[key] = value
//             save()
//         }, 
//         remove(key) {
//             delete store[key]
//             save()
//         }
//     }
//     return storage
// }

// let result
// const ProfileSetting = createStorage('profile_setting')


// while (false) {
    // let i = 0
    // ProfileSetting.set(`fullName[${i}]`, `conCac${i}`)
    // console.log(ProfileSetting.get('Full Name'))
// }
// ProfileSetting.get('fullName')
// console.log(result)



// function createApp() {
//     const cars = []
//     return {
//         add(car) {
//             cars.push(car)
//         },
//         show() {
//             console.log(cars)
//         }
//     }
// }







