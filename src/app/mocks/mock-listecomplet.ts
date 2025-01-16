import { ListeDetaillee } from "../interfaces/liste-detaillee";

export const MOCK_LISTEDETAILLEE: ListeDetaillee[] = [
    {
        "id": 0,
        "titre": "Titre 1",
        "sousTitre": "Sous-titre ",
        "image": "https://picsum.photos/200",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
        "type": "Liste de lecture",
        "verifie": true,
        "DatePublication": "2024-10-22",
        "visibilite": "publique",
        "nombreSauvegardes": 12345,
        "chansons": [
            {
                "id": 1,
                "titre": "Titre de la chanson 1",
                "artiste": "...",
                "album": "...",
                "paroles": "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
                "datePublication": "2024-10-22",
                "duree": 92,
                "nombreLectures": 54321

            },
            {
                "id": 2,
                "titre": "Titre de la chanson 2",
                "artiste": "...",
                "album": "...",
                "paroles": "Lorem ipsum, dolor sit amet consectetur adipisicing elit...",
                "datePublication": "2024-10-22",
                "duree": 188,
                "nombreLectures": 98765

            }
        ]
    }
];