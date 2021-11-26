// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// ciclo-for

let invitati = [ ];
const nomeUtente = prompt('inserisci nome');
// genera nomi in array
for (let i = 0; i < 100; i++) {
    const element = 'nome' + i;
    invitati.push(element);
    
}

let find = false;
// controllo-for

for (let i = 0; i < invitati.length; i++) {
    if( nomeUtente == invitati[i]){
    find = true;
    }
}

if( find == false){
    console.log(' non puoi partecipare alla festa');
}else{
    console.log('puoi partecipare alla festa');

}







// ciclo-while

// let i = 0;
// let find = false;

// while  ( i < invitati.length && find == false){
//     if( nomeUtente == invitati[i]){
//         find = true;
//     }
//     i ++;
    
// }

// console.log(invitati[i]);

// if(find){
//     console.log(' puoi partecipare alla festa');
// }else{
//     console.log('non puoi trovato non puoi partecipare');
// }

