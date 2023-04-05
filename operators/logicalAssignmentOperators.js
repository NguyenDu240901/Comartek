//! Toán tử gán logic
// x || y => x || x = y
// x && y => x && x = y
// x ?? y => x ?? x = y 

//Or logic: if x is falsy
let title;
title ||= 'message';
console.log(title); //massage
title = 'Ok';
title || 'message';
console.log(title); //Ok

//And logic: if x is truthy
let age = 10;
age &&= 21;
console.log(age); //21
age = 0;
age &&= 100;
console.log(age); //0

//The nullish coalescing assignment operator: if x is null and undefined
let user = {
    username: 'NguyenDu',
};
user.nickname = 'DuGoodBoy';

console.log(user); //{ username: 'NguyenDu', nickname: 'DuGoodBoy' }