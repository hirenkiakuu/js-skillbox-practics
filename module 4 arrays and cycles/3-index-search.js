let count = 10;
n = 6;
let arr = [];
let index = -1;

for (let i = 0; i < count; ++i) {
    arr.push(i + 1);
}

for (let i = 0; i < count; ++i) {  
    let j = Math.round(Math.random() * (count - 1));

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

for (let i = 0; i < count; ++i) {
    if (arr[i] == n) {
        index = i;
        break;
    }
}

console.log(arr);
console.log('Искомый элемент: ', n);

let msg = (index != -1) ? `Индекс элемента: ${index}` : 'Элемент не найден';

console.log(msg);
