var courses = [
    {
        id: 1,
        courseName: 'javascript',
        coin: 0
    },
    {
        id: 2,
        courseName: 'ruby',
        coin: 1
    },
    {
        id: 3,
        courseName: 'java',
        coin: 20
    },
    {
        id: 4,
        courseName: 'ruby',
        coin: 34
    },
]

/* ARRAY METHODS */
//
courses.forEach(function(course, index) {
    // console.log(index, course)
});

var isFree = courses.every(function(course, index) {    // trả về boolean tất cả phải đáp ứng thì mới trả về true
    return course.coin === 0
});

var isNotFree = courses.some(function(course, index) {    // trả về boolean chỉ cần 1 ông thỏa mãn là ngừng sự kiểm tra 
    return course.coin === 34
});


var isRuby = courses.find(function(course, index) {    // trả về boolean chỉ cần 1 ông thỏa mãn là trả về ông đó
    return course.courseName === 'ruby'
});


var isRuby1 = courses.filter(function(course, index) {    // trả về tất cả các ông thỏa mãn cái điều kiện cần kiểm tra
    console.log(course.id)
    return index.courseName === 'ruby'
});



console.log(isRuby)


