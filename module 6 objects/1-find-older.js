let getOlderUser = (user1, user2) => 
    user1.age > user2.age ? user1.name : user2.name;

let user1 = {
    name: 'Игорь',
    age: 17
};

let user2 = {
    name: 'Оля',
    age: 21   
};

console.log(getOlderUser(user1, user2));

