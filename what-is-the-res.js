"use strict"

"" + 1 + 0; // "10"
typeof("" + 1 + 0); // string


"" - 1 + 0; // -1
typeof("" - 1 + 0); // number


true + false; // 1
typeof(true + false); // number

6 / "3"; // 2
typeof(6 / "3"); // number

"2" * "3"; // 6
typeof("2" * "3"); // number

4 + 5 + "px" // 9px
typeof(4 + 5 + "px"); // string

"$" + 4 + 5 // $45
typeof("$" + 4 + 5); // string

"4" - 2; // 2
typeof("4" - 2); // number

"4px" - 2; // Nan
typeof("4px" - 2); // number

7 / 0; // Infinity
typeof("4px" - 2); // number

"  -9  " + 5; // "  -9  5"
typeof("  -9  " + 5); // string

"  -9  " - 5; // -14
typeof("  -9  " - 5); // number

null + 1; // 1
typeof(null + 1); // number

undefined + 1; // Nan
typeof(undefined + 1); // number

" \t \n" - 2; // -2
typeof(" \t \n" - 2); // number