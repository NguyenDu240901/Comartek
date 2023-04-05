for (i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

let j = 5;
for(; j < 10; j++) {
    console.log(j); // 5 6 7 8 9
}

for (let j = 10; ; j += 2) {
    console.log(j); // 10 12 14 16 18 20
    if(j >= 20) {
        break;
    }
}

let k = 1;
for(; ;) {
    if(k > 10) {
        break;
    }
    console.log(k); // 1 3 5 7 9
    k += 2;
}

let sum = 0;
for(let i = 0; i <= 9; i++, sum += i);
console.log(sum); // 55