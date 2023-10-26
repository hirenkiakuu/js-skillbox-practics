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
    
    function getStudentCourseString(studyingDate) {
        if (Number(studyingDate) <= 2019) {
            return '(Закончил)';
        }
        else return `(${2023 - Number(studyingDate) + 1} курс)`;
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

    // Различные сортировки
    // лучше сделать function sortByKey() {}
   
    function sortStudentsArray(studentsArray, key) {
        const sortedStudentsArray = studentsArray.slice().sort((student, prevStudent) => {

            let currentValue = student[key];
            let prevValue = prevStudent[key];

            if (key === 'name') {
                currentValue = (student.surname + student.name + student.middlename).toLowerCase();
                prevValue = (prevStudent.surname + prevStudent.name + prevStudent.middlename).toLowerCase();
            }

            console.log('11111');

            // const studentFullName = (student.surname + student.name + student.middlename).toLowerCase();
            // const prevStudentFullName = (prevStudent.surname + prevStudent.name + prevStudent.middlename).toLowerCase();
    
            if (currentValue > prevValue) {
                return 1;
            }
            if (currentValue < prevValue) {
                return -1;
            }
            return 0;
        }); // Возможно, стоит поменять компаратор тут
    
    
        return sortedStudentsArray;
        
    }

    function filterStudentsArray(studentsArray, inputValue, key) {
        if (key === 'name') {
            return studentsArray.filter((student) => {
                return (student.surname + student.name + student.middlename).includes(inputValue);
            });
        }
        else if (key === 'faculty') {
            return studentsArray.filter((student) => {
                return (student[key]).includes(inputValue);
            });
        }
        else if (key === 'start') {
            return studentsArray.filter((student) => {
                return (student.startOfStudying).includes(inputValue);
            });
        }
        else {
            return studentsArray.filter((student) => {
                return String(Number(student.startOfStudying) + 4).includes(inputValue);
            });
        }
    }

    // Создание одной строчки со студентом
    
    function createStudentRow(studentObj) { 
        const studentRow = document.createElement('tr');
        
        const fullNameTd = document.createElement('td');
        const facultyTd = document.createElement('td');
        const dateOfBirthTd = document.createElement('td');
        const yearsOfStudyTd = document.createElement('td');
    
        fullNameTd.textContent = `${studentObj.surname} ${studentObj.name} ${studentObj.middlename}`;
        facultyTd.textContent = studentObj.faculty;
        dateOfBirthTd.textContent = formatTime(studentObj.dateOfBirth);
        yearsOfStudyTd.textContent = `${studentObj.startOfStudying} - ${Number(studentObj.startOfStudying) + 4} ${getStudentCourseString(studentObj.startOfStudying)}`;

        studentRow.append(
            fullNameTd, 
            facultyTd,
            dateOfBirthTd,
            yearsOfStudyTd
        );
        
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
        const label = document.querySelector('.alert-label');

        confirmButton.addEventListener('click', () => {
            if (
                surNameInput.value.trim() === '' ||
                nameInput.value.trim() === '' ||
                middleNameInput.value.trim() === '' || 
                birthDateInput.value.trim() === '' ||
                facultyInput.value.trim() === '' ||
                studyStartInput.value.trim() === ''
            ) {
                label.textContent = 'Не все поля заполнены';
                return;
            } else {
                if (validateDateOfBirth(new Date(birthDateInput.valueAsDate)) && validateStartStudyingYear(studyStartInput.value)) {
                    label.textContent = '';
                    const studentObj = {
                        surname: surNameInput.value, 
                        name: nameInput.value,
                        middlename: middleNameInput.value,
                        faculty: facultyInput.value,
                        dateOfBirth: new Date(birthDateInput.valueAsDate),
                        startOfStudying: studyStartInput.value,
                    };
    
                    studentsList.push(studentObj);
                    renderStudentsTable(studentsList);
                }
                else {
                    if (validateDateOfBirth(new Date(birthDateInput.valueAsDate)) === false) {
                        label.textContent = 'Минимальный год рождения - 1900 г.';
                    }
                    else if (validateStartStudyingYear(studyStartInput.value) === false) {
                        label.textContent = 'Минимальный год начала обучения - 2000 г.';
                    }
                }
            }

            
            
            surNameInput.value = '';
            nameInput.value = '';
            middleNameInput.value = '';
            facultyInput.value = '';
            birthDateInput.value = '';
            studyStartInput.value = '';
            
            console.log(studentsList);
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

    // renderStudentsTable(studentsList.slice());

    getUserInput(studentsList);

    // eventlisteners на filter input'ах

    // ФИО
    const nameFilterInput = document.getElementById('name-filter');
    nameFilterInput.addEventListener('input', () => {
        renderStudentsTable(filterStudentsArray(studentsList, nameFilterInput.value, 'name'));
    });

    // Факультет
    const facultyFilterInput = document.getElementById('faculty-filter');
    facultyFilterInput.addEventListener('input', () => {
        renderStudentsTable(filterStudentsArray(studentsList, facultyFilterInput.value, 'faculty'));
    });

    // Дата обучения
    const studyingStartFilterInput = document.getElementById('studying-start-filter');
    studyingStartFilterInput.addEventListener('input', () => {
        renderStudentsTable(filterStudentsArray(studentsList, studyingStartFilterInput.value, 'start'));
    });

    const studyingEndFilterInput = document.getElementById('studying-end-filter');
    studyingEndFilterInput.addEventListener('input', () => {
        renderStudentsTable(filterStudentsArray(studentsList, studyingEndFilterInput.value, 'end'));
    });
    

    // Кнопки на head ячейках
    const nameSortButton = document.getElementById('name');
    nameSortButton.addEventListener('click', () => {
        renderStudentsTable(sortStudentsArray(studentsList.slice(), 'name'));
    });

    const facultySortButton = document.getElementById('faculty');
    facultySortButton.addEventListener('click', () => {
        renderStudentsTable(sortStudentsArray(studentsList.slice(), 'faculty'));
    });

    const birthDateSortButton = document.getElementById('birth-date');
    birthDateSortButton.addEventListener('click', () => {
        renderStudentsTable(sortStudentsArray(studentsList.slice(), 'dateOfBirth'));
    });

    const studyingDateSortButton = document.getElementById('study');
    studyingDateSortButton.addEventListener('click', () => {
        renderStudentsTable(sortStudentsArray(studentsList.slice(), 'startOfStudying'));
    });
    // Нужно будет разобраться со слайсами 

    
});


// (() => {
    
    
// })();







