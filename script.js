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
    }
];
function generateScoreBoard() {
    quizContainer.innerHTML = "<h1>High Scores</h1><br>";   			
    var scoreboardTemp = JSON.parse(localStorage.getItem("scoreboard"));
    var playAgainBtn = [];
    playAgainBtn.push(`<br>
    <label>
    <button id="play-again">Play Again?
    </button>
    <button id="reset-score">Reset Scoreboard?
    </button>
    </label>`)
    var ol = document.createElement("ol")
    if (scoreboardTemp !== null) {
        for (var i = 0; i < scoreboardTemp.length; i++) {
        
            console.log(scoreboardTemp)
            var li = document.createElement("li");
            li.textContent = scoreboardTemp[i].username + " - " + scoreboardTemp[i].score;
            li.setAttribute("data-index", i);

            ol.appendChild(li);
        }
    }
    quizContainer.appendChild(ol);
    quizContainer.innerHTML += playAgainBtn.join('');
    $('#reset-score').click(function () {
        localStorage.clear();
        scoreboard = [];
        quizContainer.innerHTML = '<h1>High Scores</h1><br>'+playAgainBtn.join();
        $('#play-again').click(buildQuiz);
    });
    $('#play-again').click(buildQuiz);
    
}