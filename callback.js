// Callback
// Là hàm (function) được truyền qua đối số khi gọi hàm khác
// 1. Là hàm
// 2. Được truyền qua đối số

// function myFunction(param) {
//     if(typeof param === 'function') {      
//         param('Hoc lap trinh');
//     }
// }
// function myCallback(value) {
//     console.log('Value', value)
// }
// myFunction(myCallback)



Array.prototype.map2 = function(callback) {
    var output = [], arrayLength = this.length;
    for(var i = 0; i < arrayLength; ++i) {
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]
var htmls = courses.map2(function(courses, index) {
    return `<h2>${courses}</h2>`;
});

console.log(htmls)
