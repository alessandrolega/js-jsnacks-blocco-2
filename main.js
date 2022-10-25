// *Snack1*
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).
// *Snack2*
// Generatore di “nomi cognomi” casuali del grande gatsby:
// Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.
// *Snack3*
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari
// *Snack4 (Bonus)*
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro

// SNACK 1 DONE //

// let number = parseInt(prompt('inserisci un numero'));

// if (number % 2 === 0) {
//     console.log(number)

// } else{
//     console.log(number + 1)
// }


// SNACK 2  DONE // 

// let firstname = ["Paolo", "Luca", "Giovanni", "Tullio"];
// let firstnameL = firstname.length;


// let lastname = ["Rossi", "Monti", "Fesa", "Giusti"];
// let lastnameL = lastname.length;


// console.log(firstname[Math.round(Math.random() * (firstnameL - 1))] + ' ' + lastname[Math.round(Math.random() * (lastnameL -1 ))])


// SNACK 3  DONE //

let numbers = [1 , 3 , 4, 7, 9, 10];


let somma = 0;

for(let i = 1; i < numbers.length; i= i+2){
    somma += numbers[i];
}

console.log("somma è uguale a : ", somma);


