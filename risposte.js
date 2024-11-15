/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
   numer: quando assegni al contenuto variabile un dato numerico, ad esempio = let esempio = 20
   senza le virgolette.
   string: quando assegni al contenuto variabile un dato alfanumerico tra virgolette e uguali, ad esempio = let esempio = "jose" o 'jose'.
   Undefined = quando il contenuto variabile non è stato definito ma potrebbe essere stato dichiarato.
   null quando non assegni nessun dato al contenuto variabile. Ma ha lo stesso valore di una pagina del colore bianco di una pagina in bianco.
   Boolean quando al contenuto variabile dai un dato di tipo false o true. let esempio = true
   Date: è il tipo contenuto variabile che ti permette di impostare date e orario.
   NaN: il browser vorrebbe riconsocere un valore ma non lo interpreta

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
oggetto è una box, dove puoi mettere dentro delle cose, i tuoi souvenir, un pc portatile, 
foto, una tv vecchia da dimensione piccola, un telefono vecchio dei 90s, o libri di storia. 

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12
num2 = 20
console.log ( num1 + num2 )

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
console.log(x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let nome = "Jose"
console.log (typeof nome)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x2 = 12
console.log(x2-4)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
name2 = "John"
console.log ( name1 == name2 )

name1 = name1.toLowerCase()
name2 = name2.toLowerCase()
console.log(name1 === name2)
