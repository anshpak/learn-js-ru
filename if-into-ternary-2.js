'use strict'

let message;
const login = prompt('Enter your login:','');

/*
if (login == 'Employee') {
  message = 'Hey';
} else if (login == 'Boss') {
  message = 'Hello';
} else if (login == '') {
  message = 'No login here';
} else {
  message = '';
}
*/

message = (login == 'Employee') ? 'Hey' : 
    (login == 'Boss') ? 'Hello' :
    (login == '') ? 'No login here': '';
alert(message);