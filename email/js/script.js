var utentiAutenticati = ["fmontani81@gmail.com", "giancarlocarloni@hotmail.com", "krazy_kat72@libero.it"];
var log = prompt("inserire propria email");

// var logged = utentiAutenticati.includes(log);
var logged;
var ranger = utentiAutenticati.length;
for (i = 0; i < ranger; i++) {
    if (log == utentiAutenticati[i]) {
        logged = true;
    }
}

if (logged) {
    alert(`loggato come ${log}, benvenuto!`);
} else {
    alert("dati inseriti non validi:\nprima registrati e poi loggati!");
}