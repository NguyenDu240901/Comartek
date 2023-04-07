const person = {
    name: 'John',
    greet: function() {
        return "Hi, I'm" + this.name;
    },
};

const teacher = {
    teach: function(subject) {
        return 'I can teach' + subject;
    },
};

console.log(person.__proto__);
teacher.__proto__ = person;
console.log(teacher.name); //John
console.log(teacher.teach(' React')); // I can teach React

const tc = Object.create(person, {
    name: {
        value: 'Teacher',
    },
    teach: {
        value: function(subject) {
            return 'I can teach' + subject;
        },
    },
});
console.log(tc.name); // Teacher
console.log(tc.teach(' Javascript')); // I can teach Javascript