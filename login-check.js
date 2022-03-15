'use strict';

const login = prompt('Enter your login:', '');
let admin;
let password;

if (login === 'admin') {
    password = prompt('Enter the password:', '');
    if (password === 'IAMTHEBOSS') {
        alert('Hello :)');
    } else if (password === null || password === '') {
        alert('Reject password input');
    } else {
        alert('Wrong password :(');
    }
} else if (login === null || login === '') {
    alert('Rejected');
} else {
    alert('Unknown');
}