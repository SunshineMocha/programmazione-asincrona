let superList = new TodoList('lista super figa');

displayTodos();

DataService.getTodos().then(data =>{
    fillTodoArrayFromServer(data);
    displayTodos();
})

function fillTodoArrayFromServer(data){
    for (let i = 0; i < data.length; i++) {
        const object = data[i];
        const todo = new Todo(object.title, object.creationDate, object.isCompleted, object.id)  
        superList.addTodo(todo);      
    }
}

// function displayTodos(){
//     const todoListTitle = document.getElementById('list-name');
//     const todoListUl = document.getElementById('todo-list');


//     const titleNode = document.createTextNode(superList.title);
//     todoListTitle.innerHTML = '';
//     todoListTitle.appendChild(titleNode);
    
//     todoListUl.innerHTML = '';

//     for (let i = 0; i < superList.todoArray.length; i++) {
//         const todo = superList.todoArray[i];
//         const newLi = document.createElement('li');
//         newLi.classList.add('todo-li');

//         // if(todo.isCompleted){
//         //     newLi.style.borderColor = `green`;
//         //     newLi.style.borderWidth = `8px`;
//         // }

//         if (todo.isCompleted) {
//             newLi.classList.add(`completed`);
//         }
        
//         const titleSpan= document.createElement('span');
//         titleSpan.classList.add('todo-title');

//         const dateSpan = document.createElement('span');
//         dateSpan.classList.add('todo-date');

//         const titleNode = document.createTextNode(todo.title);
//         const dateNode = document.createTextNode(todo.creationDate);

//         titleSpan.appendChild(titleNode);
//         dateSpan.appendChild(dateNode);
        
//         newLi.appendChild(titleSpan);
//         newLi.append(dateSpan);

//         const completeBtn = document.createElement('button');
//         completeBtn.addEventListener('click',(event)=> {
//             superList.completeTodo(todo);
//             displayTodos();
//         });

//         const removeBtn = document.createElement('button');
//         removeBtn.addEventListener('click',(event)=> {
//             superList.removeTodo(todo);
//             displayTodos();
//         });

//         const titleComplete = document.createTextNode('Complete');
//         const titleRemove = document.createTextNode('Remove');
        
//         completeBtn.appendChild(titleComplete);
//         removeBtn.appendChild(titleRemove);
        
//         newLi.appendChild(completeBtn);
//         newLi.appendChild(removeBtn);
        

//         todoListUl.appendChild(newLi);

//     }
// }

function orderByTitle(){
    superList.sortByTitle();
    displayTodos();
}

function orderByCreationDate(){
    superList.sortByCreationDate();
    displayTodos();
}



/*

Compiti:

- digerire entrambi i modi 

- metodo non piu grosso di schermata, emplementare tuti i modi: displayTodos2 displaystodos3
    prima versione usare il template literal (html in stringa)
    seconda versione spezzare funzione in funzioni piu piccole

*/


//temp compito 1
// function displayTodos(){
//     const todoList = document.getElementById('todo-list');
//     todoList.innerHTML = '';
//     //todoListUl.innerHTML = '';

//     for (let i = 0; i < superList.todoArray.length; i++) {
//         const todo = superList.todoArray[i];
//         todoList.innerHTML+= `<li class="todo-Object">
//         ${todo.title} <br> ${todo.creationDate} <br>
//         <button class="complete-btn" id="complete-btn${i}" onclick="superList.completeTodo()">Completa</button> <br>
//         <button class="remove-btn" id="remove-btn${i}">Rimuovi</button>
//         </li>`
//     }
//     //2ndo for per il passaggio valori
//     for (let i = 0; i < superList.todoArray.length; i++) {
//         const todo = superList.todoArray[i];
//         document.getElementById("remove-btn" + i).addEventListener('click', (todo) => superList.removeTodo(todo));
//     }
// }

function displayTodos(){
    const todoListTitle = document.getElementById('list-name');
    const todoListUl = document.getElementById('todo-list');
    todoListTitle.innerHTML = '';
    todoListUl.innerHTML = '';

    for (let i = 0; i < superList.todoArray.length; i++) {
        const todo = superList.todoArray[i];
        
        todoListTitle.innerHTML+= `<li class="todo-Object">
        ${todo.title} <br> ${todo.creationDate} <br>
        
        <button class="complete-btn" id="complete-btn" onclick="superList.completeTodo()">Completa</button> <br>
        <button class="remove-btn" id="remove-btn${i}">Rimuovi</button>
        </li>`
        
    }
    for (let i = 0; i < superList.todoArray.length; i++) {
        const todo = superList.todoArray[i];
        document.getElementById("remove-btn" + i).addEventListener('click', (todo) => superList.removeTodo(superList.todoArray[i]));
    }
}