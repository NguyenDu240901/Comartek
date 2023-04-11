let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        // setTimeout() function simulates an asynchronous operation.
        resolve(10);
    }, 3 * 100);
});

// p.then((result) => {
//     console.log(result); // 10
//     return result * 2
// })
//     .then((result) => {
//     console.log(result) // 20
//     return result * 3
//     })
//     .then((result) => {
//         console.log(result); // 60
//         return result * 4
//     })
//     .then((result) => {
//         console.log(result); // 240
//         return result * 5
//     })

//

// p.then((result) => {
//     console.log(result); // 10
//     return result * 2;
// })
//     p.then((result) => {
//         console.log(result); // 10
//         return result * 3;
//     })
//     p.then((result) => {
//         console.log(result); // 10
//         return result * 4
//     }) // In practice, you will rarely use multiple handlers for one promise.

//

// p.then((result) => {
//     console.log(result); // 10
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result * 2);
//         }, 3 * 1000);
//     });

// })
//     .then((result) => {
//     console.log(result); // 20
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result * 3);
//         }, 3 * 1000);
//     })
//     })
//     .then(result => console.log(result)) // 60

// .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('Reject');
//         }, 3 * 1000);
//     });
// })
//     .catch((err) => {
//         console.log(err); // Reject
//     });

// Example
function generateNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number);
        }, 3 * 1000);
    });
}

// generateNumber(10)
//     .then((result) => {
//         console.log(result); // 10
//         return generateNumber(result * 2);
//     })
//     .then((result) => {
//         console.log(result); // 20
//         return generateNumber(result * 3);
//     })
// .then((result) => console.log(result)) // 60

// Featured example: get user -> get service of user -> calculate the service cost

function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'Admin',
            });
        }, 1000);
    });
}

function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'admin',
            });
        }, 1000);
    });
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get the services of ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['email', 'VPN', 'CDN']);
        }, 3 * 1000);
        x;
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate the service cost of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 2 * 1000);
    });
}

getUser(100).then(getServices).then(getServiceCost).then(console.log);
