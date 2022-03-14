'use strict'

let result;
const a = 2;
const b = 100;

/*
if (a + b < 4) {
  result = 'too few';
} else {
  result = 'too much';
}
*/

result = (a + b < 4) ? 'too few' : 'too much';
alert(result);