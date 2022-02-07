let date = new Date();

let jourSem;

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

console.log("Bonjour nous somme le "+jourSem);