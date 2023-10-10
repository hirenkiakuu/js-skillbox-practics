document.addEventListener('DOMContentLoaded', function() {

    function createStudentCard(obj) {
        document.body.append(document.createElement('div'));
        document.body.children[0].appendChild(document.createElement('h1')).textContent = obj.name;
        document.body.children[0].appendChild(document.createElement('span')).textContent = 'Возраст: ' + obj.age + ' лет';
    }   

    let studentObj = {
        name: 'Игорь',
        age: 17
       };

    createStudentCard(studentObj);
});