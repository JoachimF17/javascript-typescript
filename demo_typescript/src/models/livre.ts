interface Livre {
    readonly titre: string,
    nbPages: number,
    genre: 'action' | 'romance',
    auteur?: string,

    lire?: () => void
}

interface LivrePoche extends Livre {
    reduction: number;
}

let monLivre: Livre = {
    titre: 'Le petit cheval de manège',
    nbPages: 400,
    genre: 'romance'
}

monLivre.auteur = "l'auteur";