
var questions = [
    'What was the first 3D RPG?', // 1
    'Just how big was The Elder Scrolls Arena\'s map?', // 2
    '_______ was innovative in that you won by being a good person, not by beating some all powerful demon.', // 3
    'The first licensed Dungeons & Dragons video games were made by ________', // 4
    'Who made the Wizardry series of games?', // 5
    'Just how big was The Elder Scrolls II: Daggerfall\'s map?', // 6
    'Ultima IX: Ascension was _______', // 7
    'Skyrim has been famously ported to many platforms, including Amazon Alexa and the screen of a pregnancy test.', //8
    'Okay, we got a little off topic. Here\'s another question: What was the FIRST *published* role playing video game?', // 9
    'Baldur\'s gate is a notoriously complex game. How long was the manual for the first game?', // 10
    'Grid based RPGs, such as Might & Magic and Wizardry are also known as:' // 11
]

var correctAnswers = [
    'Ultima Underworld', // 1
    'About the size of Australia', // 2
    'Ultima IV', // 3
    'Mattel', // 4
    'DW Bradley', // 5
    'About the size of Britain', // 6
    'The video game equivalent of a colonoscopy', // 7
    'True (Both)', // 8
    'Akalabeth', // 9
    '159 pages', // 10
    'Blobbers' // 11
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

    'Mother Theresa', // 5
    'Gandalf the Grey', // 5
    'A group of unemployed lima beans', // 5

    'Roughly the size of the sun', // 6
    'About 12GB', // 6
    'The United States', // 6

    '*Chef\'s kiss*', // 7
    'Art', // 7
    'Better than Bouillon!', // 7

    'True, but only for Amazon Alexa', // 8
    'True, but only for the pregnancy test', // 8
    'False', // 8

    'Dungeon (AKA pedit5)', // 9
    'Dragon Quest', // 9
    'Battlefield 2042', // 9

    'All of the pages. All of them.', // 10
    '203', // 10
    '89', // 10

    'Globbers', // 11
    'Terrible.', // 11
    'Souls-like' // 11
]

