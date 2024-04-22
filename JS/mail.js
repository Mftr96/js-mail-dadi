//devo controllare che la mail sia in lista

//definisco la lista delle mail in un array

let lista_mail= [
"ugofantozzi@ragioniere.salce",
"stanlee@marvel.dc",
"gennarobullo@pokemon.freak",

];

//richiedo la mail all'utente
let utente_mail=prompt("inserisci la tua mail")

//pongo le condizioni per capire se il dato utente rientra in lista 

//se il dato combacia con uno dei dati sulla lista, allora è positivo
//in caso contrario, darà esito negativo
//posso porre una condizione in cui chiedo se il dato utente combacia anche con uno solo della lista?

//creo un ciclo in cui pongo una condizione 

for(i=0;i<lista_mail.length;i++){
    if(utente_mail==lista_mail[i]){
        const msg_mail= "sei nella lista!"
        console.log("il tuo nome è in lista")
        document.getElementById("mail-vip").innerHTML+= msg_mail
    }
    
    
   

}

 if(utente_mail!==lista_mail[i]){
    const msg_mail="non sei in lista";
    document.getElementById("mail-vip").innerHTML+= msg_mail;

}