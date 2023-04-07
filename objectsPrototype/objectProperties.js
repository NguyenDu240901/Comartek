// ! ?

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

let person = {};
// person.name = 'Dung'
// delete person.name

Object.defineProperty(person, 'name', {
    value: 'Du', //
    configurable: true,
    // configurable: false, //not delete or redefine
    writable:true,
    enumerable: true,
});
console.log(person); //{ name: 'Dung'}
// delete person.name
console.log(person);

for (let property in person) {
    console.log(property); //name
}
console.log(person.name); // Du

let student = {
    firstName: 'John',
    lastName: 'Doe',
};
Object.defineProperty(student, 'fullName', {
    get: function () {
        return this.firstName + ' ' + this.lastName;
    },
    set: function(value) {
        let parts = value.split(' ');
        if(parts.length == 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            throw 'Invalid name format';
        }
    },
});
console.log(student.fullName); //John Doe

student.fullName = 'Nguyen Du';
console.log(student.fullName) // Nguyen Du

//Define multiple properties(Định nghĩa nhiều thuộc tính)

let dt = {};
Object.defineProperties(dt, {
    name: {
        value: 'Hanh',
        enumerable: true,
    },
    age: {
        value: 21,
        enumerable: true,
    },
});
console.log(dt); //{ name: 'Hanh', age: 21 }

console.log(Object.getOwnPropertyDescriptor(dt, 'name'));
// { value: 'Hanh',
//   writable: false,
//   enumerable: true,
//   configurable: false }
console.log(Object.getOwnPropertyDescriptors(dt));
// { name: 
//     { value: 'Hanh',
//       writable: false,
//       enumerable: true,
//       configurable: false },
//    age: 
//     { value: 21,
//       writable: false,
//       enumerable: true,
//       configurable: false } }

console.log(Object.getOwnPropertyNames(dt)); // [ 'Name', 'age' ]
console.log(Object.values(dt)); //[ 'Hanh', 21 ]
console.log(Object.entries(dt)); // [ [ 'name', 'Hanh'], [ 'age', 21 ] ]