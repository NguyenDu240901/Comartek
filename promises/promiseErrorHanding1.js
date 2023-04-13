// ! Normal error

function getUserById(id) {
    if (typeof id != 'number' || id <= 0) {
        throw new Error('Invalid id argument');
    }
    return new Promise((resolved, reject) => {
        resolved({
            id: id,
            username: 'admin',
        });
    });
}

// handle the promise by using both then() and catch() methods:

// getUserById('a')
//     .then((user) => console.log(user.username))
//     .catch((err) => console.log(err));

// đưa ra lỗi:
// Uncaught Error: Invalid id argument

// When you raise an exception outside the promise, you must catch it with try/catch:
try {
    getUserById('a')
        .then((user) => console.log(user.username))
        .catch((err) => console.log(`Caught by .catch ${error}`));
} catch (error) {
    console.log(`Caught by try/catch ${error}`);
}
// Output:
// Caught by try/catch Error: Invalid id argument

//
