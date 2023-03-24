// Hàm đệ quy

function sayHello(count) {
    if (count <= 0) {
    return
}
 console.log('Hello world');
 sayHello (count - 1);
}
 sayHello(5)
 


// var myArray = ['a','b','c','a','b','c']
//     console.log([...(new Set(myArray))])


//ex đếm ngược

function coutDown(num) {
    if(num > 0) {

        console.log(num)

        return coutDown(num - 1)
    }
    return num
}
coutDown(10)



//ex
function loop(start, end, cb) {
    if(start < end) {
        cb(start)
        return loop(start + 1, end, cb)
    }
}
 var array = [
    'Javascrip',
    'PHP',
    'Python'
 ]

 loop(0, array.length, function(index){
 console.log(array[index])
 });
 


// Tính gia thừa bằng vòng lặp

 function giaithua(number) {
    var output = 1;
    for(var i = number; i > 0; i--) {
        output = output * i
    }
    return output
 }
console.log(giaithua(5))



// Tính giai thừa bằng đệ quy

function giaithua(number) {
    if(number > 0) {
        return number * giaithua(number - 1)
    }
    return 1
}
console.log(giaithua(3))


//
