// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.






// let numbers = 0;
// for(let i = 0; i < 10; i++){
//     let number = parseInt(prompt('inserisci numero'));
    
//      numbers = numbers + number;
    
// }
// console.log(numbers);



let i = 0;
let numbers = 0;
while( i < 10 ){
    let number = parseInt(prompt('inserisci numero'));
    
    numbers = numbers + number;
    i++
}

console.log(numbers);