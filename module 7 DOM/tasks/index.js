
document.addEventListener('DOMContentLoaded', function() {
    
    function createStudentCard(name, age) {
        document.body.append(document.createElement('div'));
        document.body.children[0].appendChild(document.createElement('h1')).textContent = name;
        document.body.children[0].appendChild(document.createElement('span')).textContent = 'Возраст: ' + age + ' лет';
    }   

    createStudentCard('Вася', 20);
});