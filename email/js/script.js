// utenti registrati
var utentiAutenticati = ["a", "fmontani81@gmail.com", "giancarlocarloni@hotmail.com", "krazy_kat72@libero.it"];

// nome-accesso
var log = prompt("inserire propria email");

// var logged = utentiAutenticati.includes(log);

// verifica dati
var logged;
var ranger = utentiAutenticati.length;
for (i = 0; i < ranger; i++) {
    if (log == utentiAutenticati[i]) {
        logged = true;
    }
}
if (logged) {
    alert("loggato come " + log + ", benvenuto!");
    document.getElementById("user").innerHTML = log;
} else {
    alert("dati inseriti non validi:\nprima registrati e poi loggati!");
}