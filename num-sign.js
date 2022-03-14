'use strict';

const num = prompt('Enter the num','');
let sign;

if (num > 0) {
    sign = 1;
} else if (num < 0) {
    sign = -1
} else 
    sign = 0;

alert(sign);