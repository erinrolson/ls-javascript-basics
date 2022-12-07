false || (true && false); // false -> returns 2nd false
true || (1 + 2); // true -> short-circuits and does not evaluate right side (1 + 2)
(1 + 2) || true; // true -> short-circuits and returns 3
true && (1 + 2); // true -> returns 3, the last evaluated item
false && (1 + 2); // false -> short-circuits and only evaluates left side
(1 + 2) && true; // true -> returns true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; //
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) 
(!true || (false) || (true)) || false
(false || false || true) || false
true || false // returns true