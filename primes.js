'use strict';

const n = 20;
let flag = false;

for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = true;
            break;
        }
    }
    if (!flag) {
        alert(i);
    }
    flag = false;
}