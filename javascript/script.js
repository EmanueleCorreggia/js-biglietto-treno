// Il programma dovrà chiedere all’utente il numero di chilometri che vuole
// percorrere
var kmDaPercorrere= prompt('Quanti Chilometri devi fare?');
console.log (kmDaPercorrere);
console.log(isNaN(kmDaPercorrere));
if (isNaN(kmDaPercorrere)) {
  alert('Non hai inserito un numero')
}
// chiedere l’età del passeggero.
var eta= prompt('Quanti anni hai?');
console.log (eta);
console.log(isNaN(eta));
if (isNaN(eta)) {
  alert('Non hai inserito un numero')
}
// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzoBigliettoKm = 0.21;
console.log(prezzoBigliettoKm);
var prezzo= (prezzoBigliettoKm * kmDaPercorrere);
console.log(prezzo);
document.write(prezzo);


// va applicato uno sconto del 20% per i minorenni



// sconto del 40% per gli over 65.


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
