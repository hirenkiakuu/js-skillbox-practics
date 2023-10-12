(function() {
    
    function setData(key, data) {
        let jsonData = JSON.stringify(data);
        localStorage.setItem(key, jsonData);
    }

    function getData(key) {
        return localStorage.getItem(key);
    }

    function createAppTitle(title) {
        const appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    function createTodoItemForm() {
        const form = document.createElement('form');
        const input = document.createElement('input');
        const buttonWrapper = document.createElement('div');
        const button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название новой задачи';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';
        button.disabled = true;

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form, 
            input, 
            button
        };
    }

    function createTodoList() {
        const list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(obj) {
        const item = document.createElement('li');
        const buttonGroup = document.createElement('div');
        const doneButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        if (obj.done === true) {
            item.classList.add('list-group-item-success');
        }

        item.textContent = obj.name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            doneButton,
            deleteButton
        };
    }

    function createTodoApp(container, title = 'Список дел', listName = 'my todo') {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
    
        let dealList = getData(listName);
        dealList = dealList ? JSON.parse(dealList) : [];

        if (dealList.length > 0) {
            dealList.forEach(function(deal) {
                let dealItem = createTodoItem(deal);
                dealItem.item.id = deal.id;
                todoList.append(dealItem.item);
                console.log(dealItem.item.id === deal.id);
            });
        }

        container.append(todoAppTitle,
            todoItemForm.form,
            todoList
            );
  
        todoItemForm.input.addEventListener('input', function(e) {
            let inputValue = todoItemForm.input.value;
            if (inputValue.trim() != '') {
                todoItemForm.button.disabled = false;
            }
        }); 

        todoItemForm.form.addEventListener('submit', function(e) {
            e.preventDefault();
            todoItemForm.button.disabled = true;
            
            let deal = {
                id: Math.round(Math.random() * 10000).toString(),
                name: todoItemForm.input.value,
                done: false
            };

            dealList.push(deal);

            setData(listName, dealList);

            if (!todoItemForm.input.value) {
                return;
            }

            let todoItem = createTodoItem(deal);

            todoItem.item.id = deal.id;
            console.log(todoItem.item.id);

        
            todoItem.doneButton.addEventListener('click', function() {
                todoItem.item.classList.toggle('list-group-item-success');

  
                for (deal of dealList) {
                    if (deal.id === todoItem.item.id) {
                        deal.done = !deal.done;
                        console.log(deal.id === todoItem.item.id);
                    }
                }

                console.log(dealList);
                setData(listName, dealList);
            });

            todoItem.deleteButton.addEventListener('click', function() {
                
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove();

                    let index = 0;
                    for (deal of dealList) {
                        if (deal.id === todoItem.item.id) {
                            index = dealList.indexOf(deal);
                            console.log(deal.id === todoItem.item.id);
                        }
                    }

                    dealList.splice(index, 1);
                    console.log(dealList);
                    setData(listName, dealList);
                }
            });

            todoList.append(todoItem.item);

            todoItemForm.input.value = '';
        });
    }

    window.createTodoApp = createTodoApp;
})();