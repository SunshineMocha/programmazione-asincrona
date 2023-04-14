class DataService {

    static getTodos() {
        return fetch(`https://643694108205915d34f74640.mockapi.io/todos`) // ritorno la fetch perche non so cosa farci con questi dati. ma non ho un then. vado in main
            .then(resp => resp.json());
    }

    static putTodo(todo) {
        const jsonTodo = JSON.stringify(todo);
        console.log('sono nella put', todo);
        return fetch(`https://643694108205915d34f74640.mockapi.io/todos/` + todo.id, { method: `PUT`, body: jsonTodo, headers: {'content-type':'application/json'}})
            .then(resp => resp.json());
    }

    static deleteTodo(todo) {
        return fetch(`https://643694108205915d34f74640.mockapi.io/todos/` + todo.id, { method: `DELETE` })
            .then(resp => resp.json());
    }
}

    // static getTodos(callback) { // linea 1 app.js => chiamo la get e dico di stampare. funzione inutile, poco leggibile
    //     // get here
    //     fetch(`https://643694108205915d34f74640.mockapi.io/todos`)
    //         .then(resp => resp.json())
    //         .then(data => callback(data));
    // }


    // static postTodo(todo){

    // }

    

    