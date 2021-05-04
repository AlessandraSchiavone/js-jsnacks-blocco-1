// Snack #5:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.

var arrayDispari = [];
i=1;
do{
    var numeroInserito = prompt("Inserisci il "+ i + "° numero");
    var dispari = isOdd(numeroInserito);
    console.log(numeroInserito);
    if(dispari){
        arrayDispari.push(numeroInserito);
    }
    i++;
}while(i<= 6);

function isOdd(numero){
    return(numero % 2 !=0);
}
console.log(arrayDispari);