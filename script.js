const quizContainer = document.getElementByID('quiz');
const scoreContainer = document.getElementById('score');
const timeContainer = document.getElementById('timer')
const beginbutton = document.getElementById('highscores');
const scoreBoardLink = document.getElementById('answers');
var answercontainer = document.getElementById('answers');
var answerButtons = document.getElementsById('button-answer');
var questionCounter = 0;
var userScore = 0;
var questionNumber = 0;
var userAnswer = "";
var count;
var answerCheck = "";
var interval;
var scoreBoard = [];
constmyQuestions = [
    {
Question: "Who said Toto, I've got a feeling we're not in Kansas anymore?",
answers: {
         A: "Donald Trump",
        B: "Dorthy",
        C: "Auntie Em"
        D: "Glenda the Good Witch of the South"
},
    correctAnswer: "B"
    },
    {
        Question: "Who is Jerry Seinfeld's favorite superhero?",
        answers: {
            A: "Batman",
            B: "Posion Ivy",
            C: "Captain America"
    D: "Superman"
        },
        correctAnswer: "D"
    },
    {
        Question: "Where was the first recorded recipe for apple pie from?",
        answers: {
            A: "USA",
            B: "England",
            C: "Italy"
            D: "France"
        },
        correctAnswer: "B"
    },
    {
        Question: "What is Scotland's national animal?",
        answers: {
            A: "Nessie",
            B: "Unicorn",
            C: "Scottish Terrier Dog"
            D: "They don't have one"
        },
        correctAnswer: "B"
    },
    {
        Question: "What kind of bird can mimic almost any sounds it hears - including chainsaws?",
        answers: {
            A: "Crow",
            B: "Blue and Gold Macaw",
            C: "Lyrebird"
            D: "Parakeet/Budgie"
        },
        correctAnswer: "C"
    },
    {
        Question: "About how many grapes go into one bottle of red wine?",
        answers: {
            A: "700",
            B: "2500",
            C: "10,000"
            D: "450"
        },
        correctAnswer: "A"
    },