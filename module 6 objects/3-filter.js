function filter(objList, key, value) {
    let resultArr = [];

    for (let obj of objList) {
        if (obj[key] === value) {
            resultArr.push(obj);
        }
    }

    return resultArr;
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' },
    { name: 'Пётр', surname: 'Чайковский' }
   ];

// let result = filter(objects, 'name', 'Иван');

console.log(filter(objects, 'surname', 'Васильев'));
   