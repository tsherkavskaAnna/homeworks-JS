// Clesssidra//
/*function stampaClessidra() {

    const numLine = document.getElementById('num-input').value;
    const containerClessidra = document.getElementById('container-clessidra');

    let clessidra = '';
    let line = '';

for ( let i = numLine; i >= 1; i--) {

    for ( let j = 1; j < (numLine - 1) / 2; j++) {
        line += '&';
    }
    for (let k = 0; k < numLine - i ; k++) {
      line += '*';
    }
    clessidra += line +'<br>'
}
containerClessidra.innerHTML = clessidra;
}*/
function printHourglass() {
    let numAsterisks = 7;
  
    // Parte superiore della clessidra
    for (let i = 0; i < 7; i++) {
      let line = '';
      for (let j = 0; j < numAsterisks; j++) {
        line += '*';
      }
      console.log(line);
      if (numAsterisks === 1) {
        numAsterisks++;
      } else {
        numAsterisks--;
      }
    }
  
    // Parte inferiore della clessidra
    numAsterisks = 2;
    for (let i = 7 - 1; i > 0; i--) {
      let line = '';
      for (let j = 0; j < numAsterisks; j++) {
        line += '*';
      }
      console.log(line);
      numAsterisks++;
    }
  }
  
  

  



