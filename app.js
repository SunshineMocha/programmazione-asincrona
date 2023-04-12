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

        const dataSpan = document.createElement('span');
        dataSpan.classList.add('todo-date');

        const titleNode = document.createTextNode(todo.title);
        const dateNode = document.createTextNode(todo.creationDate);

        titleSpan.appendChild(titleNode);
        dataSpan.appendChild(dateNode);
        
        newLi.appendChild(titleSpan);
        todoListUl.appendChild(newLi);
        newLi.append(dataSpan)
    }

}