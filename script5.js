// Triangolo giu//

function printTriangle () {

    const numberOfLine = document.getElementById('num-input').value;
    const triangleContainer = document.getElementById('container-triangle');

    let triangle = '';
    for (let i = numberOfLine; i >= 1; i--) {
        let line = '';
        for ( let j = 1; j < numberOfLine - i; j++) {
            line += ' ';
        }
        for ( let j = 1; j < i; j++) {
            line += '*'
        }
        triangle += line + '<br>';
    }
    
  triangleContainer.innerHTML = triangle;
}
