// ! Calling reject() function

// let authorized = false;
// function getUserById(id) {
//     return new Promise((resolve, reject) => {
//         if (!authorized) {
//             reject('Unauthorized access to the user data');
//         }
//         resolve({
//             id: id,
//             username: 'admin'
//         });
//     });
// }

// try {
//     getUserById(10)
//         .then((user) => console.log(user.username))
//         .catch((err) => console.log(`Caught by .catch ${err}`)); //Caught by .catch Unauthorized access to the user data
// } catch (error) {
//     console.log(`Caught by try/catch ${error}`);
// }

// ! Missing the catch() method
let authorized = false;
function getUserById(id) {
    return new Promise((resolve, reject) => {
        if (!authorized) {
            reject('Unauthorized access to the user data');
        }
        resolve({
            id: id,
            username: 'admin',
        });
    });
}

try {
    getUserById(10).then((user) => console.log(user.username));
    // the following code will not execute
    console.log('next');
} catch (error) {
    console.log(`Caught by try/catch ${error}`);
}

// Output:
// Uncaught (in promise) Unauthorized access to the user data

//If the promise is resolved, you can omit the catch() method. In the future, a potential error may cause the program to stop unexpectedly.

// Summary
// Inside the promise, the catch() method will catch the error caused by the throw statement and reject().
// If an error occurs and you don’t have the catch() method, the JavaScript engine issues a runtime error and stops the program.
