class Todo {
    constructor(title, creationDate, isCompleted = false, id) { //id all'ultimo, noi non diamo l'id, lo da il server, va all'ultimo che se non do niente lo ignora
        
        this.title = title;
        this._creationDate = creationDate;
        this.isCompleted = isCompleted;
        if (id) {
            this.id = id;
        }
    }

    get creationDate(){
        const mSec = this._creationDate * 1000;
        const date = new Date(mSec);
        return date;
    }  

    set creationDate(newDate){
        const mSec = newDate.getTime();
        const sec = mSec / 1000;
        this._creationDate = seconds; 
    }

    compareByTitle(todo2){
        return this.title.localeCompare(todo2.title);
    }

    compareByCreationDate(todo2){
        if (this._creationDate > todo2._creationDate) {
            return -1;            
        } else if(this._creationDate < todo2._creationDate){
            return 1;
        } else{
            return 0;
        }
    }

    static fromTodoObject(todoObject){
        const newTodo = new Todo(todoObject.title, todoObject.creationDate, todoObject.isCompleted, todoObject.id)
        return newTodo;
    }

    toDoModel(){
        const dbModel = {
            title: this.title,
            creationDate: this._creationDate,
            isCompleted: this.isCompleted,
            id: this.id,
        }
        return toDoModel
    }
}