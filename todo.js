class ToDo{
    constructor(title, creationDate, isCompleted = false, id){ //id all'ultimo, noi non diamo l'id, lo da il server, va all'ultimo che se non do niente lo ignora
        this.title = title;
        this._creationDate = creationDate;
        this.isCompleted = isCompleted;
        if (id){
            this.id = id;
        }
    }

    //  nasconde creation date (un numero che utente non puo leggere), voglio un get che lo trasforma in oggetto data
    get creationDate(){

    }

    set creationDate(newDate){
    }

    compareByTitle(todo2){
        return string1.localeCompare(string2) * - 1;
    }

    compareByCreationDate(todo2){
        // piu nuovo viene prima
    }

    static fromToDoObj(todoObj){
        return new ToDo(todoObj.title, todoObj.creationDate, todoObj.isCompleted, todoObj.id)
    }

}

/*

compiti
todo e todolist

*/