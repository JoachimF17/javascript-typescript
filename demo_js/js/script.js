/*alert("Hello world!");
console.log("bonjour");
console.warn("attention");
console.error("oups");*/

if(true)
{
	var variable1 = "var"; //var disponible partout
	let variable2 = "let"; //var disponible uniquement dans le bloc défini
	const CONSTANTE = "const"; //const disponible uniquement dans le bloc défini

	variable2 = 12; //la var peut changer de type (pas en TypeScript)
}

var test = 14;
let retest = 15;
const CONSTEST = 16;

const m1 = prompt("membre 1:");
const m2 = prompt("membre 2:");

const rslt = parseInt(m1) + parseInt(m2);

if(isNan(rslt))
{
	console.log("calcul impossible");
}else
{
	console.log("resultat : " + rslt);
}

let tab = [1, 2, "yuh"];

//ajouter
tab.push("ajout a la fin");
tab.unshift("ajout au debut");
tab.splice(tab.length-2, 0, 15); //ajout a l'avant-derniere position le nombre '15', le '0' sert à montrer qu'on ne veut pas supprimer

//supprimer (+ recuperer)
let dernier = tab.pop();
let premier = tab.shift();
let subTab = tab.splice(2, 3); //je commence a l'indice 2, j'en retire 3

//autres
tab.toString(); //duh
tab.join(" - "); //toString() qui permet un formattage
tab.sort(); //alphabetique de base
tab.reverse(); //duh
tab.concat(); //ajoute une chaine de valeurs
subTab = tab.slice(1, -2); //meme principe qu'un substring en java, index negatif pour partir de la fin

//les chaines de caracteres
let chaine = "une chaine";
chaine = 'une chaine';
chaine = new String("une chaine");

let char = chaine.charAt(3);
let numUnicode = chaine.charCodeAt(1); //prend l'ascii d'un char
numUnicode = String.fromCharCode(char); //meme chose

chaine.indexOf("a"); //renvoie la premiere occurrence
chaine.lastIndexOf("a"); //derniere occurrence