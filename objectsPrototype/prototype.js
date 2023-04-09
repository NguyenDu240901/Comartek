function Person(firstName, lastName) {
    // console.log(new.target)
    if(!new.target) { //Trong hàm tạo `person`, `new.target` được sử dụng để kiểm tra xem hàm có được gọi bằng từ khóa `new` hay không. Nếu không, hàm sẽ ném một lỗi
        throw Error('Cannot be called without the new keyword');
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    };
}

const person = new Person('Nguyen', 'Du');

console.log(person);
// Person {
//   firstName: 'Nguyen',
//   lastName: 'Du',
//   getFullName: [Function (anonymous)]
// }

console.log(person instanceof Person); //true

console.log(person.getFullName()); //Nguyen Du
// const pr = Person('My', 'Hanh'); // Cannot be called without the new keyword

console.log(typeof Object); //function

console.log(Person.prototype.constructor === Person); //true
//kiểm tra xem prototype.constructor của đối tượng person có bằng Person hay không, 
//kết quả là true vì prototype.constructor của Person được gán cho chính Person.

// console.log(Person.prototype); // Person{}

Person.prototype.getFirstName = function() {
    return this.firstName;
};
console.log(person.getFirstName()); //Nguyen

person.getLastName = function() {
    return this.lastName;
}
console.log(person.getLastName()); //Du

const pr = new Person('My', 'Hanh');
// console.log(pr.getLastName()); // getLastName is not function

console.log(pr.__proto__); //{ getFirstName: [Function (anonymous)] }
console.log(Person.prototype); //{ getFirstName: [Function (anonymous)] }

//  pr.__proto__ === Person.prototype // references the Person.prototype object.
//  pr.__proto__ === person.__proto__

// ES6
console.log(Object.getPrototypeOf(pr)); // { getFirstName: [Function (anonymous)] }

console.log(pr.constructor.prototype); //{ getFirstName: [Function (anonymous)] }