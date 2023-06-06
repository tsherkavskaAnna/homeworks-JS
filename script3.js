
function findLeapYear () {
    const startYear = parseInt(document.getElementById('input').value);
    const result = document.getElementById('output')

    const arrayOfResults = [];
    let currentYear = startYear;

    while (arrayOfResults.length < 10) {
        if((currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0) {
            arrayOfResults.push(currentYear);
        }
        currentYear++;
    }
    result.textContent = 'Anni bisestili succesivi sono: ' + arrayOfResults.join(', ')
}
