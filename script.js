/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert("Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er! \n Þegar ýtt er OK þá byrjar leikurinn");
     play(); 
    if(confirm("Spila annan leik?")) start();
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
    let dateA = new Date(); 
    var correct = 0; 
    for(i = 0; i<GAMES_TO_PLAY; i++){
        var foo = ask();
        var question = foo[0];
        var answer = foo[1];
        var input = prompt("Hvað er: " + String(question));
     
        if (Number(input) == answer) {  
            correct++;
        } 
        if(input == null) {
            alert("Hætta í leik?");
            return; 
        }
    }
    let dateB = new Date(); 
    var timing = (dateB - dateA)/1000; 
    var mean = correct/timing; 
    var correctAnswer = alert("Þú svaraðir " + correct + " svörum af " + GAMES_TO_PLAY + " rétt á " + timing.toFixed(2) + " sekúndum \n" +
    "Meðalrétt svör á sekúndu eru: " + mean.toFixed(2));
    
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
        var x = randomNumber(1, 100);
        var y = randomNumber(1, 100);
    
        var mult1 = randomNumber(1, 10);
        var mult2 = randomNumber(1, 10);
    
        var div1 = randomNumber(2, 10);
        var div2 = randomNumber(2, 10);
    
        var random = randomNumber(1, 4);
        var answer, question; 
    
        switch(random){
            case 1: 
            question = x + " + " + y; 
            answer = x + y; 
            break; 
    
            case 2: 
            question = x + " - " + y; 
            answer = x - y; 
            break; 
    
            case 3: 
            question = mult1 + "*" + mult2; 
            answer = mult1*mult2; 
            break; 
    
            case 4: 
            question = div1*div2 + "/" + div1; 
            answer = (div1*div2)/div1;
            break; 
        }
    
        return [question, answer]; 
    }


/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();



