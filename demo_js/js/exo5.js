let taille = parseInt(prompt("Taille de la base du sapin : "));
let blank = [];
let sap = '*';

for(let i = 1; i < taille; i++)
{
	blank.push(' ');
}

for(let i = 1; i <= taille; i++)
{
	console.log(blank.join('')+sap);
	sap += '**';
	blank.pop();
}

let baseBlank = '';
let baseSap = '*';

for(let i = 0; i < (taille/2); i++)
{
	baseBlank += ' ';

	if(i%2 == 1 && taille > 3)
		baseSap += '**';
}

console.log(baseBlank+baseSap);

console.log(taille/2);