// ! returns a new promise executed first

// Example1: The following creates two promises: one resolves in 1 second and the other resolves in 2 seconds.
// Because the first promise resolves faster than the second one,
// the Promise.race() resolves with the value from the first promise:

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The first promise has resolved');
//         resolve(10);
//     }, 1 * 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has resolved');
//         resolve(20);
//     }, 2 * 1000);
// });

// Promise.race([p1, p2])
//     .then((value) => console.log(`Resolved: ${value}`)) // then() được gọi nếu Promise được giải quyết thành công và trả về kết quả đó
//     .catch((reason) => console.log(`Rejected: ${reason}`)); // catch() được gọi nếu Promise bị bác bỏ và trả về lỗi của nó.

//Output:
// The first promise has resolved
// Resolved: 10
// The second promise has resolved

//

// Example 2: The following example creates two promises.
// The first promise resolves in 1 second while the second one rejects in 2 seconds.
// Because the first promise is faster than the second one, the returned promise resolves to the value of the first promise:

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has reject');
        reject(20);
    }, 2 * 1000);
});

Promise.race([p1, p2])
    .then((value) => console.log(`Resolved: ${value}`))
    .catch((reason) => console.log(`Rejected ${reason}`));

//Output:
// The first promise has resolved
// Resolved: 10
// The second promise has rejected

// ! Note that if the second promise was faster than the first one, the return promise would reject for the reason of the second promise.
