let phrase = "Bonjours tout le monde "
console.log(phrase)
console.log(phrase.length)

let sansespace = phrase.trim()
console.log(sansespace)
console.log(sansespace.length)

console.log(phrase.substr(21));

console.log(phrase.replace("Bonjours", " "))

console.log(phrase.replace(" " , " "))

console.log(phrase.replace(" tout le monde " , " "))


let phrase2 = "Ceci est une variable de type number !"
console.log(phrase2.replace('number', 'string'));

let phrase3 = "Ceci est une variable de type NuMbEr ! Les numbers c'est trop bien Number numBer numbeR"
console.log(phrase3.toLowerCase());