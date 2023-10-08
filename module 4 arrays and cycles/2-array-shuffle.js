let count = 10;
let arr = [];

for (let i = 0; i < count; ++i) {
    arr.push(i + 1);
}

console.log('первоначальный массив:\n', arr);

for (let i = 0; i < count; ++i) {  
    let j = Math.floor(Math.random() * count);

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log('перемешанный массив:\n', arr);