// A factoid shows after every question, regardless of whether the user got it right or not.
var factoids = [
    'Released in 1992, Ultima Underworld: The Stygian Abyss was indeed the first 3D RPG ever made. Other games such as Wizardry, Might & Magic, etc. had simulated 3D, Underworld was the first true 3D RPG where you could look up and down, jump, and many more fun activities!', // 1

    'Despite needing only 4mb of RAM and a 25mhz Intel Processor, Arena had a true 3D map the size of Australia! It accomplished this through procedural generation. Unfortunately, the world wasn\'t *really* this big, as you could not walk from one town to the next without fast travel despite the game manual saying you could. Thus, the size really was just an illusion. It being the size of Australia is taken from estimates based off of examining the world map and determining its real world size based off of that.', // 2

    'Richard Garriot, the creator of the Ultima Series, received many letters from angry parents who detested how violent their young ones were being in his previous Ultima titles. Richard was also disappointed, as he had designed the games around people being heroes, not kleptomaniacs. Thus, to beat his 4th game the player had to embody many different virtues such as compassion, valour, humility, etc. It also featured many moral dilemmas the player had to navigate. One such opportunity is when buying reagents for magic spells, the shop keeper is blind. The player can choose to be dishonest and pay the shopkeeper under what the total was, or be honest and pay the real amount of money. There is no immediate repercussion for either option, further enticing the player to take the dishonest route even though it is self-sabotage.', // 3

    'While SSI is generally credited with making the first "real" D&D video games, Mattel (Yes, the creators of Hot Wheels!) made the first D&D video game in the form of "Dungeons and Dragons Computer Fantasy Game" I mean look at those graphics! Doesn\'t it look fun? Apparently, the system has a small yet active following even today.', // 4

    'D.W. Bradley is the creator of the Wizardry series. While today he is often derided for continually re-releasing Dungeon Lords to us, (Which was barely a good game to begin with!) he used to actually be a highly regarded game developer!', // 5

    'Just like its predecessor, Daggerfall accomplished its gargantuan map size through procedural generation. Unlike its predecessor, however, this time it was real! You could indeed walk from one town to the next. The map took *sixty-nine* hours to cross on *horseback!* This is just how big the map was! Keep in mind, this game came out in 1996. Additionally, it featured over 15,000 locations to visit (Such as dungeons and cities) spread across 47 self contained countries with their own rulers, reputations and politics. It also had infinite quests like Todd Howard said Skyrim was going to have but never did! All in 1996! This is my favorite game of all time, if you can\'t tell. :-)', // 6

    'After the Ultima franchise was purchased by EA, they decided to rush out the 8th game in the series, Pagan. Following its mediocre reception, the 9th game was released. It was 3D, rushed, horrible and buggy. Richard Garriot is hated by many of his past fans today due to the fact that he sold the franchise to EA, and many call him a sellout for doing this. The game has a small following today and some fan patches are available. Despite this, even modders have not been able to turn the game into what it should have been.', // 7

    'Yes, Skryim is actually "playable" on both Amazon Alexa and a handy dandy pregnancy test! (Amazon Alexa: https://www.youtube.com/watch?v=a9XW--po6Dc&ab_channel=IGN), (Pregnancy Test. https://www.youtube.com/watch?v=e-3pr2DAz5M&list=PLSRCHY8fG8Cy4bXeGqmgRjQB5XSVD1bXl&index=1&ab_channel=UnknownForm)', // 8

    'While pedit5 came first, it was never published. Akalabeth, developed by Richard Garriot, was the precursor to the Ultima Series of video games and is typically named as the first, real, published RPG.', // 9

    'Baldur\'s gate really had a 159 page manual. I never read it. I never really got that into Baldur\'s gate...', // 10

    'They were called "Blobbers." Why? I have no idea. But that\'s the name!' // 11
]

// Each image is displayed above each question
var images = [
    './assets/images/Question1.jpg',
    './assets/images/Question2.jpg',
    './assets/images/Question3.jpg',
    './assets/images/Question4.jpg',
    './assets/images/Question5.jpg',
    './assets/images/Question6.jpg',
    './assets/images/Question7.jpg',
    './assets/images/Question8.png',
    './assets/images/Question9.png',
    './assets/images/Question10.jpg',
    './assets/images/Question11.jpg'
]

// Set up quiz page
var currentQuestion = 0;

function populateScreen() {
    // Main game 
    document.getElementById('quizImage').src = images[currentQuestion];
    document.getElementById('quizQuestion').textContent = questions[currentQuestion];

    // Populate answers
    index = [1,2,3,4].sort( () => .5 - Math.random() ); // Index now contains 0,1,2,3 in a randomized order

    document.getElementById('answer' + index[0]).textContent = correctAnswers[currentQuestion]
    document.getElementById('answer' + index[0]).addEventListener("click", () => {
        selectAnswer(true);
    })

    for(i = 1; i<=3; i++) {
        document.getElementById('answer' + index[i]).textContent = wrongAnswers[3*currentQuestion + i-1];
        document.getElementById('answer' + index[i]).addEventListener("click", () => {
            selectAnswer(false);
        })
        
    }
}
populateScreen();

function selectAnswer(isCorrect) {
    document.getElementById('answerFactoid').style.display = 'block';
    if(isCorrect) {
        document.getElementById('factoidText').textContent = "Correct! " + factoids[currentQuestion];
    } else {
        document.getElementById('factoidText').textContent = "Incorrect! " + factoids[currentQuestion];
    }

}
document.getElementById('uiButton').addEventListener("click", () => {
    console.log("oof");
    currentQuestion++;
    if(currentQuestion <= 10) {
        populateScreen();
        document.getElementById('answerFactoid').style.display = 'none';
    } else {
        window.location.assign('./highscores.html');
    }
})

