// 1) Добавить фильтры - добавлены, нужно проверить
// 2) Дописать сортировку - проверить
// 3) Сделать валидацию - сделано
// 4) Вывести ошибки пользователя над кнопкой - сделано

document.addEventListener('DOMContentLoaded', () => {
    const studentsList = [];

    // вычисление возраста, курса и форматирование времени
    function getStudentAge(birthDate) {
        const now = new Date();
        
        const age = now.getFullYear() - birthDate.getFullYear();

        if (
            now.getMonth() < birthDate.getMonth() || 
            (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())
        ) {
            return age - 1;
        }
        else {
            return age;
        }
    }
    
    function formatStudentCourse(studyingDate) {
        if (Number(studyingDate) <= 2019) {
            return '(Закончил)';
        }
        return `(${2023 - Number(studyingDate) + 1} курс)`;
    }

    function formatFullName(studentObj) {
        return `${studentObj.surname} ${studentObj.name} ${studentObj.middlename}`;
    }

    function formatYearsOfStudy(studentObj) {
        return `${studentObj.startOfStudying} - ${Number(studentObj.startOfStudying) + 4} ${formatStudentCourse(studentObj.startOfStudying)}`;
    }

    function formatTime(date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;

        const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;

        return formattedDate;
    }

    function sortStudentsArray(studentsArray, key) {
        const sortedStudentsArray = studentsArray.slice().sort((student, prevStudent) => {

            let currentValue = student[key];
            let prevValue = prevStudent[key];

            if (key === 'name') {
                currentValue = (student.surname + student.name + student.middlename).toLowerCase();
                prevValue = (prevStudent.surname + prevStudent.name + prevStudent.middlename).toLowerCase();
            }
    
            if (currentValue > prevValue) {
                return 1;
            }
            if (currentValue < prevValue) {
                return -1;
            }
            return 0;
        }); 
    
        return sortedStudentsArray;
    }

    function filterStudentsArray(studentsArray, inputValue, key) {
        if (key === 'name') {
            return studentsArray.filter(student => 
                (student.surname + ' ' + student.name + ' ' + student.middlename).toLowerCase().includes(inputValue.toLowerCase()));
        }
        else if (key === 'faculty') {
            return studentsArray.filter(student => (student[key]).includes(inputValue));
        }
        else if (key === 'start') {
            return studentsArray.filter(student => student.startOfStudying.includes(inputValue));
        }
        else {
            return studentsArray.filter(student => 
                String(Number(student.startOfStudying) + 4).includes(inputValue));
        }
    }

    // Создание одной строчки со студентом
    
    function createStudentRow(studentObj) { 
        const studentRow = document.createElement('tr');
        
        const fullNameTd = document.createElement('td');
        const facultyTd = document.createElement('td');
        const dateOfBirthTd = document.createElement('td');
        const yearsOfStudyTd = document.createElement('td');
    
        fullNameTd.textContent = formatFullName(studentObj);
        facultyTd.textContent = studentObj.faculty;
        dateOfBirthTd.textContent = `${formatTime(studentObj.dateOfBirth)} (${getStudentAge(studentObj.dateOfBirth)} лет)`;
        yearsOfStudyTd.textContent = formatYearsOfStudy(studentObj);

        studentRow.append(
            fullNameTd, 
            facultyTd,
            dateOfBirthTd,
            yearsOfStudyTd
        );
        
        return studentRow; //tr
    }
    
    function displayError(message) {
        const label = document.querySelector('.alert-label');
        label.textContent = message;
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

    // Пользовательский ввод студента ---> добавление студента в массив
    function getUserInput(studentsArray) {
        const inputs = [
            document.getElementById('surNameInput'),
            document.getElementById('nameInput'),
            document.getElementById('middleNameInput'),
            document.getElementById('birthDateInput'),
            document.getElementById('facultyInput'),
            document.getElementById('studyStartInput')
        ];

        const confirmButton = document.querySelector('.btn');
        
        confirmButton.addEventListener('click', () => {
            const isEmpty = inputs.some(input => input.value.trim() === '');

            if (isEmpty) {
                displayError('Не все поля заполнены');
                return;
            } 
            else {
                if (validateDateOfBirth(new Date(inputs[3].valueAsDate)) && validateStartStudyingYear(inputs[5].value)) {
                    displayError('');

                    const studentObj = {
                        surname: inputs[0].value, 
                        name: inputs[1].value,
                        middlename: inputs[2].value,
                        faculty: inputs[4].value,
                        dateOfBirth: new Date(inputs[3].valueAsDate),
                        startOfStudying: inputs[5].value,
                    };
    
                    studentsArray.push(studentObj);
                    renderStudentsTable(studentsList);
                }
                else {
                    if (validateDateOfBirth(new Date(inputs[3].valueAsDate)) === false) {
                        displayError('Минимальный год рождения - 1900 г.');
                    }
                    else if (validateStartStudyingYear(inputs[5].value) === false) {
                        displayError('Минимальный год начала обучения - 2000 г.');
                    }
                }
            }

            inputs.forEach(input => input.value = '');
        });
    }

    // Валидация даты рождения
    function validateDateOfBirth(inputDate) {
        const minDate = new Date(1900, 0, 1);
        const now = new Date();

        return (minDate <= inputDate) && (inputDate < now);
    }

    // Валидация года начала учебы
    function validateStartStudyingYear(year) {
        return (year >= 2000) && (year <= 2023);
    }

    const filterInputs = [
        document.getElementById('name-filter'),
        document.getElementById('faculty-filter'),
        document.getElementById('studying-start-filter'),
        document.getElementById('studying-end-filter')
    ];

    const sortButtons = [
        document.getElementById('name'),
        document.getElementById('faculty'),
        document.getElementById('birth-date'),
        document.getElementById('study')
    ];

    filterInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            const key = index === 0 ? 'name' : index === 1 ? 'faculty' : index === 2 ? 'start' : 'end'; 
            renderStudentsTable(filterStudentsArray(studentsList, input.value, key));
        });
    });

    sortButtons.forEach((sortButton, index) => {
        sortButton.addEventListener('click', () => {
            const key = index === 0 ? 'name' : index === 1 ? 'faculty' : index === 2 ? 'dateOfBirth' : 'startOfStudying';
            renderStudentsTable(sortStudentsArray(studentsList.slice(), key));
        });
    });
 
    getUserInput(studentsList);
});






