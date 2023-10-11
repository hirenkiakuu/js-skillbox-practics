
document.addEventListener('DOMContentLoaded', function() {
    
    function createStudentCard(name, age) {
        const div = document.createElement('div');

        const h1 = document.createElement('h1');
        h1.textContent = name;

        const span = document.createElement('span');
        span.textContent = `Возраст: ${age} лет`;

        div.append(h1, span);
        document.body.append(div);
    }   

    createStudentCard('Вася', 20);
});