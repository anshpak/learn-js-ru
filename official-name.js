"use strict";

let name = prompt('What is official JS name?', '');
if(name === "ECMAScript") {
    alert('You\'re right!');
} else 
    {
        alert('Dont you know? It\'s ECMAScript');
    }

/* warning: it's better to not use ? in such situations because it's dedicated not for constructions of instructions
    let name = prompt('What is official JS name?', '');
    (name === "ECMAScript") ? alert('You\'re right!') : alert('Dont you know? It\'s ECMAScript');
*/