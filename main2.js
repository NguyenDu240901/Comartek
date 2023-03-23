//Bài tập sử dụng For... in
/*function run(object) {
    var arr = [];
    for(var key in object) {
        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
    }
    return arr
}
console.log(run({ name: 'Nguyen Van A', age: 16 }));*/


// Vòng lặp For... of
/*var myInfo = {
    name: 'Nguyen du',
    age: 18,
}

var language = [
    'Javascript',
    'PHP',
    'Python'
]
for(var value of Object.keys(myInfo)) {
    console.log(myInfo[value])
}

for(var value of language) {
    console.log(value)
}*/


// Vòng lặp While
// var i = 1;

// while(i < 1000) {
//     i++
//     console.log(i);
// }


/*var myArray = [
    'java',
    'php',
]
var i = 0
while(i < myArray.length) {
    console.log(myArray[i]);
    i++;
}*/


// Vòng lặp do... while
/*var i = 0;
var isSuccess = false;
do {
    i++;
    console.log('Nap the lan ' + i);
    // Thanh cong
    if (true) {
        isSuccess = true
    }
} while (!isSuccess && i <=3)*/


// Break và continue trong vòng lặp
/*for(var i = 0; i < 10; i++) {
    
    if(i % 2 !== 0) {
        continue
    }
    console.log(i);
}*/


// Vòng lặp lồng nhau
/*var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];
for(var i = 0; i < myArray.length; i++) {
    for(var j = 0; j < myArray[i].length; j ++)
    {
        console.log(myArray[i][j])
    }
}*/


/*for(var i = 100; i >= 0; i -= 5) {
    console.log(i)
}*/
