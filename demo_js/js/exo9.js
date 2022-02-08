console.log('exo9.js');

var table = document.getElementById('table-exo');
var prix = document.getElementById('prix-exo');
var b1 = document.getElementById('bouton1');
var b2 = document.getElementById('bouton2');
var b3 = document.getElementById('bouton3');
var tab = [['Chaise', 25], ['Table', 150], ['Meuble TV', 250]];
var verif = [false, false, false];
var i = 0;
var total = 0;


var suppr = function ()
{
	switch(this.id)
	{
		case 'suppr0':
			i=0;
			break;
		case 'suppr1':
			i=1;
			break;
		case 'suppr2':
			i=2;
			break;
	}
	
	let td = document.getElementById('prix'+i);
	let tot = parseInt(td.getAttribute('tot'));
	tot -= tab[i][1];
	td.innerText = tot;
	td.setAttribute('tot', tot);
	
	total -= tab[i][1];
	prix.innerText = 'Prix total : '+total;
}

var ajoutArticle = function ()
{
	switch(this.id)
	{
		case 'bouton1':
			i=0;
			break;
		case 'bouton2':
			i=1;
			break;
		case 'bouton3':
			i=2;
			break;
	}
	
	if(verif[i])
	{
		let td = document.getElementById('prix'+i);
		let tot = parseInt(td.getAttribute('tot'));
		tot += tab[i][1];
		td.innerText = tot;
		td.setAttribute('tot', tot);
	}
	else
	{
		let tr = document.createElement('tr');
	
		let td1 = document.createElement('td');
		td1.innerText = tab[i][0];
		tr.appendChild(td1);
		
		let td2 = document.createElement('td');
		td2.innerText = tab[i][1];
		td2.setAttribute('id', 'prix'+i);
		td2.setAttribute('tot', tab[i][1]);
		tr.appendChild(td2);
		
		let button = document.createElement('button');
		button.innerText = 'suppr';
		button.setAttribute('id', 'suppr'+i);
		button.onclick = suppr;
		tr.appendChild(button);
		
		table.appendChild(tr);
	}
	
	
	total += tab[i][1];
	prix.innerText = 'Prix total : '+total;
	verif[i] = true;
}

b1.addEventListener('click', ajoutArticle);
b2.addEventListener('click', ajoutArticle);
b3.addEventListener('click', ajoutArticle);