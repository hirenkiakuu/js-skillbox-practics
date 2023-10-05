let a = 13.890123; 
let b = 2.891564;

let n = 3;

let aNormalized = Math.floor(
    a % 1 * Math.pow(10, n)
);

let bNormalized = Math.floor(
    b % 1 * Math.pow(10, n)
);

console.log(aNormalized, bNormalized);

console.log(`${aNormalized} > ${bNormalized}: ${aNormalized > bNormalized}`);
console.log(`${aNormalized} < ${bNormalized}: ${aNormalized < bNormalized}`);
console.log(`${aNormalized} ≥ ${bNormalized}: ${aNormalized >= bNormalized}`);
console.log(`${aNormalized} ≤ ${bNormalized}: ${aNormalized <= bNormalized}`);
console.log(`${aNormalized} === ${bNormalized}: ${aNormalized === bNormalized}`);
console.log(`${aNormalized} ≠ ${bNormalized}: ${aNormalized !== bNormalized}`);