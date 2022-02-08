console.log('exo8.js');

var liste = document.getElementById('liste-exo');
var bouton = document.getElementById('bouton-exo');
var tab = ['red', 'green', 'blue'];
var i = 0;

bouton.style.border = '4px solid '+tab[0];

function ajoutListe()
{
	let li = document.createElement('li');
	li.innerText = "hello";
	li.style.color = tab[i%tab.length];
	i++;
	bouton.style.border = '4px solid '+tab[i%tab.length];
	liste.appendChild(li);
}