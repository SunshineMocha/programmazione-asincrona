class ToDoList{
    constructor(title, toDoArray = []){
        this.title = title;
        this.toDoArray = toDoArray;
    }

    addToDo(todo){
        this.toDoArray.push(todo);
    }

    removeTodo(todo){
        const index = this.toDoArray.indexOf(ToDo);
        if (index >= 0) {
            this.title.splice(index,1);
        }
        displayToDos(ToDoList)
    }

    sortByTitle(){

    }

    sortByCreationDate(){

    }

    completeTodo(todo){

    }

    static fromObjArray(title, objectArray) {
        const newToDoList = new ToDoList(`My ToDo list`);
        for (let i = 0; i < objectArray.length; i++) {
            const todoObj = objectArray[i];
            const newTodo = ToDo.fromToDoObj(todoObj);
            newToDoList.addToDo(newTodo);
        }
        return newToDoList;
    }
}