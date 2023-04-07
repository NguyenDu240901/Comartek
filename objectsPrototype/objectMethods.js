let person = {
    firstName: 'John',
    lastName: 'Doe'
}

person.greet1 = function() {
    console.log('Hello');
};
person.greet1(); //Hello

const greet2 = function() {
    console.log('Hi');
}
person.greet2 = greet2;
person.greet2(); //Hi

function greet3() {
    console.log('Hello everyone');
}
person.greet3 = greet3;
person.greet3(); //Hello everyone

//Shorthand
person = {
    firstName: 'Nguyen',
    lastName: 'Du',
    greet: function() {
        console.log('Okay');
    },
};
person.greet(); //Okay

//ES6
person = {
    firstName: 'Nguyen',
    lastName: 'Du',
    greet() {
        console.log('Hihi i am superman');
    },
};
person.greet(); // Hihi i am superman

// this
const student = {
    firstName: 'Nguyen',
    lastName: 'Du',
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    },
};
console.log(student.getFullName()); //Nguyen Du