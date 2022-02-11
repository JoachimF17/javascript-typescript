export class Produit {
    private _nom: string;
    private _marque: string;
    private _prix: number;

    constructor(nom: string, prix: number, marque?: string)
    {
        this._nom = nom;
        this._prix = prix;
        this._marque = marque ? marque : 'inconnu';
    }

    //getters setters
    get nom(){
        return this._nom;
    }

    get marque(){
        return this._marque;
    }

    set marque(value: string){
        this._marque = value;
    }

    vendre(qt?: number){
        let qtEff = qt ? qt : 1
        console.log('produits vendus : '+qtEff);
        console.log('prix total : '+(qtEff*this._prix));
    }
}

class LivreAventure extends Produit implements Livre{
    titre: string;
    nbPages: number;
    genre: "action" | "romance";

    constructor(titre: string, marque: string, prix: number, nbPages: number, genre: 'action' | 'romance'){
        super(titre, prix, marque);
        this.titre = titre;
        this.nbPages = nbPages;
        this.genre = genre;
    }

    vendre(qt?: number): void {
        console.log("je vends un livre d'aventure");
    }

    lire = () => {
        console.log('je lis');
    };
}