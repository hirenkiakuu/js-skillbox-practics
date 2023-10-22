// 1) Добавить фильтры
// 2) Дописать сортировку
// 3) Сделать валидацию

document.addEventListener('DOMContentLoaded', () => {
    const studentsList = [
        
    ];
    
    // Различные сортировки
    function sortName(studentsArray) {
        
        const sortedStudentsArray = studentsArray.slice().sort((student, prevStudent) => {
            const studentFullName = (student.surname + student.name + student.middlename).toLowerCase();
            const prevStudentFullName = (prevStudent.surname + prevStudent.name + prevStudent.middlename).toLowerCase();
    
            if (studentFullName > prevStudentFullName) {
                return 1;
            }
            if (studentFullName < prevStudentFullName) {
                return -1;
            }
            return 0;
        }); // Возможно, стоит поменять компаратор тут
    
    
        return sortedStudentsArray;
    }

    // function sortFaculty(studentsArray) {

    // }

    // function sortBirthDate() {

    // }

    // function sortStudyYears() {

    // }
    

    // Создание одной строчки со студентом
    
    function createStudentRow(studentObj) { //студент с полями 
        const studentRow = document.createElement('tr');
        
        const fullNameTd = document.createElement('td');
        const facultyTd = document.createElement('td');
        const dateOfBirthTd = document.createElement('td');
        const yearsOfStudyTd = document.createElement('td');
    
        fullNameTd.textContent = `${studentObj.surname} ${studentObj.name} ${studentObj.middlename}`;
        facultyTd.textContent = studentObj.faculty;
        dateOfBirthTd.textContent = studentObj.dateOfBirth;
        yearsOfStudyTd.textContent = `${studentObj.startOfStudying} - ${Number(studentObj.startOfStudying) + 4}`;
        
        // Доработать вычисление возраста и флажок на окончание учебы

        studentRow.append(
            fullNameTd, 
            facultyTd,
            dateOfBirthTd,
            yearsOfStudyTd
        );
    
        console.log('11111');
        // let a = prompt();
        return studentRow; //tr
    }
    

    // Отрисовка внутреннего содержания таблицы
    function renderStudentsTable(studentsArray) {
        const tableBody = document.querySelector('tbody');
        tableBody.innerHTML = '';
    
        studentsArray.forEach(student => {
            const studentRow = createStudentRow(student);
            tableBody.append(studentRow);
        });
    }

    // Пользовательский ввод студента ---> добавление студента в массив // нужна валидация
    function getUserInput(studentsArray) {
        
        const surNameInput = document.getElementById('surNameInput');
        const nameInput = document.getElementById('nameInput');
        const middleNameInput = document.getElementById('middleNameInput');
        const birthDateInput = document.getElementById('birthDateInput');
        const facultyInput = document.getElementById('facultyInput');
        const studyStartInput = document.getElementById('studyStartInput');

    
        const confirmButton = document.querySelector('.btn');
        confirmButton.addEventListener('click', () => {
            const studentObj = {
                surname: surNameInput.value, 
                name: nameInput.value,
                middlename: middleNameInput.value,
                faculty: facultyInput.value,
                dateOfBirth: birthDateInput.value,
                startOfStudying: studyStartInput.value,
            };

            studentsList.push(studentObj);
            renderStudentsTable(studentsList);
            console.log(studentsList);
        });


        console.log(studentsList);
        
    
    }
    
    // renderStudentsTable(studentsList.slice());

    function start(studentsArray) {
        getUserInput(studentsArray);
    }

    start(studentsList)
    
    // const nameSortButton = document.getElementById('name');
    // nameSortButton.addEventListener('click', () => {
    //     const newStudentsList = sortName(studentsList.slice());
    //     renderStudentsTable(newStudentsList);
    // });
    // Нужно будет разобраться со слайсами 

    
});


// (() => {
    
    
// })();







