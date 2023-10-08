let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8, 9];

let minLength = Math.min(arr1.length, arr2.length);

for (var i = 0; i < minLength; i++) {
    if (arr1.length >= arr2.length) {
        arr1.push(arr2[i]);
    }
    else {
        arr2.push(arr1[i]);
    }
}

console.log(arr1.length > arr2.length ? arr1 : arr2);
