let user = 'jonh';
    age = 18;
    massage = 'hello';


// let massage = 'hello';
//     massage = 'world'
// alert(massage);

let massage = 'hello world';
let hello;
hello = massage; //copy biến
alert(massage);
alert(hello); 

let $ = 1;
    _ = 2;
alert($ + _);
console.log(typeof $)

const birthday = '24.09.01' // cố thay đổi sẽ bị lỗi
    birthday = '1.1.01'
alert(birthday);

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

/*Khai báo hai biến: admin và name.
Gán giá trị "John"cho name.
Sao chép giá trị từ name sang admin.
Hiển thị giá trị admin sử dụng alert(phải xuất ra “John”).

let admin;
    name = 'John';
admin = name;
alert(admin)*/

let name = 'John';
// embed a variable
alert( `Hello, ${name}` ); // Hello, John!

// //Kiểu boolean
let isSuccess = 4 >= 1;
alert(isSuccess)
console.log(isSuccess)

let age = null; //null đại diện cho 'không có gì, trống rỗng, giá trị chưa biết'
console.log(age)

// let //age;//Nếu một biến được khai báo, nhưng không dược gán thì giá trị của nó là undefined
alert(age);

//object types
var myObject = {
    name : 'Nguyen du',
    age : 22,
    address: 'Ninh Binh',
    myFunction : function() {

    }
};
var myArray = [
    'Nguyen van a',
    'Nguyen van b',
    'Nguyen van son'
];


// //Chuyển đổi chuỗi
// var value = true;
// alert(typeof value);

// value = String(value);
// alert(typeof value)

//Chuyển đổi số
let str  = '123';
alert(typeof str)
let num = Number(str);
alert(typeof num)

//Chuyển đổi boolean
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
