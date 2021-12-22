console.log('JS OK')

/*
1 creare un ciclo che genera numeri da 1 a 100
2 individuare i multipli di 3 e 5
3 assegnare valori diversi ai numeri
*/

let risultato;

for (let i = 1; i <= 100; i++){

    if ( i%3 === 0 && i%5 === 0) {
        risultato = 'FizzBuzz';
    } else if ( i%3 === 0) {
        risultato = 'Fizz';
    } else if ( i%5 === 0) {
        risultato = 'Buzz';
    } else {
        risultato = i;
    }
    console.log(risultato);

    
}
