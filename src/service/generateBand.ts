import uuid from 'react-native-uuid';

const bandName = [
  "Renato e Seus Blue Caps",
  "Rock Rocket",
  "The Rolling Stones",
  "The Rubinoos",
  "The Temptations",
  "The Baseballs",
  "The BossHoss",
  "The Coasters",
  "The Fire",
  "Them (banda)",
  "The Tremeloes",
  "Ciro y los Persas",
  "Cook da Books",
  "Creedence Clearwater Revival",
  "The Crickets",
  "The Crows",
  "Beat Boys",
  "The Byrds",
  "The Beatles",
  "Big Brother and the Holding Company",
  "Bigelf",
  "Black Mountain",
  "Black Rebel Motorcycle Club",
  "Blind Melon",
  "Blood, Sweat & Tears",
  "Shocking Blue",
  "Blues Magoos",
  "Blues Pills",
  "Boogarins",
  "Boris",
  "Brainticket",
  "Os Brazões",
  "Brian Jonestown Massacre",
  "Bubble Puppy",
  "Buffalo Springfield",
  "Butthole Surfers",
];

const genre = [
  "Gênero musical",
  "Rock alternativo",
  "Música circense",
  "Música folclórica alemã",
  "Música mizrahi",
  "Música pop árabe",
  "Música profana",
  "Música sertaneja",
  "Música taoista",
  "Música utilitária"
];

const biography = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export function generate() {
  let sortBandNameNumber: number = Number((Math.random() * bandName.length).toFixed(0));
  let sortGenreNumber: number = Number((Math.random() * genre.length).toFixed(0));
  let sortPlayNumber: string = (Math.random() * 1000000).toFixed(0);
  let generatedUid: string = String(uuid.v4());

  return { 
    id: generatedUid,
    name: bandName[sortBandNameNumber],
    genrer: genre[sortGenreNumber],
    biography,
    plays: sortPlayNumber
  }
}