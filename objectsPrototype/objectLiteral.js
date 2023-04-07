function create(name, status) {
    return {
        name: name,
        status: status,
    };
}

//ES6
function createP(name, status) {
    return {
        name,
        status,
    };
}

let name = 'Du';
let age = 21;
const obj = { name, age };
console.log(obj); //{ name: 'Du, age: 21 }

let n = 'machine name';
let machine = {
    [n]: 'server',
    'machine hours': 10000,
};

console.log(machine); //{ 'machine': 'server', 'machine hours': 10000}
console.log(machine[n]); // server
console.log(machine['machine hours']); //10000

// let prefix = 'machine';
// let machine = {
//     [prefix + ' name']: 'server',
//     [prefix + ' hours']: 10000
// };
// console.log(machine['machine name']); // server
// console.log(machine['machine hours']); // 10000

//Shorthand
let server = {
    name: 'server',
    restart: function () {
        console.log('The' + this.name + ' is restarting...');
    },
};

//Refactor (cấu trúc lại)
server = {
    name: 'Server',
    restart() {
        console.log('The ' + this.name + ' is restarting...');
    },
    'starting up' () {
        console.log('The ' + this.name + ' is starting up!');
    },
};
server['starting up'](); //The Server is starting