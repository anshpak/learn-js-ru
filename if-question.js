'use strict'

if (-1 || 0) alert( 'first' ); // -1, true
if (-1 && 0) alert( 'second' ); // 0, false
if (null || -1 && 1) alert( 'third' ); // 1, true