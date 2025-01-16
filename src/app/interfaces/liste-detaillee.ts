import { Chansons } from "./chansons";

export interface ListeDetaillee {

    id: number;
    titre: string;
    sousTitre: string;
    image: string;
    description: string;
    type: string;
    verifie: boolean;
    DatePublication: string;
    visibilite: string;
    nombreSauvegardes: number;
    chansons: Chansons[];

}


