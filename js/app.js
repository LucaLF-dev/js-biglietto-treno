// # Calcolo biglietto del treno

// ### Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

// #### Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//     - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//     - va applicato uno sconto del 20% per i minorenni
//     - va applicato uno sconto del 40% per gli over 65.
//     - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// - chiedere all' utente in numero di km che vuole percorrere
//   - inizializzare la variabile sui km
const kmUser =parseFloat(prompt(' quanti km vuole percorrere ?'));
console.log(kmUser);
// - chiedere l' età all' utente
//   - inizializzare la variabile sull età
const ageUser = parseInt(prompt(' inserisci la tua età ( tra 1 e 99 anni )'));
console.log(ageUser);
// - calcolo prezzo base del biglietto in base ai km
//   - dichiarare una variabile sul prezzo del biglietto al km di 0,21 euro
const priceKm = 0.21;
console.log(priceKm);
//   - dichiarare una variabile prezzo base dove concateniamo i km con il prezzo base al km del biglietto
const basePrice = kmUser * priceKm;
console.log(basePrice);
// - calcolo dello sconto in base all'età
//   - dichiarare variabili  sconto in euro
//       - 40%
const discountOver = basePrice * ( 40 / 100);
console.log(discountOver);
//       - 20%
const discountUnder = basePrice * ( 20 / 100);
console.log(discountUnder);

// - prezzo finale del biglietto sottraendo al prezzo base lo sconto
let finalPrice;


//   - concatenare prezzo base con lo sconto
if (ageUser < 18) {
    finalPrice = basePrice - discountUnder;
    
//     - SE < 18 anni:
//       - sconto del 20%
} else if (ageUser > 65) {
    finalPrice = basePrice - discountOver;
    
//     - ALTRIMENTI SE > 65 anni
//       - sconto del 40%
} else {

//     - ALTRIMENTI
//       - nessuno sconto
    finalPrice = basePrice;
}

console.log(finalPrice);


// function financial(finalPrice) {
//      return Number.parseFloat(finalPrice).toFixed(2);
//  }

// console.log(financial(finalPrice));

// - stampare il prezzo finale sull' HTML
// - recuperare con js l' elementi del Dom con id = finalPrice
const finalPriceDomElement = document.getElementById('finalPrice');
console.dir(finalPriceDomElement);

// - modificare l'inner HTML dello span con la variabile finalPrice
finalPriceDomElement.innerHTML = finalPrice.toFixed(2) +  '  euro'; //financial(finalPrice)