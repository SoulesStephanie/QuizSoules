const quizContainer = document.getElementByID('quiz');
const scoreContainer = document.getElementById('score');
const timeContainer = document.getElementById('timer')
const beginbutton = document.getElementById('highscores');
const scoreBoardLink = document.getElementById('answers');
var answercontainer = document.getElementById('answers');
var answerButtons = document.getElementsById('button-answer');
var questionCounter= 0;
var userScore = 0;
var questionNumber = 0;
var userAnswer ="";
var count;
var answerCheck = "";
var interval;
var scoreBoard = [];
constmyQuestions= [
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