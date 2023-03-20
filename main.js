// let user = 'jonh';
//     age = 18;
//     massage = 'hello';


// // let massage = 'hello';
// //     massage = 'world'
// // alert(massage);

// let massage = 'hello world';
// let hello;
// hello = massage; //copy biến
// alert(massage);
// alert(hello); 

// let $ = 1;
//     _ = 2;
// alert($ + _);
// console.log(typeof $)

// const birthday = '24.09.01' // cố thay đổi sẽ bị lỗi
//     birthday = '1.1.01'
// alert(birthday);

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";
// // ...when we need to pick a color
// let color = COLOR_ORANGE;
// alert(color); // #FF7F00

// /*Khai báo hai biến: admin và name.
// Gán giá trị "John"cho name.
// Sao chép giá trị từ name sang admin.
// Hiển thị giá trị admin sử dụng alert(phải xuất ra “John”).

// let admin;
//     name = 'John';
// admin = name;
// alert(admin)*/

// let name = 'John';
// // embed a variable
// alert( `Hello, ${name}` ); // Hello, John!

// // //Kiểu boolean
// let isSuccess = 4 >= 1;
// alert(isSuccess)
// console.log(isSuccess)

// let age = null; //null đại diện cho 'không có gì, trống rỗng, giá trị chưa biết'
// console.log(age)

// // let //age;//Nếu một biến được khai báo, nhưng không dược gán thì giá trị của nó là undefined
// alert(age);

// //object types
// var myObject = {
//     name : 'Nguyen du',
//     age : 22,
//     address: 'Ninh Binh',
//     myFunction : function() {

//     }
// };
// var myArray = [
//     'Nguyen van a',
//     'Nguyen van b',
//     'Nguyen van son'
// ];


// // //Chuyển đổi chuỗi
// // var value = true;
// // alert(typeof value);

// // value = String(value);
// // alert(typeof value)

// //Chuyển đổi số
// let str  = '123';
// alert(typeof str)
// let num = Number(str);
// alert(typeof num)

// //Chuyển đổi boolean
// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false

// alert( Boolean("hello") ); // true
// alert( Boolean("") ); // false

function showDialog() {
    alert('Hi xin chao cac ban')
}
showDialog();

function writeLog(massage, massage_2) {
    if(massage) {
        console.log(massage)
    }
    if(massage_2) {
        console.log(massage_2)
    }

}
writeLog('','');
function writeLog() {
    var myString = ''
    for(var param of arguments) {
        console.log(param)
        myString +=`${param} - `
    }
    console.log(myString)
}
writeLog('log1', 'log2', 'log3', 'log4', '5', '6');

//Return trong hàm
function cong(a, b) {
    return a + b//a.toString() + b.toString();
}
var result = cong(2, 8)
console.log(result)

function massage() {
    function showMassage() {
        console.log('Massage_2')
    }
    showMassage()
}
massage()

showMassage()
function showMassage() {
    console.log('Declaration function')
}
var showMassage_2 = function() {
    console.log('Expression function')
}

prompt
let age = prompt('ban bao nhieu tuoi?', 100);
alert(`Ban da ${age} tuoi`);

Confirm
let isBoss = confirm('Ban co cau hoi')
alert(isBoss)

//Cách tạo chuỗi khác(không nên dùng)
var fullName = new String('Son dang');
console.log(typeof fullName)

//Làm việc với chuỗi
var fullName = '    NGUYEN DU du dang hoc js js js js   ';
console.log(fullName.length) //Độ dài chuỗi
console.log(fullName.indexOf('u', 7)) //Find index
console.log(fullName.lastIndexOf('js'))
console.log(fullName.search('js'))
console.log(fullName.slice(4, 8))
console.log(fullName.slice(4))
console.log(fullName.slice(0))\
console.log(fullName.replace(/js/g, 'javascripts')) //thay thế toàn bố các chữ muốn thay thế
console.log(fullName.toUpperCase()) //ĐỔI THÀNH CHỮ IN HOA
console.log(fullName.toLocaleLowerCase())
console.log(fullName.trim()) //Loại bỏ khoảng trắng hai bên

var language = 'Javascripts, PHP, Ruby';
console.log(language.split(', ')) //Đổi dạng string sang array

var language = [
  'javascripts',
  'PHP',
  'Python',
  'Dart',
  null,
  undefined,
  function() {

  },
  {},
]
var language2 = [
  'Dart',
  'Python',
]
console.log(Array.isArray(language))
console.log(language.length)
console.log(language[2])

console.log(language.join(" - ")) //join
console.log(language.pop()) //Xóa element cuối mảng và trả về phần tử đã xóa
console.log(language.push('HTML', 'java'))
console.log(language.shift(0, 2))
console.log(language.unshift('CSS'))
language.splice(2, 1, 'Dart') //(vị trí chèn, xóa, thêm vào)
console.log(language2.concat(language))
console.log(language.slice(2, 4)) // bắt đầu, vị trí ngừng việc cắt
console.log(language)

var emailKey = 'email';
var myInfo = {
  age: 18,
  name: 'nguyendu',
  address: 'Ha Noi',
  [emailKey]: 'nguyendu@gmail.com',
  getName: function() {
    return this.name;
  }
}
myInfo.email /*myInfo['my-email']*/= 'Nguyendu24090@gmail.com'
var myKey = 'address';
delete myInfo.address // xóa key
console.log(myInfo)
console.log(myInfo.age)
console.log(myInfo[myKey])
console.log(myInfo.getName())

//Object Constructor
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
}

var author = new User('Du', 'Nguyen', 'Avatar');
var user = new User('Dat', 'Nguyen', 'Avatar');

author.title = 'Hoc javascripts';
user.comment = 'Comartek building';

console.log(author);
console.log(user);