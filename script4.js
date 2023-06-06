// Triangolo a destro//


function printTriangleDX (numLine) {
    const numberOfLine = document.getElementById('num-input').value;
    const containerTriangle = document.getElementById('container-triangle');

    let triangle = '';
    for (let i = 1; i <= numberOfLine; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += '*';
        }
        triangle += line + '<br>';
    }
    containerTriangle.innerHTML = triangle;
}
