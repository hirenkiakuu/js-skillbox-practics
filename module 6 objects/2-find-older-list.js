let allUsers = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 40}
   ];

console.log(allUsers.sort((user1, user2) => user2.age - user1.age)[0].name);