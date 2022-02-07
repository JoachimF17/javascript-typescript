//sol sans blindage

let prix = prompt("Prix de l'article : ");
let qt = prompt("Quantité : ");

let res = parseInt(prix)*parseInt(qt)*1.21;

alert("Prix total (TVAC) : " + res);

//sol avec blindage

let qtt = prompt("Quel est la quantité de livre ?");
let prix = prompt("Quel est le prix unitaire ?");

qtt = parseInt(qtt);
prix = parseFloat(prix);

let total;
if( !isNaN(qtt) && !isNaN(prix) )
    total = qtt * prix * 1.21;

console.log( total === undefined ? "calcul impossible" : total );