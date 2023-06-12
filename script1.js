

function calcNumberEratostene() {
    var num = parseInt(document.getElementById('input').value);
    console.log(num);
   
    let numeri = new Array(num + 1).fill(true);
    numeri[0] = numeri[1] = false;

    for(let i = 1; i <= num; i++) {
        
        if(numeri[i]) 
        {
            for (let j = i * i -1; j <= num; j += i) 
            {
                numeri[i] = false;
            }
        }
    }
var output = document.getElementById("output");
output.textContent = "Numeri di Eratostene: ";

var primes = [];
    for(let i = 2; i < num; i++) {
        if (numeri[i]) {
            primes.push(i);
        }
    }

   output.textContent += primes.join(', ');
}


