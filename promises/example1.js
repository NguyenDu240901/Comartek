function getUsers() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve([
                { username: 'NguyenDu', email: 'du@gmail.com' },
                { username: 'MyHanh', email: 'hanh@gmail.com' }
            ])
        }, 1000);
    })
}

function onFulfilled(users) {
    console.log(users);
}
const p = getUsers();
p.then(onFulfilled);
p.then((data) => console.log(data));