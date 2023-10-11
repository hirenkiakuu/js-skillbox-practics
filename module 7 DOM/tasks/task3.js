document.addEventListener('DOMContentLoaded', function() {

    function createStudentsList(objectList) {
        const ul = document.createElement('ul');
        document.body.append(ul);

        for (object of objectList) {
            const li = document.createElement('li');
            ul.append(li);

            const h1 = document.createElement('h1');
            h1.textContent = object.name;

            const span = document.createElement('span');
            span.textContent = `Возраст: ${object.age} лет`;

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