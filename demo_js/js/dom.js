console.log('dom.js');

function writeProps(obj)
{
	let div = document.getElementById('text-here');

	for(prop in obj)
	{
		const p = document.createElement('p');
		p.innerText = 'key : ' + prop + ' | value : ' + obj[prop];
		p.classList.add('truc');
		p.onclick = () => div.removeChild(p);
		div.appendChild(p);
	}
}

const o = {
	taille: 180,
	nom: 'Paul',
	age: 47
}