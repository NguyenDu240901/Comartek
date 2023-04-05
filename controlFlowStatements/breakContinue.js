for (let i = 0; i < 10; i++) {
    if(i == 5) {
        break;
    }
    console.log(i); // 0 1 2 3 4
}

outer: for(let i = 10; i < 20; i++){
            if(i == 15) {
                break outer;
            }
            console.log(i); // 10 11 12 13 14
        }

for(let i = 0; i < 20; i++) {
    if(i % 2 == 0) {
        continue;
    }
    console.log(i);// 1 3 5 7 ...19
}

out: for(let i = 0; i < 10; i++) {
    if(i % 2 != 0) {
        continue out;
    }
    console.log(i); // 0 2 4 6 8
}