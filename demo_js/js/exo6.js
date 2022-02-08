console.log('exo6.js');

setInterval(() =>
{
	let date = new Date();
	let titre = document.getElementById("title");

	titre.innerHTML = '['+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+']';
}, 1000);