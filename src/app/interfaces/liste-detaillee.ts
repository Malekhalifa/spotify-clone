import { Chanson } from "./chanson";

export interface ListeDetaillee {

    id: number;
    titre: string;
    image: string;
    type: string;
    verifie: boolean;
    DateAjout: string | Date;
    DateDerniereEcoutee: string | Date;
    Commentaire?: string;
    chanson: Chanson[];

}

