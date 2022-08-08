
var questions = [
    'What was the first 3D RPG?', // 1
    'Just how big was The Elder Scrolls Arena\'s map?',
    '_______ was innovative in that you won by being a good person, not by beating some all powerful demon.', // 2
    'The first licensed Dungeons & Dragons video games were made by ________', // 3
    'Who made the Wizardry series of games?', // 4
    'Just how big was the Elder Scrolls Daggerfall\'s map?', // 5
    'Ultima IX: Ascension was _______', // 6
    'Skyrim has been famously ported to many platforms, including Amazon Alexa and the screen of a pregnancy test.', //7
    'Okay, we got a little off topic. Here\'s another question: What was the FIRST *published* role playing video game?', // 8
    'Baldur\'s gate is a notoriously complex game. How long was the manual for the first game?', // 9
    'Grid based RPGs, such as Might & Magic and Wizardry are also known as:' // 10
]

var correctAnswers = [
    'Ultima Underworld', // 1
    'About the size of Australia', // 2
    'Ultima IV', // 3
    'Mattel', // 4
    'About the size of Britain', // 5
    'The video game equivalent of a colonoscopy', // 6
    'True (Both)', // 7
    'Akalabeth', // 8
    '159 pages', // 9
    'Blobbers' // 10
]

// Three wrong answers per 1 correct answer so that there are 4 possible choices
var wrongAnswers = [
    'Wolfenstein 3D', // 1
    'Might & Magic', // 1
    'Super Dinosaur Game: Play as a real dino!', // 1

    'As big as da earth', // 2
    'Bigger than the solar system', // 2
    'About as large as my incompetence with social situations', // 2

    'Rambo: The Video Game', // 3
    'Redneck Rampage', // 3
    'Hitman 3', // 3

    'SSI (Strategic Simulations)', // 4
    'EA', // 4
    'RedShift', // 4

    'Roughly the size of the sun', // 5
    'About 12GB', // 5
    'The United States', // 5

    '*Chef\'s kiss*', // 6
    'Art', // 6
    'Better than Bouillon!', // 6

    'True, but only for Amazon Alexa', // 7
    'True, but only for the pregnancy test', // 7
    'False', // 7

    'Dungeon (AKA pedit5)', // 8
    'Dragon Quest', // 8
    'Battlefield 2042', // 8

    'All of the pages. All of them.', // 9
    '203', // 9
    '89', // 9

    'Globbers', // 10
    'Terrible.', // 10
    'Souls-like' // 10
]

// A factoid shows after every question, regardless of whether the user got it right or not.
var factoids = [
    'Released in 1992, Ultima Underworld: The Stygian Abyss was indeed the first 3D RPG ever made. Other games such as Wizardry, Might & Magic, etc. had simulated 3D, Underworld was the first true 3D RPG where you could look up and down, jump, and many more fun activities!', // 1

    'Despite needing only 4mb of RAM and a 25mhz Intel Processor, Arena had a true 3D map the size of Australia! It accomplished this through procedural generation. Unfortunately, the world wasn\'t *really* this big, as you could not walk from one town to the next without fast travel despite the game manual saying you could. Thus, the size really was just an illusion. It being the size of Australia is taken from estimates based off of examining the world map and determining its real world size based off of that.', // 2

    'Richard Garriot, the creator of the Ultima Series, received many letters from angry parents who detested how violent their young ones were being in his previous Ultima titles. Richard was also disappointed, as he had designed the games around people being heroes, not kleptomaniacs. Thus, the goal of his 4th game was to embody many different virtues and present the player with moral dilemmas. One such opportunity is when buying reagents for magic spells, the shop keeper is blind. The player can choose to be dishonest and pay the shopkeeper under what the total was, or be honest and pay the real amount of money.', // 3

    'While SSI is generally credited with making the first "real" D&D video games, Mattel (Yes, the creators of Hot Wheels!) made the first D&D video game in the form of "Dungeons and Dragons Computer Fantasy Game"', // 4

    'D.W. Bradley is the creator of the Wizardry series. While today he is often derided for continually re-releasing Dungeon Lords (Which was barely a good game to begin with) he used to actually be a highly regarded game developer!', // 5

    'After the Ultima franchise was purchased by EA, they decided to rush out the 8th game in the series, Pagan. Following its mediocre reception, the 9th game was released. It was 3D, rushed, horrible and buggy. Richard Garriot is hated by many of his past fans today due to the fact that he sold the franchis to EA, and many call him a sellout for doing this.', // 6

    'Yes, Skryim is actually "playable" on both Amazon Alexa and a handy dandy pregnancy test! (Amazon Alexa: https://www.youtube.com/watch?v=a9XW--po6Dc&ab_channel=IGN), (Pregnancy Test. https://www.youtube.com/watch?v=e-3pr2DAz5M&list=PLSRCHY8fG8Cy4bXeGqmgRjQB5XSVD1bXl&index=1&ab_channel=UnknownForm)', // 7

    'While pedit5 came first, it was never published. Akalabeth, developed by Richard Garriot, was the precursor to the Ultima Series of video games and is typically named as the first, real, published RPG.', // 8

    'Baldur\'s gate really had a 159 page manual. I never read it. I never really got that into Baldur\'s gate...', // 9

    'They were called "Blobbers." Why? I have no idea. But that\'s the name!' // 10
]

// Each image is displayed above each question
var images = [
    './assets/images/Question1.jpg',
    './assets/images/Question2.jpg',
    './assets/images/Question3.jpg',
    './assets/images/Question4.jpg',
    './assets/images/Question5.jpg',
    './assets/images/Question6.jpg',
    './assets/images/Question7.png',
    './assets/images/Question8.png',
    './assets/images/Question9.jpg',
    './assets/images/Question10.jpg'
]