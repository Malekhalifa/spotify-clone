import { Chanson } from "./chanson";

export interface ListeSommaire {

    id?: number;
    titre: string;
    artiste?: string;
    image: string;
    type: string;
    verifie: boolean;
    DateAjout: string;
    DateDerniereEcoutee: string;
    Commentaire?: string;
    chansons: Chanson[];

}
