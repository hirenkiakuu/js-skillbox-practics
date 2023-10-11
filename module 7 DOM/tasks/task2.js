document.addEventListener('DOMContentLoaded', function() {

    function createStudentCard(obj) {
        const div = document.createElement('div');

        const h1 = document.createElement('h1');
        h1.textContent = obj.name;

        const span = document.createElement('span');
        span.textContent = `Возраст: ${obj.age} лет`;

        div.append(h1, span);
        document.body.append(div);
    }   

    let studentObj = {
        name: 'Игорь',
        age: 17
       };

    createStudentCard(studentObj);
});