// // let user = 'jonh';
// //     age = 18;
// //     massage = 'hello';


// // // let massage = 'hello';
// // //     massage = 'world'
// // // alert(massage);

// // let massage = 'hello world';
// // let hello;
// // hello = massage; //copy biến
// // alert(massage);
// // alert(hello); 

// // let $ = 1;
// //     _ = 2;
// // alert($ + _);
// // console.log(typeof $)

// // const birthday = '24.09.01' // cố thay đổi sẽ bị lỗi
// //     birthday = '1.1.01'
// // alert(birthday);

// // const COLOR_RED = "#F00";
// // const COLOR_GREEN = "#0F0";
// // const COLOR_BLUE = "#00F";
// // const COLOR_ORANGE = "#FF7F00";
// // // ...when we need to pick a color
// // let color = COLOR_ORANGE;
// // alert(color); // #FF7F00

// // /*Khai báo hai biến: admin và name.
// // Gán giá trị "John"cho name.
// // Sao chép giá trị từ name sang admin.
// // Hiển thị giá trị admin sử dụng alert(phải xuất ra “John”).

// // let admin;
// //     name = 'John';
// // admin = name;
// // alert(admin)*/

// // let name = 'John';
// // // embed a variable
// // alert( `Hello, ${name}` ); // Hello, John!

// // // //Kiểu boolean
// // let isSuccess = 4 >= 1;
// // alert(isSuccess)
// // console.log(isSuccess)

// // let age = null; //null đại diện cho 'không có gì, trống rỗng, giá trị chưa biết'
// // console.log(age)

// // // let //age;//Nếu một biến được khai báo, nhưng không dược gán thì giá trị của nó là undefined
// // alert(age);

// // //object types
// // var myObject = {
// //     name : 'Nguyen du',
// //     age : 22,
// //     address: 'Ninh Binh',
// //     myFunction : function() {

// //     }
// // };
// // var myArray = [
// //     'Nguyen van a',
// //     'Nguyen van b',
// //     'Nguyen van son'
// // ];


// // // //Chuyển đổi chuỗi
// // // var value = true;
// // // alert(typeof value);

// // // value = String(value);
// // // alert(typeof value)

// // //Chuyển đổi số
// // let str  = '123';
// // alert(typeof str)
// // let num = Number(str);
// // alert(typeof num)

// // //Chuyển đổi boolean
// // alert( Boolean(1) ); // true
// // alert( Boolean(0) ); // false

// // alert( Boolean("hello") ); // true
// // alert( Boolean("") ); // false

// function showDialog() {
//     alert('Hi xin chao cac ban')
// }
// showDialog();

// function writeLog(massage, massage_2) {
//     if(massage) {
//         console.log(massage)
//     }
//     if(massage_2) {
//         console.log(massage_2)
//     }

// }
// writeLog('','');
// function writeLog() {
//     var myString = ''
//     for(var param of arguments) {
//         console.log(param)
//         myString +=`${param} - `
//     }
//     console.log(myString)
// }
// writeLog('log1', 'log2', 'log3', 'log4', '5', '6');

// //Return trong hàm
// function cong(a, b) {
//     return a + b//a.toString() + b.toString();
// }
// var result = cong(2, 8)
// console.log(result)

// function massage() {
//     function showMassage() {
//         console.log('Massage_2')
//     }
//     showMassage()
// }
// massage()

// showMassage()
// function showMassage() {
//     console.log('Declaration function')
// }
// var showMassage_2 = function() {
//     console.log('Expression function')
// }

// prompt
// let age = prompt('ban bao nhieu tuoi?', 100);
// alert(`Ban da ${age} tuoi`);

// Confirm
// let isBoss = confirm('Ban co cau hoi')
// alert(isBoss)

// //Cách tạo chuỗi khác(không nên dùng)
// var fullName = new String('Son dang');
// console.log(typeof fullName)

// //Làm việc với chuỗi
// var fullName = '    NGUYEN DU du dang hoc js js js js   ';
// console.log(fullName.length) //Độ dài chuỗi
// console.log(fullName.indexOf('u', 7)) //Find index
// console.log(fullName.lastIndexOf('js'))
// console.log(fullName.search('js'))
// console.log(fullName.slice(4, 8))
// console.log(fullName.slice(4))
// console.log(fullName.slice(0))\
// console.log(fullName.replace(/js/g, 'javascripts')) //thay thế toàn bố các chữ muốn thay thế
// console.log(fullName.toUpperCase()) //ĐỔI THÀNH CHỮ IN HOA
// console.log(fullName.toLocaleLowerCase())
// console.log(fullName.trim()) //Loại bỏ khoảng trắng hai bên

// var language = 'Javascripts, PHP, Ruby';
// console.log(language.split(', ')) //Đổi dạng string sang array

// var language = [
//   'javascripts',
//   'PHP',
//   'Python',
//   'Dart',
//   null,
//   undefined,
//   function() {

//   },
//   {},
// ]
// var language2 = [
//   'Dart',
//   'Python',
// ]
// console.log(Array.isArray(language))
// console.log(language.length)
// console.log(language[2])

