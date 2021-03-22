//  seed
var min = Math.ceil(1);
var max = Math.floor(6);


alert(`lanciamo i dadi!`);
// lanci
var numeroUtente = Math.floor(Math.random() * (max - min + 1)) + min;
var numeroCompi = Math.floor(Math.random() * (max - min + 1)) + min;

// risultato
alert(`i giochi son fatti!\nrisultato del tuo lancio: ${numeroUtente}\nrisultato lancio AI: ${numeroCompi}`);
if (numeroUtente > numeroCompi) {
    alert("hai vinto, straordinario");
} else if (numeroCompi > numeroUtente) {
    alert("hai perso, vergognoso");
} else {
    alert("un pareggio che scontenta tutti");
}
alert("altro round!");
location.reload();