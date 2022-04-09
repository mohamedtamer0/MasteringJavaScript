/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

console.log((100).toString());
console.log(100.10.toString());

console.log(100.554555.toFixed(2));

console.log(Number("100 Tamer"));
console.log(+"100 Tamer");
console.log(parseInt("100 Tamer"));
console.log(parseInt("Osama 100 Tamer"));
console.log(parseInt("100.500 Tamer"));
console.log(parseFloat("100.500 Tamer"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Tamer" / 20));