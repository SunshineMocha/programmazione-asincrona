class ToDoList{
    constructor(title, toDoArray = []){
        this.title = title;
        this.toDoArray = toDoArray;
    }

    addToDo(todo){
        this.toDoArray.push(todo);
    }

    removeTodo(todo){

    }

    sortByTitle(){

    }

    sortByCreationDate(){

    }

    completeTodo(todo){

    }

    static fromObjArray(title, objectArray) {
        const newToDoList = new ToDoList(`listabase`);
        for (let i = 0; i < objectArray.length; i++) {
            const todoObj = objectArray[i];
            const newTodo = ToDo.fromToDoObj(todoObj);
            newToDoList.addToDo(newTodo);
        }
        return newToDoList;
    }

}