document.addEventListener('DOMContentLoaded', function() {
    const ul = document.createElement('ul');

    function createStudentsList(objectList) {
        document.body.append(ul);

        for (object of objectList) {
            const li = document.createElement('li');
            ul.append(li);

            const h1 = document.createElement('h1');
            h1.textContent = object.name;

            const span = document.createElement('span');
            span.textContent = 'Возраст: ' + object.age + ' лет';

            li.append(h1, span);
        }
    }   

    let allStudents = [
        {name: 'Валя', age: 11},
        {name: 'Таня',age: 24},
        {name: 'Рома',age: 21},
        {name: 'Надя', age: 34},
        {name: 'Антон', age: 7}
       ];

    const buttonShow = document.querySelector('.button-show');
    const buttonHide = document.querySelector('.button-hide');
    buttonShow.addEventListener('click', () => createStudentsList(allStudents));
    buttonHide.addEventListener('click', function() {
        for (child of Array.from(ul.children)) {
            child.remove();
        }
    });
});