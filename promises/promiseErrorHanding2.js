// ! Errors inside the Promises
let authorized = false;

function getUserById(id) {
    return new Promise((resolve, reject) => {
        if (!authorized) {
            throw new Error('Unauthorized access to the user data');
        }

        resolve({
            id: id,
            username: 'admin',
        });
    });
}

try {
    getUserById(10)
        .then((user) => console.log(user.username))
        .catch((err) => console.log(`Caught by .catch ${error}`));
} catch (error) {
    console.log(`Caught by try/catch ${error}`);
}
// Output:
// Caught by .catch Error: Unauthorized access to the user data

promise1
    .then(promise2)
    .then(promise3)
    .then(promise4)
    .catch((err) => console.log(err));
//In this example, if any error in the promise1, promise2, or promise4, the catch() method will handle it.
