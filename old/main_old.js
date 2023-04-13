/*

    PROGRAMMAZIONE ASINCRONA VUOL DIRE UN PROGRAMMA SI BLOCCA PER FARNE PARTIRE UN ALTRO E ATTENDE LA RISPOSTA QUANDO HA FINITO
    Multi threading.
    ogni diramazione ha una callback. programma continua, lascia l'altro in attesa e poi ottiene risposta da esso

*/

// abbiamo fatto il nostro fizzbuzz, ora mettiamo il nostro primo evento asincrono, setTimeout(). Tempo espresso in ms

// setTimeout(togliLaLasagna, 3000) // esegue funzione per 3 secondi

// function togliLaLasagna(){
//     console.log(`Le lasagne sono pronte!!!`);
// }

// for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     }
//     else {
//         console.log(i);
//     }
// }

// Esempio: il nostro amico sta giocando a candy crush, 
// ad un certo punto grazie alla sveglia abbiamo attivato la funzione togli la lasagna. Il nostro amico senza smettere di giocare ha tolto le lasagne
// abbiamo settato un timer (settimeout) con la sua call (togli la lasagna) mentre continuava con il suo fizzbuzz

// setTimeout(buttaLaSpazzatura, 10000);

// function buttaLaSpazzatura(){
//     console.log(`Ho fatto la differenziata!!!`);
// }

// setTimeout(salutaLaNonna, 5000);

// function salutaLaNonna(){
//     document.getElementById(`main`).innerHTML = `<h1>Ciao Nonna </h1> `
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// iniziamo a lavorare con server online (chiamate web), mandare e ricevere dati sito di emulazione: mockapi.io (crea un database online standard fittizio)

// creare ToDo app, creare nuova risorsa e nella nuova risorsa possiamo mettere cosa vogliamo salvare (immaginare come un cloud/spazio online
// voglio salvare i todo, creo un ID che sarà univoco, metto una description/Title della todo String, una creation date di tipo DATE 
// e isCompleted se il task è stato completato che sarà di tipo boolean. Creo una sorta di database (database NOSQL)
// una volta creato il modello faccio create. Mi creo dei dati e mi restituisce il JSON. Per vedere formattazione chrome/firefox installa plugin

// come uso questi dati? Fetch(url) per recuperare i dati


//FETCH è un nuovo metodo, prima si usava AJAX
fetch(`https://643672ab8205915d34f3b508.mockapi.io/todos`)
.then(resp => resp.json()) // funzione di callback. prende la stringa json e lo traduce in qualcosa che JS sa usare
.then(data => displayData(data)); //una volta trasformati i dati che mi servono, THEN uso i dati come li so usare

// restituisce una "promise" (promessa) perche mi promette che prima o poi i dati arriveranno. Come faccio? .then. Quando arriva il dato ti dico cosa fare
// dopo questo passaggio c'è un'altra then e in questo faccio quello che voglio
// questa fetch non sa quanto ci mette, la promise serve per farlo girare. 

// ora uso i dati per fare un display
function displayData(data){
    const todoList = document.getElementById(`todo-list`); // mi chiamo la ul che ho creato in index
    todoList.innerHTML = ``; // me la svuoto

    for (let i = 0; i < data.length; i++) {
        const todo = data[i];

        const newLi = document.createElement(`li`);

        const titleNode = document.createTextNode(todo.title);

        newLi.appendChild(titleNode);
        
        todoList.appendChild(newLi);

    }
}


// CRUDE functions:  GET prende POST posta PUT modifica DELETE cancella

// Vecchio AJAX MODEL
// const xhr = new XMLHttpRequest();
// const url = `https://643672ab8205915d34f3b508.mockapi.io/todos`;
// xhr.open("GET", url, true);

// xhr.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200) {//standard risposte chiamate{
//         console.log(this.responseText);
//         const data = JSON.parse(this.responseText);
//         console.log(data);
//     }
// }

// xhr.send();


// plugin per ignorare CORS durante testing: Allow CORS Access Control Allow Origin

// OpenTriviaDB