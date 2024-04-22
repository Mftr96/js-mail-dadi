//definisco come ottenere i risultati casuali 

//definisco la variabile risultato utente
let dado_utente= Math.ceil(Math.random() *6);
//definisco la variabile risultato pc
let dado_pc= Math.ceil(Math.random() * 6);

console.log(dado_utente);
console.log(dado_pc);

// pongo le condizioni per la salvezza dell'umanità
if(dado_utente>dado_pc){
    console.log("l'umanità è salva")
}

else{
    console.log("SIAMO SPACCIATIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
}