/*
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'PHP',
        coin: 350
    },
    {
        id: 3,
        name: 'Python',
        coin: 0
    },
    {
        id: 4,
        name: 'ReactJS',
        coin: 0
    },
    {
        id: 5,
        name: 'Java',
        coin: 250
    },
    {
        id: 6,
        name: 'ReactJS',
        coin: 3
    },
];
*/
/*
//forEach
courses.forEach(function(course, index) {
    console.log(index, course)
});


// every
var isFree = courses.every(function(course, index) {
    return course.coin === 0 
});
console.log(isFree) // Tất cả các khóa học = 0 thì trả về True, có 1 hay nhiều khóa > 0 sẽ trả về False; nếu duyệt đến phần tử ko thỏa mãn thì sẽ ngừng chạy và trả về False


//some
var isFree = courses.some(function(course, index) {
    return course.coin === 0 
});
console.log(isFree) // Chỉ cần 1 phần tử đúng sẽ trả về True và dừng vòng lặp


//find
var course = courses.find(function(course, index) {
    return course.name === 'ReactJS';
});
console.log(course) // Chỉ trả về 1 phần tử


//filter
var listCourse = courses.filter(function(course, index) {
    return course.name === 'ReactJS';
});
console.log(listCourse)
*/

/*
// map()
function courseHandler(course, index) {
    // console.log(course)
    return {
        id: course.id,
        name: `Khóa học ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: courses
    }
}
var newCourse = courses.map(courseHandler);
console.log(newCourse)
*/


// Array reduce() method
    //Biến lưu trữ
    //Thực hiện việc lưu trữ

/*
var i = 0
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;
    var total = accumulator + currentValue.coin;
    console.table({
        'Luot chay: ': i,
        'Bien luu tru: ': accumulator,
        'Gia khoa hoc: ': currentValue.coin,
        'Tich tru duoc: ': total
    });
    return total;
}
var totalCoin = courses.reduce(coinHandler, 0);
console.log(coinHandler)
*/


/*
// Rút gọn
var totalCoin = courses.reduce(function(accmulator, currentValue) {
    return accmulator + currentValue.coin;
}, 0);
console.log(totalCoin)
*/


/*
// Sử dụng vòng lặp
var totalCoin = 0;
for(var course of courses) {
    totalCoin += course.coin;
}
console.log(totalCoin)
*/



/*
// EX1: Flat - "Làm phẳng" mảng từ Deth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem);
}, []);
console.log(flatArray)
*/

// EX2:Lấy ra các khóa học và đưa vào mảng mới

var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ]
    },
]

var newCourse = topics.reduce(function(khoahoc, topic) {
    return khoahoc.concat(topic.courses);
}, [])
console.log(newCourse)


