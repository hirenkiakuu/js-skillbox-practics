let n = 0 
let m = 100

let range = Math.abs(n - m);

let min = Math.min(n, m);
let randNum1 = Math.round(Math.random() * range) + min;
let randNum2 = Math.round(Math.random() * range) + min;

console.log(randNum1, randNum2);

console.log(`${randNum1} > ${randNum2}: ${randNum1 > randNum2}`);
console.log(`${randNum1} < ${randNum2}: ${randNum1 < randNum2}`);
console.log(`${randNum1} ≥ ${randNum2}: ${randNum1 >= randNum2}`);
console.log(`${randNum1} ≤ ${randNum2}: ${randNum1 <= randNum2}`);
console.log(`${randNum1} === ${randNum2}: ${randNum1 === randNum2}`);
console.log(`${randNum1} ≠ ${randNum2}: ${randNum1 !== randNum2}`);



