// DataService.getTodos(console.log) // chiamo la get e dico di stampare. funzione inutile, poco leggibile

DataService.getTodos()
    .then(data => ToDoList.fromObjArray('listaA', data)) //mando l'ultimo then a chi sa cosa farne
    .then(toDoList => displayToDos(toDoList)); 

// function transformData(data){

//     const newToDoList = new ToDoList(`listabase`);
//     for (let i = 0; i < data.length; i++) {
//         const todoObj = data[i];
//         const newTodo = new ToDo(todoObj.title, todoObj.creationDate, todoObj.isCompleted, todoObj.id);
//         newToDoList.addToDo(newTodo);
//     }
//     console.log(newToDoList);
// }

function displayToDos(toDoList){
    const todoListTitle = document.getElementById('list-name');
    const todoListUl = document.getElementById('todo-list');

    const titleNode = document.createTextNode(toDoList.title);
    todoListTitle.appendChild(titleNode);
    todoListUl.innerHTML = '';

    for (let i = 0; i < toDoList.toDoArray.length; i++) {
        const todo = toDoList.toDoArray[i];
        const newLi = document.createElement('li');
        newLi.classList.add("todo-li")
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('todo-title');

        // HOMEWORK Start
        const newBtn = document.createElement('button');
        newBtn.classList.add("todo-btn")
        // HOMEWORK END

        const dataSpan = document.createElement('span');
        dataSpan.classList.add('todo-date');

        const titleNode = document.createTextNode(todo.title);
        const dateNode = document.createTextNode(todo.creationDate);

        // HOMEWORK Start
        const buttonNode = document.createTextNode(`Remove`);
        // HOMEWORK END

        titleSpan.appendChild(titleNode);
        dataSpan.appendChild(dateNode);

        // HOMEWORK Start
        newBtn.appendChild(buttonNode);
        // HOMEWORK End
        
        newLi.appendChild(titleSpan);

        todoListUl.appendChild(newLi);
        newLi.append(dataSpan)
        // HOMEWORK Start
        newLi.appendChild(newBtn);
        // HOMEWORK End
    }
}

function addToDoToList(todo){
    const newToDoElement = document.getElementById(`newTodo-title`);
    const toDoTitle = newToDoElement.value;

    if (toDoTitle !== '') {
        const newToDo = new ToDo(title);
        ToDoList.addToDo(newToDoElement);
        displayToDos(toDoList);
        newToDoElement.value = ``;
    }
    
}