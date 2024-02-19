//- Ask by prompt the kilometres number
//- Ask by prompt the age of the passenger
const kilometres = prompt("Inserisci il numero di kilometri")
const agePassenger = prompt("Inserisci l'età del passeggero")
console.log(kilometres,agePassenger);

//- Multiply kilometres number by the price (0.21)
let ticketPrice = kilometres * 0.21;

//- Apply the 20% discount for the under 18
if (agePassenger < 18) {
    ticketPrice = ticketPrice - (((kilometres * 0.21) * 20) / 100);
    console.log("biglietto scontato minorenne: " + ticketPrice);
    alert ("Biglietto scontato minorenne: " + ticketPrice.toFixed(2) + "€");
}

//- Apply the 40% discount for the over 65
else if (agePassenger > 65) {
    ticketPrice = ticketPrice - (((kilometres * 0.21) * 40) / 100);
    console.log("biglietto scontato pensionato: " + ticketPrice);
    alert ("Biglietto scontato pensionato: " + ticketPrice.toFixed(2) + "€");
}

else {
console.log("biglietto intero: " + ticketPrice);
alert ("Biglietto intero: " + ticketPrice.toFixed(2) + "€");
}


