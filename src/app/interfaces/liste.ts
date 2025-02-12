import { Chanson } from "./chanson";
export interface Liste {
    id: number;
    titre?: string;
    soustitre?: string;
    description?: string;
    visibilite: string;
    chansons?: Chanson[];
    image?: string;
    type?: string;
    verifie: number;
    datePublication?: string;
    nombreDeSauvgarde?: number;
}
