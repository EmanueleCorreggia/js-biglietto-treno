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
console.log(prezzo)
document.write(prezzo);
// document.write(prezzo);
// va applicato uno sconto del 20% per i minorenni
var scontoMinorenni= (prezzo * 20) / 100;
if (eta > 18) {
  console.log(scontoMinorenni)
}
// sconto del 40% per gli over 65.
var scontoOver65= (prezzo * 40) / 100;
if (eta < 65) {
  console.log(scontoOver65)
}
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// prezzo minorenni
var prezzominorenni= (prezzo - scontoMinorenni)
if (eta < 18) {
  console.log(prezzominorenni);
  document.write(prezzominorenni);
}
// prezzoOver65
var prezzoOver65= (prezzo - scontoOver65)
if (eta > 65) {
  console.log(prezzoOver65);
  document.write(prezzoOver65);
}
 
