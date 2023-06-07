// Clesssidra//
function stampaClessidra() {

    const numLine = parseInt(document.getElementById('num-input').value);
    const containerClessidra = document.getElementById('container-clessidra');
    
    let clessidra = '';
    const halfRows = Math.floor(numLine / 2);

//Parte sopra destra di clessidra
    for (let i = numLine; i >= 1; i -= 2) {
        const spazzi = (numLine - i) / 2;
    
        //stampare spazzi
        for ( let j = 0; j < spazzi; j++) {
            clessidra += ' ';
        }
        //Stampare asterischi
        for( let j = 0; j < i; j++) {
            clessidra += '*';
        }
        clessidra += "<br>"
    }
//Parte inferiore destra di clessidra
for( let i = 3; i <= numLine; i += 2) {
    const spazzi = (numLine - i) / 2;

    //stampare spazzi
    for (let j = 0; j < spazzi; j++) {
        clessidra += ' '
    }
    //stampare asterischi
    for (let j = 0; j < i; j++) {
        clessidra += '*'
    }
    clessidra += "<br>"
}
    containerClessidra.innerHTML = clessidra;
}



