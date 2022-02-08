console.log('exo7.js');

function jourSemaine(date)
{
	let jourSem = '';
	
	switch(date.getDay())
	{
		case 1:
			jourSem = "Lundi";
			break;
		case 2:
			jourSem = "Mardi";
			break;
		case 3:
			jourSem = "Mercredi";
			break;
		case 4:
			jourSem = "Jeudi";
			break;
		case 5:
			jourSem = "Vendredi";
			break;
		case 6:
			jourSem = "Samedi";
			break;
		case 7:
			jourSem = "Dimanche";
			break;
	}

	return jourSem;
}

function mois(date)
{
	let mois = '';

	switch(date.getMonth())
	{
		case 1:
			mois = "Janvier";
			break;
		case 2:
			mois = "Fevrier";
			break;
		case 3:
			mois = "Mars";
			break;
		case 4:
			mois = "Avril";
			break;
		case 5:
			mois = "Mai";
			break;
		case 6:
			mois = "Juin";
			break;
		case 7:
			mois = "Juillet";
			break;
		case 8:
			mois = "Aout";
			break;
		case 9:
			mois = "Septembre";
			break;
		case 10:
			mois = "Octobre";
			break;
		case 11:
			mois = "Novembre";
			break;
		case 12:
			mois = "Decembre";
			break;
	}

	return mois;
}

setInterval(() =>
{
	let date = new Date();
	let div = document.getElementById('text-here');

	div.innerHTML = '<p>'+jourSemaine(date)+' '+date.getDate()+' '+mois(date)+'</p>';
	div.innerHTML += '<p>'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'</p>';
}, 1000)
