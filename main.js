//CONSEGNA 
/*
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//spiegazione all'utente:
alert(`ciao! ora ti mostrerò 5 numeri, dopodichè farò partire un timer di 30 secondi e alla fine di questo mi dirai i numeri che ricordi, testiamo la tua memoria!`)
//variabili di inserimento 
const stamp = document.querySelector(`.container`)
console.log(stamp);
//array di numeri 
//numeri random
const numbers = []
//numeri risposti dall'utente
const answers = []
//con .lenght ottengo i numeri corretti 
const correctAnswers = []
//generare un numero  attraverso una funzione
function generateNumber() {
    return Math.floor(Math.random() * 100)
}
//pushare i numeri casuali nell'array
for (let i = 0; i < 5; i++) {
    numbers.push(generateNumber())
}
//creare un alert per visualizzare i numeri da ricordare 
alert(`ricorda questi numeri: ${numbers}`)
//timer che parte e arriva a 29 , al 30esimo secondo appare il prompt.
let second = 0;
let clock = setInterval(function () {
    second++
    stamp.innerHTML = second
    if (second == 30) {
        clearInterval(clock)
    }
}, 1000)

//creare una funzione per le risposte che parta dopo 30 secondi 
function whatnumber() {
    for (let i = 0; i < 5; i++) {
        let number = parseInt(prompt(`scrivi il numero che ricordi`))
        answers.push(number)
        compare(numbers, answers, i)
    }
    stamp.innerHTML = (`hai indovinato: <span>${correctAnswers.length}</span> numeri`)
    if (correctAnswers.length == 0) {
        alert(`hai una pessima memoria amico/a`)
    } else if (correctAnswers.length == 1) {
        alert(`male ma non malissimo`)
    } else if (correctAnswers.length == 2) {
        alert(`dai sei nella media!`)
    } else if (correctAnswers.length == 3) {
        alert(`buono! ma sono sicuro che puoi fare di meglio!`)
    } else if (correctAnswers.length == 4) {
        alert(`ottimo, hai una buona memoria!`)
    } else if (correctAnswers.length == 5) {
        alert(`wow sei un/a mostro!`)
    }
}
//richiamare la funzione
setTimeout(whatnumber, 30000)
//funzione per inserire un elemento nell'array di risposte corrette così da avere il .lenght = al n. di risposte corrette
function compare(name1, name2, i) {
    const compara = name1.filter((numero) => {
        if (numero == name2[i]) {
            correctAnswers.push(1)
        }
    })
}