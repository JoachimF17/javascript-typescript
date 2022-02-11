"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produit = void 0;
class Produit {
    constructor(nom, prix, marque) {
        this._nom = nom;
        this._prix = prix;
        this._marque = marque ? marque : 'inconnu';
    }
    //getters setters
    get nom() {
        return this._nom;
    }
    get marque() {
        return this._marque;
    }
    set marque(value) {
        this._marque = value;
    }
    vendre(qt) {
        let qtEff = qt ? qt : 1;
        console.log('produits vendus : ' + qtEff);
        console.log('prix total : ' + (qtEff * this._prix));
    }
}
exports.Produit = Produit;
class LivreAventure extends Produit {
    constructor(titre, marque, prix, nbPages, genre) {
        super(titre, prix, marque);
        this.lire = () => {
            console.log('je lis');
        };
        this.titre = titre;
        this.nbPages = nbPages;
        this.genre = genre;
    }
    vendre(qt) {
        console.log("je vends un livre d'aventure");
    }
}
