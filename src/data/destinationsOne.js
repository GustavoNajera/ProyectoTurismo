const destinationsOne = [

  {
    id: 1,
    image: 'Catarata la leona.jpg',
    title: "Catarata la Leona",
    subTitle: "Guanacaste",
    col: 3,
    description: `A crystal clear turquoise water waterfall with an intermediate path difficulty, in a farm with friendly people who will guide you through an unforgettable tour, far from the noise and stress of the city.
    La Leona waterfall has become one of the main attractions in the area, due to the variety offered by the walk to reach the waterfall. You must cross the river several times, go through caves, canyons, swim, hold on to ropes and even for those who like adventure there is a chance to jump from a stone into the river pool.`,
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7840.3407739642125!2d-85.41234724130854!3d10.721337999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7565c3425e016d%3A0x50ad897f86889860!2sLa%20Leona%20Waterfall%20Official%20-%20Catarata%20La%20Leona%20Oficial!5e0!3m2!1ses!2scr!4v1686608723030!5m2!1ses!2scr'
  },
  {
    id: 2,
    image: 'PlayaPenca.jpg',
    title: "Playa Penca",
    subTitle: "Guanacaste",
    col: 5,
    description: `It is a heavenly place, but at the same time magical and relaxing. It sounds exaggerated, but when you get there you will realize that we fell short in the description. Penca is a small beach with white sand, turquoise sea and gentle waves located in Carrillo de Guanacaste and is surrounded by mountains that adorn the landscape and give it an exotic tone.
    On this beach you can swim, snorkel, tan under the poles that hug the place, or simply rest.`,
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125551.58827960926!2d-85.92887120273441!3d10.462211100000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e259cad76f4fb%3A0x4a5b8a4e6cdb7d50!2sPlaya%20Penca!5e0!3m2!1ses!2scr!4v1686610032159!5m2!1ses!2scr'
  },
  {
    id: 3,
    image: 'Monteverde.jpg',
    title: "Monteverde",
    subTitle: "Puntarenas",
    col: 4,
    description: `You'll feel like you're on top of the world, but really, you've reached the central point of the nation's continental divide. In Monteverde, Costa Rica, the sun-kissed faces of beach dwelling locals are replaced by the warm smiles of farmers, artists, naturalists, and outdoor enthusiasts—particularly in the small yet pleasant town of Santa Elena.
    Situated at 4,662 ft (1,440 m) above sea level, Monteverde, Costa Rica is a lot like the United States' Pacific Northwest region — evergreen due to the precipitation and moisture-filled clouds which hover over the horizon on an almost daily basis. Monteverde's cloud forests are the byproduct of fog (a thick, low-hanging cloud) tangling amongst the leaves and branches of the forest canopy. When these water-based clouds come into contact with solid plant material, the plant absorbs what it needs and the remaining water condenses and drips down — layer by layer, organism by organism — until it reaches the forest floor.`,
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15701.830184348903!2d-84.82099125377086!3d10.305219437059606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa01978f5f77c49%3A0x990decc8173f24d4!2sProvincia%20de%20Puntarenas%2C%20Monte%20Verde!5e0!3m2!1ses!2scr!4v1686608814655!5m2!1ses!2scr'
  },
  {
    id: 4,
    image: 'Manzanillo.jpg',
    title: "Manzanillo",
    subTitle: "Limón",
    col: 6,
    description: `A 4-hour drive from the capital city of San José, Manzanillo is located south of the famous Cahuita National Park and is among the most picturesque beaches in Costa Rica, with fantastic weather year-round.
    A relatively quiet area with only a few tourists here and there, this fishing village has a unique atmosphere and culture that is characteristic of the Caribbean province.
    Largely influenced by Afro-Caribbean traditions and customs, this city is a laid-back, laid-back place with friendly people and some of the best food and gastronomy in general.`,
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7867.194747760693!2d-82.66193440513072!3d9.629892589512968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa645e2c92f005b%3A0x481b306c6d9d51b7!2sLim%C3%B3n%2C%20Manzanillo!5e0!3m2!1ses!2scr!4v1686610198320!5m2!1ses!2scr'
  },
  {
    id: 5,
    image: 'Ponderosa.jpg',
    title: "Ponderosa",
    subTitle: "Guanacaste",
    col: 6,
    description: `Enjoy the experience of interacting with exotic animals, an unforgettable adventure and the nature that Liberia, Guanacaste offers.
    Our visitors can also enjoy four more attractions, both aquatic, air and land, which awaken the adventurous spirit.`,
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502055.0892363276!2d-85.98955077857953!3d10.555258599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9fd8609916b5d9%3A0xb9bc77dc456cf0f6!2sPonderosa!5e0!3m2!1ses!2scr!4v1686608911797!5m2!1ses!2scr'
  },
  {
    id: 6,
    image: 'Zarcero.jpg',
    title: "Zarcero",
    subTitle: "Alajuela",
    col: 4,
    description: `One of the main attractions of this town in Zarcero is the church of San Rafael, a beautiful building both inside and out. Those who appreciate good art will be in awe of the religious paintings, architecture, and colorful stained glass windows. Built in 1895, this church in Zarcero is made up of pieces of art such as a canvas in one of its murals made by Don Misael Solis Alvarado, a Costa Rican artist.
    The main entrance of the San Rafael church is located directly behind the Francisco Alvarado park, a park full of shrubs of different shapes, creations of Don Evangelista Blanco in 1964. This gardener and curator of the park, turns the shrubs and trees of the park into awesome creations like animals, shapes and people. After planting cypress seeds in the park, Don Evangelista waited a few years for them to grow big enough to shape them. With no training in botany or gardening, this empirical artist has created wonders from dinosaurs and helicopters to Jesus Christ carrying the Cross. Today, Don Evangelista continues to care for and cut the cypress trees in this park, which he alone maintains in immaculate condition.`,
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31415.470600944827!2d-84.43147856141933!3d10.186029593359052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa05d0806f8a4ef%3A0x10b17243f8a70a27!2sProvincia%20de%20Alajuela%2C%20Zarcero!5e0!3m2!1ses!2scr!4v1686608965354!5m2!1ses!2scr'
  },
    {
    id: 7,
    image: 'bajos-del-toro.jpg',
    title: "Bajos del toro",
    subTitle: "Alajuela",
    col: 5,
    description: 
    `The waterfall plunges down the vividly dappled cliffs and splashes into a pool of gorgeous blue water framed by lush, flourishing vegetation.
    A hike around the waterfall can reward even the strongest adventurer with a strenuous climb, while offering a ground-level view of flourishing plant and animal life. You may even see a puma, but be careful not to get too close!
    The name "Bajos del Toro" forces you to look down the cataract of a huge waterfall, you may feel as if you are facing a raging bull.`,
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15706.249595090554!2d-84.30931815379095!3d10.216146838407486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0606e9be268b7%3A0xee43e4efb9bf18c7!2sProvincia%20de%20Alajuela%2C%20Bajos%20del%20Toro!5e0!3m2!1ses!2scr!4v1686608997265!5m2!1ses!2scr'
  },
  {
  id: 8,
  image: 'catarata-la-paz.jpg',
  title: "Catarata la Paz",
  subTitle: "Alajuela",
  col: 3,
  description: 
  `The La Paz River forms the waterfall after traveling 8 kilometers (5 miles) through volcanic terrain, and then continues through the forest on the eastern slope of the Poás Volcano. A short path leads behind the waterfall, where a small sanctuary has been established. Upstream of the waterfall are the so-called La Paz Waterfall Gardens, a hotel and a park, where visitors can observe different species of local fauna.`,
  location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15706.7193816826!2d-84.17412055379313!3d10.206633138551537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f335428c57bf%3A0x2ce5d01ef70d61a6!2sCatarata%20de%20la%20Paz!5e0!3m2!1ses!2scr!4v1686609029510!5m2!1ses!2scr'
  },
  {
    id: 9,
    image: 'playa-hermosa.png',
    title: "Playa hermosa",
    subTitle: "Guanacaste",
    col: 6,
    description: `Winner of the “Blue Flag” award, an award given to beaches that demonstrate high environmental standards and excellent security facilities, Playa Bahía is seven kilometers north of Playas del Coco.
    Playa Hermosa lives up to its name for its idyllic beauty and its splendid surroundings.`,
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15688.343661121417!2d-85.68635355370951!3d10.572449833025303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e2a1991b3df37%3A0x17efe0a52c5452f3!2sProvincia%20de%20Guanacaste%2C%20Playa%20Hermosa!5e0!3m2!1ses!2scr!4v1686609068063!5m2!1ses!2scr'
  },
];

export default destinationsOne;
