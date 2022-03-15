'use strict';

const age = 11;

/* 
if (age <= 14 || age >= 90) {
    alert('Your age is higher than 90 or less than 14.');
} 
*/

// or just take code from is-in-range and rewrite it with ! operator

if (!(age >= 14 && age <= 90)) {
    alert('Your age is higher than 90 or less than 14.');
}