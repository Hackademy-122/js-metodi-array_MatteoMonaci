// ES 1 : 
// Dato un array x e un valore y verificare se l'array fornito contiene il valore. L'array può contenere numeri o stringhe.Restituire true se l'array contiene il valore, false in caso contrario. ESEMPIO: check([66, 101], 66) ---> true check(['what', 'a', 'great', 'kata'], 'kat') ---> false

let arrayEsUno = [1, 2, 'luca', 'ciao', true, NaN];

let value = 'ciao'

function checkEsUno (arr, checkValue) {
    return arr.includes(checkValue);
}

console.log(checkEsUno(arrayEsUno, value));


// ES 2:
// Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri contenuti nell'array. Esempio: let array = [1, 5 ,7 ,12]; Output = 25

let arrayEsDue = [1, 5, 7, 12];

function sumEsDue (arr) {
    let sumArr = arr.reduce((accumulator, element) => accumulator + element, 0);
    return sumArr;
}

// refactoring : si poteva scrivere direttamente a riga 21 return arr.reduce((accumulator, element) => accumulator + element, 0);

// oppure essendo 1 sola istruzione si poteva scrivere solo 1 riga di codice: let sumArr = (arr) => arr.reduce((accumulator, element) => accumulator + element, 0);

console.log(sumEsDue([1, 5, 7, 12]));
console.log(sumEsDue(arrayEsDue));


// ES 3:
// Scrivi un programma che dato un array di numeri, restituisca in output la media e tutti i valori minori della media. Esempio: Input: a = [3, 5, 10, 2, 8] Output: media = 5.6, valori minori = [3, 5, 2]

let arrayEsTre = [3, 5, 10, 2, 8];

function everageEsTre (arr) {
    let everage = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /  arr.length;
    return everage;
}

let everage = everageEsTre(arrayEsTre);

function underEsTre (arr, media) {
    let filtered = arr.filter((el) => el < media);
    return filtered;
}

let under = underEsTre(arrayEsTre, everage)

console.log(everage, under);


// ES 4:
// Creare una funzione javascript che prende due argomenti e restituisce tutti i numeri divisibili per il divisore dato. Il primo argomento è una array e il secondo è il divisore. findMultiples([1, 2, 3, 4, 5, 6], 2) --> [2, 4, 6]

let arrayEsQuattro = [1, 2, 3, 4, 5, 6];
let divisore = 2;

function esQuattro (arr, div) {

    let numeriDivisibili = arr.filter((el) => el % div == 0);
    return numeriDivisibili;

    // refactoring in 1 sola riga: return arr.filter((el) => el % div == 0);
    
}

console.log(esQuattro(arrayEsQuattro, divisore));


// ES 5: 
//  Scrivi un programma che dati: - 2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta di effettuare, una delle seguenti operazioni: 

// addizione

// sottrazione 

// moltiplicazione 

// divisione

//  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

// Esempio: Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione" Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

function operazioni (operazione) {
    let array1 = [];
    let array2 = [];

    for (let i = 0; i < 10; i++) {
        array1.push(Math.floor(Math.random () * 10));
        array2.push(Math.floor(Math.random () * 10));
    }

    console.log(array1);
    console.log(array2);

    switch(operazione) {
        case 'addizione':
            return array1.map((n, index) => n + array2[index]);
        case 'sottrazione':
            return array1.map((n, index) => n - array2[index]);
        case 'moltiplicazione':
            return array1.map((n, index) => n * array2[index]);
        case 'divisione':
            return array1.map((n, index) => n / array2[index]);
        default:
            return 'operazione non valida';
    }
}

console.log(operazioni('addizione'));


// ES 6:
// Scrivere un programma che permetta di filtrare soltanto le parole all’interno di un array:
// let mixArray = [1, true, ‘hackademy’, 100, ‘Javascript’, false, null, ‘php’]
// il risultato dovra’ dare, let filtered = [‘hackademy’, ‘Javascript’, ‘php’]

let mixArray = [1, true, 'hackademy', 100, 'Javascript', false, null, 'php'];

function filtro (arr) {
    return arr.filter((item) => typeof item === 'string');
}

console.log(filtro(mixArray));