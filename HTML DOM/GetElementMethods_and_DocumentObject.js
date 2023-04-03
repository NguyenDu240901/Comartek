// var boxNode = document.querySelector('.box-1');
// console.log(boxNode)
// console.log(boxNode.querySelectorAll('li'))
// console.log(boxNode.getElementsByTagName('li'))
// console.log(boxNode.getElementsByTagName('p'))
// console.log(boxNode.querySelector('p'))

// var x = document.getElementById('main');
// var y = x.getElementsByTagName('p')

// document.getElementById('demo').innerHTML = 'This example demonstrates the: ' + y[0].innerHTML

/*
var x = document.querySelectorAll('p.intro')
document.getElementById('demo').innerHTML = 'hfgdfhgjgjdfg: ' + x[0].innerHTML
*/


// Document object

//1. Lấy đối tượng HTML của trang web:
```
var doc = document.documentElement;
```

//2. Lấy thông tin về tên của tài liệu:
```
var title = document.title;
```

//3. Lấy số lượng các phần tử `<p>` trong tài liệu:
```
var pElements = document.getElementsByTagName('p');
var pCount = pElements.length;
```

//4. Thêm một phần tử mới vào trang web:
```
var newDiv = document.createElement('div');
document.body.appendChild(newDiv);
```

//5. Thay đổi nội dung của phần tử:
```
var elem = document.getElementById('myDiv');
elem.innerHTML = 'Nội dung mới';
```

//6. Xóa một phần tử khỏi trang web:
```
var elem = document.getElementById('myDiv');
elem.parentNode.removeChild(elem);

```



// Get element methods

//1. getElementById() - returns an element by its ID attribute
Example:
```javascript
const element = document.getElementById("myElement");
```
//2. getElementsByTagName() - returns a collection of elements by their tag name
Example:
```javascript
const elements = document.getElementsByTagName("div");
```
//3. getElementsByClassName() - returns a collection of elements by their class name
Example:
```javascript
const elements = document.getElementsByClassName("myClass");
```
//4. getElementsByName() - returns a collection of elements by their name attribute
Example:
```javascript
const elements = document.getElementsByName("myName");
```
//5. querySelector() - returns the first element that matches a CSS selector
Example:
```javascript
const element = document.querySelector("#myElement .myClass");
```
//6. querySelectorAll() - returns a collection of elements that match a CSS selector
Example:
```javascript
const elements = document.querySelectorAll(".myClass");
```
//7. matches() - checks if an element matches a CSS selector
Example:
```javascript
const match = element.matches(".myClass");
```
//8. closest() - finds the closest ancestor element that matches a CSS selector
Example:
```javascript
const ancestor = element.closest(".myClass");
```
//9. getElementFromPoint() - returns the element at a specified point in the viewport
Example:
```javascript
const element = document.getElementFromPoint(10, 10);
```
