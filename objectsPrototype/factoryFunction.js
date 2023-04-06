function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName() {
            return firstName + ' ' + lastName;
        },
    };
}

const p1 = createPerson('Nguyen', 'Du');
console.log(p1.getFullName()); //Nguyen Du
const p2 = createPerson('My', 'Hanh');
console.log(p2.getFullName()); // My Hanh

//Refactor(cấu trúc lại)
function createPr(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
    };
}

const actions = {
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};
const p3 = createPr('Hanh', 'Le');
p3.getFullName = actions.getFullName;
console.log(p3.getFullName()); // Hanh Le

//Object create
function createPerson1(firstName, lastName) {
    let person = Object.create(actions); //"object.create()" để tạo một đối tượng mới mà kế thừa tất cả các thuộc tính và phương thức của đối tượng "actions"
    person.firstName = firstName;
    person.lastName = lastName;
    return person;
}

const person = createPerson1('Yen', 'Nguyen');
console.log(person.getFullName()); //Yen Nguyen