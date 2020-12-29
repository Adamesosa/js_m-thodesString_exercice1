// let phrase = "Bonjours tout le monde "
// console.log(phrase)
// console.log(phrase.length)

// let sansespace = phrase.trim()
// console.log(sansespace)
// console.log(sansespace.length)

// console.log(phrase.substr(21));

// console.log(phrase.replace("Bonjours", " "))

// console.log(phrase.replace(" " , " "))

// console.log(phrase.replace(" tout le monde " , " "))


// let phrase2 = "Ceci est une variable de type number !"
// console.log(phrase2.replace('number', 'string'));

// let phrase3 = "Ceci est une variable de type NuMbEr ! Les numbers c'est trop bien Number numBer numbeR"
// console.log(phrase3.toLowerCase());







// Exercice 1 STRING
let phrase = 'Bonjour tout le monde      ';

// Afficher la longueur 
console.log(phrase.length);

// Enlever l'espace
phrase = phrase.trimEnd();
// phrase = phrase.replace(/ +\s/, "");

// Reafficher la longueur
console.log(phrase.length);

// Afficher la dernière lettre
console.log(phrase.charAt(phrase.length -1));
//console.log(phrase.slice(-1));  // Extraire du code
//console.log(phrase.substr(2, 5));  // Extraire du code. 1er para -> indice ou il commence, 2eme para le nombre d'element à prendre
//console.log(phrase.substring(2, 5));  // Extraire du code. 1er para -> indice ou il commence, 2eme para indice ou il s'arrete

// Enlever "bonjour"
// phrase = phrase.replace('Bonjour ', "");
// phrase = phrase.slice(8);
phrase = phrase.substring(8);
console.log(phrase);

// Remettre "bonjour"
let bonjour = "bonjour";
phrase = bonjour.concat(" ", phrase);
console.log(phrase);

// Supprimer toute la phrase sauf "bonjour"
phrase = phrase.substring(0,8);

console.log(phrase);


// Remplacer
let phrase2 = "Ceci est une variable de type number !";
console.log(phrase2);
phrase2 = phrase2.replace("number", "string");
console.log(phrase2);

let phrase3 = "Ceci est une variable de type NuMbEr ! Les numbers c'est trop bien Number numBer numbeR";
console.log(phrase3);
phrase3 = phrase3.replace(/number/ig, "number");  //expression rationelle 
// phrase3= phrase3.toLocaleLowerCase();
console.log(phrase3);

