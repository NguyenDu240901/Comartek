let success = false;

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success) {
                resolve([
                    { username: 'NguyenDu', email: 'du@gmail.com'},
                    { username: 'MyHanh', email: 'hanh@gmail.com'},
                ]);
            } else {
                reject('Failed to the user list');
            }
        }, 1000);
    });
}

function onFulfilled(users) {
    console.log(users);
}

function onRejected(error) {
    console.log(error); // If: let success = false;
}

const p = getUser();
// p.then(onFulfilled, onRejected);

// p.then(
//     (users) => console.log(users),
//     (error) => console.log(error),
// );

// Promise.catch(onRejected) // If you want to get the error only when the state of the promise is rejected, you can use the catch() method of the Promise object

p.catch((error) => { // If you want to get the error only when the state of the promise is rejected, you can use the catch() method of the Promise object
    console.log(error); // Failed to the user list
});

promise
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Finally');
    });