// primitives value (giá trị nguyên hàm)
function square(x) {
    x = x * x;
    return x;
}

let y = 10;
let result = square(y);
console.log(result); // 100
console.log(y); // 10

//reference values
let person = {
    name: 'John',
    age: 25,
};
function increaseAge(person) {
    person.age += 1;
}

increaseAge(person);

console.log(person.age); // 26

const student = {
    age: 21,
    name: 'Du,'
};

function createStudent(st) {
    // st = JSON.parse(JSON.stringify(st));
    // st.name = 'Hạnh';

    //spread(lây lan)
    st = { ...st, name: 'Hạnh' };
    return st;
}

const newST = createStudent(student);
console.log(student); // { age: 21, name: 'Du,' }
console.log(newST); // { age: 21, name: 'Hạnh' }