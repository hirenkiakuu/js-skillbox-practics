let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' },
    { name: 'Пётр', surname: 'Чайковский' }
   ];

let targetKey = 'name';
let targetValue = 'Пётр';

console.log(objects.filter( obj => obj[targetKey] === targetValue));
   