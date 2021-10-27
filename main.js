//CONSEGNA 
/*
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/
//array di numeri 
const numbers = []
//generare un numero  attraverso una funzione
function generateNumber() {
    return Math.floor(Math.random() * 100)
}
//pushare i numeri casuali nell'array
for (let i = 0; i < 5; i++) {
    numbers.push(generateNumber())
}

alert(`ricorda questi numeri: ${numbers}`)


