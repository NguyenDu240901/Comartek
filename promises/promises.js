// function getUsers() {
//     return [
//         { username: 'NguyenDu', email: 'du@gmail.com' },
//         { username: 'MyHanh', email: 'hanh@gmail.com' },
//     ];
// }

// synchronous and blocking
// function findUser(username) {
//     const users = getUsers();
//     const user = users.find((user) => user.username === username);
//     return user;
// }
// console.log(findUser('MyHanh')); // { username: 'MyHanh', email: 'hanh@gmail,com' }

// function getUsers() {
//     let users = [];

       // delay 1 second (1000ms)
//     setTimeout(() => { //setTimeout() được sử dụng để trì hoãn thêm hai phần tử vào mảng trong 1 giây
//         users = [
//             { username: 'NguyenDu', email: 'du@gmail.com' },
//             { username: 'MyHanh', email: 'hanh@gmail.com' },
//         ];
//     }, 1000);
//     return users;
// }

// function findUser(username) {
//     const users = getUsers(); // A
//     const user = users.find((user) => user.username === username); // B
//     return user;
// }

// console.log(findUser('NguyenDu')); // undefined

// Fix

// function getUsers(callback) {
//     setTimeout(() => {
//         callback([
//             { username: 'NguyenDu', email: 'du@gmail.com' },
//             { username: 'MyHanh', email: 'hanh@gmail.com' },
//         ]);
//     }, 1000);
// }

// function getUser(username) {
//     getUsers((users) => {
//         const user = users.find((user) => user.username === username);
//         console.log(user);
//     })
// }
// getUser('MyHanh');

// Promise

// const promise = new Promise((resolve, reject) => {
//     // contain an operation
//     // ...

//     // return the state
//     if (success) {
//         resolve(value);
//     } else {
//         reject(error);
//     }
// });

// promise.then(onFulfilled, onRejected);
function getUsers() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve([
                { username: 'john', email: 'johndoe@gmail.com' },
                { username: 'janet', email: 'janedoe@gmail.com' },
            ]);
        }, 1000);
    });
}
function onFulfilled(users) {
    console.log(users);
}

const p = getUsers();
// p.then(onFulfilled);

//Using arrow function
p.then((data) => console.log(data)); //or p.then((data) => {console.log(data)});