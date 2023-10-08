let count = 70;
let n = 100;
let m = -5;
let arr = [];

let range = Math.abs(n - m);
let min = Math.min(n, m);

for (let i = 0; i < count; ++i) {
    arr.push(Math.round(Math.random() * range) + min);
}

console.log(arr);
console.log(arr.length);