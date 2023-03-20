<!-- Biến
    let
    var
Hằng số
    const
Các kiểu dữ liệu cơ bản trong js:
    number
    bigint
    string
    boolean
    null
    undefined
    symbol
    và 1 loại dữ liệu không nguyên thủy: object
Chuyển đổi chuỗi
Chuyển đổi số
Chuyển đổi boolean -->

Toán tử so sánh
Câu lệnh điều kiện If
Toán tử Logical
Kiểu typeof
Truthy và falsely

Truyền tham số: 1 tham số, nhiều tham số
Arguments: Đối tượng argument, vòng for,
Return trong hàm


Prompt,
Confirm,
Javascripts string method: Làm việc với chuỗi như:
    length,
    indexOf,
    lastIndexOf,
    search,
    slice,
    replace,
    toUpperCase,
    toLocaleLowerCase,
    trim,

Split() , 
Character by index  


Kiểu dữ liệu số (number)
    Kiểu số - Number:
        1. Các số thông thường trong Javascript được lưu trữ dưới dạng 64 bit IEEE-754 (còn được gọi là các số phẩy động). Trong hầu hết các trường hợp khi làm việc với Javascript là chúng ta sử dụng loại số này.
        2. Số BigInt là loại số sử dụng để biểu thị số nguyên có độ dài tùy ý.
        Vì mức độ thông dụng nên ở đây chúng ta chỉ tìm hiểu về loại số thông thường.
    Đối tương Number
        Number.isFinite()	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
        Number.isInteger()	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
        Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
        Number.parseInt()	Chuyển đổi chuỗi đã cho thành một số nguyên
        Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
        Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi

Mảng trong javascripts - Array
    Tạo mảng:
        cách tao,
        Kiểm tra datatype
    Truy xuất mảng:
         Độ dài mảng,
         Lấy phần tử theo index
Làm việc với Array
    To string,
    Join, biến array thành chuỗi, split biến 1 chuỗi thành array
    Pop, Xóa element cuối mảng và trả về phần tử đã xóa
    Push, thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
    Shift, Xóa element đầu mảng và trả về phần tử đã xóa
    Unshift, thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
    Spicing, xóa, cắt, chèn phần tử mới vào mảng
    Concat, nối array
    Slicing, cắt 1 vài elenment của mảng

Object
    thuộc tính. vd phone,age
    phưởng thức. vd getAge: function() {}

object constructor.
object prototype
### Const
```js
const a = 1;
```