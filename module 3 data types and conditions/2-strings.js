let userName = 'TonY';
let userSurname = 'STarK';

userNameModified = userName.substring(0, 1).toUpperCase() + userName.substring(1).toLowerCase();
userSurnameModified = userSurname.substring(0, 1).toUpperCase() + userSurname.substring(1).toLowerCase();

console.log('Фамилия и имя: ' + userNameModified + ' ' + userSurnameModified);

nameMsg = (userName === userNameModified) ? 'Имя осталось без изменений' : 'Имя было преобразовано';
surnameMsg = (userSurname === userSurnameModified) ? 'Фамилия осталась без изменений' : 'Фамилия была преобразована';

console.log(nameMsg);
console.log(surnameMsg);
