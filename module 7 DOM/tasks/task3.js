document.addEventListener('DOMContentLoaded', function() {

    function createStudentsList(objectList) {
        let ul = document.createElement('ul');
        document.body.append(ul);

        for (object of objectList) {
            let li = document.createElement('li');
            ul.append(li);

            let h1 = document.createElement('h1');
            h1.textContent = object.name;

            let span = document.createElement('span');
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

    createStudentsList(allStudents);
});