function sum(n) {
    if (n <= 1) {
        return n;
    }
    return n + sum(n - 1);
}
console.log(sum(4)); // sum(4) = 4 + sum(3) = 4 + (3 + sum(2)) = 4 + 3 + 2 + 1 = 10

function countDown(n) {
    console.log(n); // 3, 2, 1
    let next = n - 1;
    if (next > 0) {
        countDown(next);
    }
}
countDown(3)