// console.log(language.join(" - ")) //join
// console.log(language.pop()) //Xóa element cuối mảng và trả về phần tử đã xóa
// console.log(language.push('HTML', 'java'))
// console.log(language.shift(0, 2))
// console.log(language.unshift('CSS'))
// language.splice(2, 1, 'Dart') //(vị trí chèn, xóa, thêm vào)
// console.log(language2.concat(language))
// console.log(language.slice(2, 4)) // bắt đầu, vị trí ngừng việc cắt
// console.log(language)

// var emailKey = 'email';
// var myInfo = {
//   age: 18,
//   name: 'nguyendu',
//   address: 'Ha Noi',
//   [emailKey]: 'nguyendu@gmail.com',
//   getName: function() {
//     return this.name;
//   }
// }
// myInfo.email /*myInfo['my-email']*/= 'Nguyendu24090@gmail.com'
// var myKey = 'address';
// delete myInfo.address // xóa key
// console.log(myInfo)
// console.log(myInfo.age)
// console.log(myInfo[myKey])
// console.log(myInfo.getName())

// //Object Constructor
// function User(firstName, lastName, avatar) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;
// }

// var author = new User('Du', 'Nguyen', 'Avatar');
// var user = new User('Dat', 'Nguyen', 'Avatar');

// author.title = 'Hoc javascripts';
// user.comment = 'Comartek building';

// console.log(author);
// console.log(user);

function myPerson(firstName, lastName, age, eyecolor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyecolor = eyecolor;
    
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

myPerson.prototype.className = 'Nguyen Huy Du';
// // myPerson.prototype.getClassName = function() {
// //     return this.className;
// // }
var myFather = new myPerson('Thanh', 'Nguyen', 50, 'black');
var myMother = new myPerson('Hoan', 'Nguyen', 40, 'red');

console.log(myFather.getName());
console.log(myMother.getName());
console.log(myFather.className);
// // console.log(myMother.getClassName());

// // Object date
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate()
console.log(`${day}/${month}/${year}`);

// //Tạo hàm getNextYear, hàm này sẽ trả về năm kế tiếp. 
var date = new Date();
function getNextYear() {
    return date.getFullYear() + 1;
}

console.log(Math.PI)
console.log(Math.round(1.3)) // làm tròn
console.log(Math.abs(-5))  //trị tuyệt đối
console.log(Math.ceil(6.1)) // làm tròn trên
console.log(Math.floor(6.1111)) // làm tròn dưới
console.log(Math.random()) // random số thập phân nhỏ hơn 1
console.log(Math.min(-100, 200, 25,798,56)) // lấy ra số nhỏ nhất
console.log(Math.max(-100, 200, 25,798,56)) //lấy ra số lớn nhất

var random = Math.floor(Math.random()*5)

var bonus = [
    '10coin',
    '20coin',
    '30coin',
    '40coin',
    '50coin'
];
console.log(bonus[random])

var random = Math.floor(Math.random() *100)
if(random < 50){
    console.log('You are lucky')
}

var random = Math.floor(Math.random() * 22)
var randomGift = Math.floor(Math.random() * 11)

console.log(Math.random())
var gift = [
    'Lu Bo Tiec Bai Bien',
    'Dieu Thuyen Tiec Bai Bien',
    'Arum Vu Khuc Long Ho',
    'Trieu Van Quy Cong Tu',
    'Capheny Hau Gai',
    'Vanhein Hoang Tu Qua',
    'Nakroth Bboy Cong Nghe',
    'Dextra Quy Co Tui Dan',
    'Violet Thu Nguyen Ve Than',
    '500 QH',
]
if (random < 10) {
    console.log(gift[randomGift])
} else {
    console.log('Chuc ban 1 ngay vui ve mat me va dat biec khong co ghe')
}

var date = 2;

// if (date === 2) {
//     console.log('Hom nay la thu 2')
// }else if (date === 3) {
//     console.log('Hom nay la thu 3')
// }else if (date === 4) {
//     console.log('Hom nay la thu 4')
// } else {
//     console.log('Khong biet') // Nếu tất cả các điều kiện trên là sai thì...
// }



// switch (date) {
//     case 2:
//         console.log('Hom nay la thu 2')
//         // break;
//     case 3:
//         console.log('Hom nay la thu 3')
//         // break;
//     case 4:
//         console.log('Hom nay la thu 4')
//         // break;
//     default:
//         console.log('Khong biet')
//         break;
// }


var cource = {
    name: 'java',
    coin: 340
}
// if (cource.coin > 0) {
//     console.log(`${cource.coin} Coin`);
// } else {
//     console.log('Mien phis')
// }


//  var result = cource.coin > 0 ? `${cource.coin} Coins` : 'Mien phi';
//  console.log(result)

// /*Tạo hàm getRandNumbers có 3 tham số là min, max, length.
// Hàm này sẽ trả về một mảng gồm length phần tử,
// các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.*/

function getRandNumbers(min, max, length) {
    var array = []
    for(var i = 0; i < length; i++) {
        array.unshift(Math.random() * (max - min) + min)
    }
    return array;
}
console.log(getRandNumbers(12,13,14,15,16,17,18))

var myInfo = {
    name: 'Nguyen du',
    age: 18,
    address: 'Ha noi',
}

var myObject = [
    'java',
    'php',
    'python',
]
for (var key in myObject) {
    console.log(key[myObject])
}