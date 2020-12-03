// Codice viene eseguito solo quando documento e' carico
$(function () {
  //codice jQuery
  
  
  // Variabili con valore

  // Variabili senza valore
  
  // Functions





// Istruzioni:
//TASK 1 Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var student = {

  name : 'Ajeje',
  lastName : 'Brazorf',
  age: 99,

}

console.log(student);


for (var property in student) {
  console.log(student[property]);
  
}

//TASK 2 Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
//TASK 3 Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.





});
