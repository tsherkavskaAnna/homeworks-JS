/*Dato un array contenente nomi di persone, identificare il nome che è utilizza più lettere. Nel conteggio non considerare gli spazi e il -

Stampare su console il nome identificato, unitamente al numero di lettere che utilizza. In caso di più nomi con lo stesso numero di lettere utilizzate, stampare quello che appare prima nell'array (indice minore)

Utilizzare il file js allegato, nel quale è già presente un array con 40 nominativi.*/
const names = [
    'Antonia Maglio',
    'Veronica Carosone',
    'Ilaria Garobbio',
    'Lucia Sbarbaro',
    'Rodolfo Telesio',
    'Virginia Verri',
    'Gabriele Foa',
    'Gabriella Chindamo',
    'Arnulfo Pertini',
    'Pompeo Granatelli',
    'Pasqual Abatantuono',
    'Vito Curatoli',
    'Lidia Bodoni',
    'Raffaella Ritacca',
    'Morena Pertini',
    'Armando Ariasso',
    'Paulina Ferrata',
    'Beatrice Bernetti',
    'Elmo Crespi',
    'Liliana Bignardi',
    'Michelangelo Carocci',
    'Elena Luciani',
    'Rodolfo Grossi-Armani',
    'Gianmarco Ginesio',
    'Salvo Treccani',
    'Nino Padovano',
    'Marissa Caccianemico',
    'Martina Zacchia',
    'Ennio Cossiga',
    'Flavia Iacovelli-Viola',
    'Rocco Iannucci-Palumbo',
    'Bruno Comisso',
    'Milo Ariosto-Gentili',
    'Marissa Dibiasi',
    'Carla Bignardi',
    'Ottone Natta',
    'Martino Gremese',
    'Costanzo Comboni',
    'Manuel Contarini-Piazzi',
    'Licia Roth'];

const nome = document.querySelector('body');

let longestName = '';
let lenghtOfName = 0;

for (let name of names) {
   let lettere = [];

   for( let l of name) 
   {
    if( l == " " || l == "-") continue;
    if( !lettere.includes(l)) 
    {
        lettere.push(l)
    }

   }
   
   if(lettere.length > lenghtOfName) {
    lenghtOfName = lettere.length;
    longestName = name
   }

}

 nome.innerHTML = "Il nome piu lungo è: " + longestName + "<br>" + "con le lettere: " + lenghtOfName;
 


