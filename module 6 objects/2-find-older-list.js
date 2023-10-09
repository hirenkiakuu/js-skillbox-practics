function findMaxAge(users) {
    let maxAge = 0;
    for (user of users) {
        if (user.age > maxAge) {
            maxAge = user.age;
        }
    }

    return maxAge;
}

let allUsers = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 40}
   ];

console.log(allUsers.find(user => user.age == findMaxAge(allUsers)).name);