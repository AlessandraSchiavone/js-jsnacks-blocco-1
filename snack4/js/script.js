// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.
var nomi = ["Alessandra", "Ludovica", "Giuseppe","Vincenzo", "Noemi","Eva", "Angelo", "Flavio","Achille", "Giulia","Francesca"];
var cognomi = ["Renetti", "Martini", "Conte", "Lombardi", "Santoro", "D'Angelo", "De Luca", "Marino","Moro"];
var listaInvitati = document.getElementById("lista-invitati");
function coppiaRandom (array1, array2){
    coppia = [];
    for(i=0; i<10; i++){
    coppia[i] = array1[Math.floor(Math.random() * array1.length)] + " "+array2[Math.floor(Math.random() * array2.length)];
    listaInvitati.innerHTML += "<li>" + coppia[i] + "</li>";
    }
    return coppia;
}
var list = coppiaRandom(nomi, cognomi);
console.log(list);

