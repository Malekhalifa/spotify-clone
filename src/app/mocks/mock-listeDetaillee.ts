import { ListeDetaillee } from '../interfaces/liste-detaillee';

export const MOCK_LISTEDETAILLEE: ListeDetaillee[] = [
  {
    id: 1,
    titre: 'Chansons aimées',
    image: 'assets/img11.png',
    type: 'Liste de lecture',
    verifie: true,
    DateAjout: '2024-01-01',
    DateDerniereEcoutee: '2025-01-13',
    chanson: [{
      id: 1,
      titre: 'Sous le vent',
      artiste: 'Garou & Céline Dion',
      album: 'Seul',
      duree: 339,
      genre: 'Pop',
      annee: 2001,
      image: 'assets/img1.jpg',
      nombreDeLectures: 89000
    },
    {
      id: 2,
      titre: 'Je te promets',
      artiste: 'Johnny Hallyday',
      album: 'Gang',
      duree: 276,
      genre: 'Rock',
      annee: 1986,
      image: 'assets/img2.jpg',
      nombreDeLectures: 0
    },
    {
      id: 3,
      titre: 'Formidable',
      artiste: 'Stromae',
      album: 'Racine Carrée',
      duree: 217,
      genre: 'Electro',
      annee: 2013,
      image: 'assets/img3.jpeg',
      nombreDeLectures: 8900000
    }]
  }
];
