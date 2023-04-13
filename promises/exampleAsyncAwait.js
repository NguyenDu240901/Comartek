// async function sayHi() {
//     return 'Hi';
// }

// sayHi().then(console.log);

// hoặc

// async function sayHi() {
//     return Promise.resolve('Hi')
// }
// Hiệu quả là như nhau

async function sayHi() {
    return Promise.reject('Error Hi');
}

// let sayHi = async () => 'Hi' //Arrow function

// methods of classes
class Greeter {
    async sayHi() {
        return 'Hi';
    }
}

async function display() {
    let result = await sayHi();
    console.log(result);
} // the await keyword instructs the JavaScript engine to wait for the sayHi() function to complete before displaying the message.

// ! Note that if you use the await operator outside of an async function, you will get an error.

// Error handling

// async function getUser(userId) {
//     await Promise.reject(new Error('Invalid User Id'));
// }

// … is the same as this:

// async function getUser(userId) {
//     throw new Error('Invaild User Id');
// }

// Use try...catch statement, the same way as a regular throw statement:

// async function getUser(userId) {
//     try {
//         const user = await Promise.reject(new Error('Invalid User Id'));
//     } catch (error) {
//         console.log(error);
//     }
// }

// Có thể bắt lỗi do một hoặc nhiều Promise() đang chờ đợi gây ra:
async function showServiceCost() {
    try {
        let user = await getUserById(100);
        let services = await getServices(user);
        let cost = await getServicesCost(services);
        console.log(`The services cost is ${cost}`);
    } catch (error) {
        console.log(error);
    }
}
