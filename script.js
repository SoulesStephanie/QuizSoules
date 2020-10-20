const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('highscores');
const timerContainer = document.getElementById('timer');
const startButton = document.getElementById('start');
const scoreBoardLink = document.getElementById('answers');
var answerContainer = document.getElementsByClassName('answers');
var answerButtons = document.getElementsByClassName('button-answer');
var questionCounter = 0;
var userScore = 0;
var questionNumber = 0;
var userAnswer = "";
var count;
var answerCheck = "";
var interval;
var scoreboard = [];
const myQuestions = [
{
    Question: "Who said Toto, I've got a feeling we're not in Kansas anymore?",
    answers: {
     A: "Donald Trump",
    B: "Dorthy",
    C: "Auntie Em",
},
    correctAnswer: "B"
},
{
    Question: "Who is Jerry Seinfeld's favorite superhero?",
    answers: {
     A: "Superman",
     B: "Posion Ivy",
     C: "Captain America",
},
     correctAnswer: "A"
},
{
    Question: "Where was the first recorded recipe for apple pie from?",
    answers: {
    A: "USA",
    B: "England",
    C: "Italy",
    D: "France",
},
    correctAnswer: "B"
},
{
    Question: "What is Scotland's national animal?",
    answers: {
    A: "Nessie",
    B: " A Unicorn",
    C: "Scottish Terrier Dog",
    D: "They do not have one",
},
    correctAnswer: "B"
},
{
    Question: "What kind of bird can mimic almost any sound it hears - including chainsaws?",
    answers: {
    A: "Crow",
    B: "Blue and Gold Macaw",
    C: "Lyrebird",
    D: "Budgie",
},
    correctAnswer: "C"
},
{
    Question: "About how many grapes go into one bottle of red wine?",
    answers: {
    A: "700",
    B: "2500",
    C: "10,000",
    D: "450",
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
    quizContainer.innerHTML = '<h1>High Scores</h1><br>' + playAgainBtn.join();
    $('#play-again').click(buildQuiz);
});
    $('#play-again').click(buildQuiz);

}
function generateQuestion() {   							
    var currentQuestion = myQuestions[questionCounter];
    const output = [];
    const answers = [];

   
    if (questionCounter < 5) {
        for (letter in currentQuestion.answers) {

        
answers.push(
                `<br>
        <label>
        <button name="question${questionNumber}" value="${letter}" class="button-answer">  				
        ${letter} :
        ${currentQuestion.answers[letter]}
        </button>
        </label>`
        );
        }

        
        output.push(
            `<br><div class="question"> ${currentQuestion.Question} </div><br>
    <div class="answers"> ${answers.join('')} </div>`
        );
        quizContainer.innerHTML = output.join('');
    }
    $('.button-answer').click(function(event) {
        userAnswer = event.target.value;
        
        console.log(userAnswer)
        if (questionCounter < 5) {
            checkAnswer(userAnswer);
        }
        else {
            userScore = count;
            console.log(count)
            clearInterval(interval)
            output.push(
                `<h1>All done!</h1>`
            )
            quizContainer.innerHTML = output.join('');
        }
    });
    if (questionCounter > 4) {
        console.log(userAnswer);
        if (count < 0)
            count = 0;
        userScore = count;
        console.log(count)
        clearInterval(interval)
        timerContainer.innerHTML = "Time: " + count;
        output.push(
            `<h1>All done!</h1><br>
            <p>Your score is ${userScore}</p><br>
            <form>
             Enter Intials:   
            <input type="text" id="username"><br><br>
            <input type="submit" id="sub-btn" value="Submit">
            </form>`
        )
        quizContainer.innerHTML = output.join('');
        $('#sub-btn').click(function () {
            var userTemp = document.getElementById('username').value;
            event.preventDefault();
            if (userTemp === "") {
                alert("Must enter something for intials.")
                return
            }
            if (localStorage.length != 0)
                scoreboard = JSON.parse(localStorage.getItem("scoreboard"));
            userTemp = document.getElementById('username').value;
            var tempUserObj = {};
            tempUserObj = { username: userTemp, score: userScore }
            scoreboard.push(tempUserObj);
            console.log(scoreboard);
            
            scoreboard.sort(function (a, b) {
                return parseInt(a.score) - parseInt(b.score)
            });
        
    
            localStorage.setItem("scoreboard", JSON.stringify(scoreboard.reverse()));
            generateScoreBoard();
            
            

            
        })
    }

}

// function to begin building the quiz. basically a constructor. 
// Resets questionCounter and questionNumber to 0 so that when the user clicks play again,
// the quiz starts over. This also starts my interval timer.

function buildQuiz() {
    questionCounter = 0;
    questionNumber = 0;
    count = 75;
    startButton.style.visibility = 'hidden';
    interval = setInterval(function () {
        count--;
        timerContainer.innerHTML = "Time: " + count;
        if (count <= 0 ) {
            clearInterval(interval);
            alert("You're out of time!");
            generateScoreBoard();
        }
    }, 1000);
    console.log("building")
    generateQuestion();
    
}
// this function checks if the users answer to the question is right. 
// It also increments the question counter so that the correct question is displayed
function checkAnswer(userAnswer){
    console.log(myQuestions[questionCounter].correctAnswer)
    if (String(userAnswer) === myQuestions[questionCounter].correctAnswer && questionCounter < 5) {
        console.log(myQuestions[questionCounter].correctAnswer)
        questionCounter++;
        questionNumber++;
        resultsContainer.innerHTML = 'Correct!';
        userAnswer = "";
        generateQuestion();
        setTimeout(function () {
            resultsContainer.innerHTML = '';
        }, 1000)
    }
    else if (questionCounter < 5) {
        count -= 15;
        questionCounter++;
        questionNumber++;
        resultsContainer.innerHTML = 'Incorrect!';
        userAnswer = "";
        generateQuestion();
        setTimeout(function () {
            resultsContainer.innerHTML = '';
        }, 1000)
    } 
}


// on click listener
startButton.addEventListener('click', buildQuiz);
$('.link-highscore').click(function () {
    startButton.style.visibility = 'hidden';
    clearInterval(interval);
    generateScoreBoard();
});

