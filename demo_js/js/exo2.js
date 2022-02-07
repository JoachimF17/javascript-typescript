let chaine = "ma formation javascript";

let posMa = chaine.indexOf("ma");
console.log("position de 'ma' : "+posMa);

let posP = chaine.indexOf("p");
console.log("position de 'p' : "+posP);

let char21 = chaine.charAt(21);
console.log("lettre a l'indice 21 : "+char21);

chaine = chaine.replace("javascript", "java");
console.log("remplacement 'javascript' par 'java' : "+chaine);

let tabChaine = chaine.split(" ");
console.log("split par ' ' : "+tabChaine.join(" - "));

chaine = "ma formation javascript";
let chaineInversee = [];
for(let i = chaine.length-1; i >= 0; i--)
{
	chaineInversee.push(chaine.charAt(i));
}

console.log("chaine inversee = "+chaineInversee.join(""));

//autre solution pour le reverse

console.log("chaine inversee = " + chaine.split('').reverse().join(''));