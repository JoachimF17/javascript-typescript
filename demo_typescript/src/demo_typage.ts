//Declaration de variables

let nom: string = "string";
let age: number = 15;
let grand: boolean = false;
let ageAnimaux: number[] = [2, 5, 3];

let binaire = 0b00001011;
let octal = 0o13;
let decimal = 11;
let hexadecimal = 0xb;

let naissance: string | Date;

let grandNb = 250_000_000_000;

let nimp: any;

nimp = 15;
nimp = nom;
nimp = age;

let personne:
{
    nom: string;
    age: number;
} = {
    nom: "luc", 
    age: 40
};

type TabPersonne = {[nom: string]: {
    'nom-famille': string;
    date: Date | string;
} };

type Machin = {
    id: number | string;
    alias: {
        [key: string]: Date;
    }
}[] | null;

let truc: Machin = [{ 
    id: 0, 
    alias: { 
        naissance: new Date() 
    } 
}];

type MonType = 'salut' | 'bonjour';

let maVar: MonType = 'salut';

type AutreType = (p1: string, p2: number) => never;

let funcType: AutreType = (p1: string, p2: number) => {
    throw p1+p2;
}