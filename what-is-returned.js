'use strict';

null || 2 || undefined; // returns 2

alert(1) || 2 || alert(3); // firstly displays "1", then returns 2, all because alert returns nothing or undefined

1 && null && 2; // returns null

alert(1) && alert(2); // displays "1" and returns undefined

alert( null || 2 && 3 || 4 ); // returns 3