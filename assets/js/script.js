// Codice viene eseguito solo quando documento e' carico
$(function () {
  //codice jQuery
  
  
  // Variabili con valore

  // Variabili senza valore
  
  // Functions





// Istruzioni:
//TASK 1 Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

// var student = {

//   name : 'Ajeje',
//   lastName : 'Brazorf',
//   age: 99,

// }


// for (var key in student) {
//   console.log(student[key]);
  
// }

//TASK 2 Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var students = [
  {
    name: "Ajeje",
    lastName: "Brazorf",
    age: 99,
  },
  {
    name : "Brambilla",
    lastName : "Fumagalli",
    age : 1,
  },
  {
    name : "Conte",
    lastName : "Mascetti",
    age : 50,
  },
];


// console.log(students);

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);

for (var i = 0; i < students.length; i++){

  console.log(students[i].name);
  console.log(students[i].lastName);
  console.log(students[i].age);

 }

// for (var i = 0; i < students.length; i++) {
//   for (var key in students[i]) {
//     console.log(students[i][key]);
//   }
// }



//TASK 3 Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.




var userName = prompt('Insert your name');
var userLastName = prompt('Insert your lastname');
var userAge = prompt('Insert your age');


var newUser = {
  name : userName,
  lastName : userLastName,
  age : userAge,
};


console.log(newUser);


students.push(newUser);
console.log(students);


// TASK BONUS stampa in html la lista


for (var i = 0; i < students.length; i++){

$("#lista").append(
  "<li> " +
    "" +
     students[i].name + " " +
     students[i].lastName +
    " " +
     students[i].age +
    " " +
    "</li>"
);

}



});
