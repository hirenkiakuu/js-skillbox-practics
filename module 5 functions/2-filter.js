let whiteList = ['email1@gmail.ru', 'mymail@yandex.ru', 'normalmail@gmail.com', 'spammail@vk.ru', 'anotheremail@mail.ru'];
let blackList = ['email1@gmail.ru', 'spammail@vk.ru'];

let resultList = whiteList.filter(email => !blackList.includes(email));

console.log(resultList);
