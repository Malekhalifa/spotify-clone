
import { ListeSommaire } from '../interfaces/liste-sommaire';

export const MOCK_LISTESOMMAIRE: ListeSommaire[] = [
  {
    id: 1,
    titre: 'Chansons aimées',
    image: 'assets/img11.png',
    type: 'Liste de lecture',
    verifie: false,
    DateAjout: '2024-01-01',
    DateDerniereEcoutee: '2025-01-13',
    Commentaire: "3 chansons",
    chansons: [{
      id: 1,
      titre: 'Sous le vent',
      artiste: 'Garou & Céline Dion',
      album: 'Seul',
      duree: '3:59',
      genre: 'Pop',
      annee: 2001,
      image: 'assets/img1.jpg'
    },
    {
      id: 2,
      titre: 'Je te promets',
      artiste: 'Johnny Hallyday',
      album: 'Gang',
      duree: '4:36',
      genre: 'Rock',
      annee: 1986,
      image: 'assets/img2.jpg'
    },
    {
      id: 3,
      titre: 'Formidable',
      artiste: 'Stromae',
      album: 'Racine Carrée',
      duree: '3:37',
      genre: 'Electro',
      annee: 2013,
      image: 'assets/img3.jpeg'
    }]
  },

  {
    id: 2,
    titre: 'ma liste de lecture des meilleurs morceaux',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnYXzVvh6Am0P4lhjeR8gWCpna13Z-klVQA&s',
    type: 'liste de lecture des meilleurs morceaux',
    verifie: true,
    DateAjout: '2020-01-02',
    DateDerniereEcoutee: '2025-01-02',
    chansons: [
      {
        id: 4,
        titre: 'Tout le monde veut devenir un cat',
        artiste: 'Phil Harris',
        album: 'La Belle et le Clochard',
        duree: '2:25',
        genre: 'Jazz',
        annee: 1955,
        image: 'assets/img4.jpeg'
      },
      {
        id: 5,
        titre: 'Ne me quitte pas',
        artiste: 'Jacques Brel',
        album: 'Ne me quitte pas',
        duree: '4:17',
        genre: 'Chanson Française',
        annee: 1959,
        image: 'assets/img5.jpeg'
      },
      {
        id: 6,
        titre: 'La Vie en rose',
        artiste: 'Édith Piaf',
        album: 'Édith Piaf',
        duree: '3:05',
        genre: 'Chanson Française',
        annee: 1947,
        image: 'assets/img6.jpeg',
      }
    ]
  },

  {
    id: 3,
    titre: 'Céline Dion',
    image: 'assets/img21.jpeg',
    type: 'Artiste',
    verifie: true,
    DateAjout: '2013-08-18T15:00:00Z',
    DateDerniereEcoutee: '2025-08-18T15:00:00Z',
    Commentaire: '-',
    chansons: [{
      id: 7,
      titre: 'My Heart Will Go On',
      artiste: 'Céline Dion',
      album: "Let’s Talk About Love",
      duree: '4:40',
      genre: 'Pop',
      annee: 1997,
      image: 'assets/img7.jpeg'
    },
    {
      id: 8,
      titre: "Pour que tu m'aimes encore",
      artiste: 'Céline Dion',
      album: "D'eux",
      duree: "4:25",
      genre: 'Chanson Française',
      annee: 1995,
      image: 'assets/img8.jpeg'
    },
    {
      id: 9,
      titre: 'The Power of Love',
      artiste: 'Céline Dion',
      album: 'The Colour of My Love',
      duree: '5:42',
      genre: 'Pop',
      annee: 1993,
      image: 'assets/img9.jpeg'
    },
    {
      id: 10,
      titre: 'Immortality',
      artiste: 'Céline Dion',
      album: 'Back to Life',
      duree: '4:09',
      genre: 'Pop',
      annee: 1997,
      image: 'assets/img10.jpeg'
    },
    {
      id: 11,
      titre: 'Ashes',
      artiste: 'Céline Dion',
      album: 'Courage',
      duree: '3:33',
      genre: 'Pop',
      annee: 2019,
      image: 'assets/img11.jpeg'
    }

    ],
  },
];