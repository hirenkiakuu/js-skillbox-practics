function filter(whiteList, blackList) {
    for (mail of blackList) {
        if (whiteList.includes(mail))  {
            whiteList.splice(whiteList.indexOf(mail), 1);
        }
    }
    return whiteList;
}


let whiteList = ['email1@gmail.ru', 'mymail@yandex.ru', 'normalmail@gmail.com', 'spammail@vk.ru', 'anotheremail@mail.ru'];
let blackList = ['email1@gmail.ru', 'spammail@vk.ru'];

console.log(filter(whiteList, blackList));

// через стрелочную:
// let filter = (whiteList, blackList) => whiteList.filter(item => !blackList.includes(item));
// console.log(filter(whiteList, blackList));