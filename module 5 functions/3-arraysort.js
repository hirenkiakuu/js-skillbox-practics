// function arrSort(arr) {

//     for (let i = 0; i < arr.length; ++i) {
//         for (let j = i + 1; j < arr.length; ++j) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//             }
//         }
//     }

//     return arr;
// }

arr = [10, 4, 5, 7, 9, 3, 6, 1, 2, 8];

console.log(arr.sort((a, b) => a - b));