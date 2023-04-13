// DataService.getTodos(console.log)

DataService.getTodos()
    .then(data => {
    //callback1
    console.log('dati che arrivano dal server', data);
    return TodoList.fromObjectArray('lista-figa', data);
})
    .then(todoList =>{
    //callback2
    console.log(`todolist creata nel then precedente`, todoList)
    addButtonsListeners(todoList);
    displayTodos(todoList)
});

// function transformData(data){

//     const newToDoList = new ToDoList(`listabase`);
//     for (let i = 0; i < data.length; i++) {
//         const todoObj = data[i];
//         const newTodo = new ToDo(todoObj.title, todoObj.creationDate, todoObj.isCompleted, todoObj.id);
//         newToDoList.addToDo(newTodo);
//     }
//     console.log(newToDoList);
// }

function displayTodos(todoList){
    const todoListTitle = document.getElementById('list-name');
    const todoListUl = document.getElementById('todo-list');


    const titleNode = document.createTextNode(todoList.title);
    todoListTitle.innerHTML = '';
    todoListTitle.appendChild(titleNode);
    
    todoListUl.innerHTML = '';

    for (let i = 0; i < todoList.todoArray.length; i++) {
        const todo = todoList.todoArray[i];
        const newLi = document.createElement('li');
        newLi.classList.add('todo-li');

        const titleSpan= document.createElement('span');
        titleSpan.classList.add('todo-title');

        const dateSpan = document.createElement('span');
        dateSpan.classList.add('todo-date');

        const titleNode = document.createTextNode(todo.title);
        const dateNode = document.createTextNode(todo.creationDate);

        titleSpan.appendChild(titleNode);
        dateSpan.appendChild(dateNode);
        
        newLi.appendChild(titleSpan);
        newLi.append(dateSpan);

        todoListUl.appendChild(newLi);

    }
}

function orderByTitle(todoList){
    todoList.sortByTitle();
    displayTodos(todoList);
}

function orderByDate(todoList){
    todoList.sortByCreationDate();
    displayTodos(todoList);
}

function addButtonsListeners(todoList){
    const todoOrderTitleBtn = document.getElementById('order-title-btn');
    todoOrderTitleBtn.addEventListener('click', (event) => orderByTitle(todoList))

    const todoOrderDateBtn = document.getElementById('order-date-btn');
    todoOrderDateBtn.addEventListener('click', (event) => orderByDate(todoList))
}