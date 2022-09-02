var questions = [
    {
        title: "Commonly Used data types DO NOT include:",
        choices: ["stings", "alerts", "booleans", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statment is enclosed within _____.",
        choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What javascipt method can we use to select an html element?",
        choices: ["document.queryselector()", "document.getElementChild", "document.getElementById", "Both 1 and 3"],
        answer: "Both 1 and 3"
    },
    {
        title: "What html tag is NOT included in the HEAD tag?",
        choices: ["link", "meta", "title", "header"],
        answer: "header"
    },
    {
        title: "What attribute is used in html to decorate content?",
        choices: ["css", "class", "src", "style"],
        answer: "style"
    }
]

var questionindex = 0;
var time = questions.length * 20;
var timeridentification;

var timeEl = document.querySelector("#time");
var generate = document.querySelector("#generate");
var submitBtn = document.querySelector("#submit-button");
var beginingScreen = document.querySelector("#title-section");
var quizPage = document.querySelector("#quiz-section");
var highScoreScreen = document.querySelector("#HighScore-Section");
var highScoreDisplay = document.querySelector("#highscore-display-section");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var questionsEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var startBtn = document.querySelector("#startButton");
var timerId;

function startGame() {
    beginingScreen.setAttribute("class", "hide");
    timerId = setInterval(clock, 1000);
    timeEl.textContent = time;
    quizPage.classList.remove("hide");
    grabThemQuestions();
}

function clock() {
    time--;
    timeEl.textContent = time;

    if (time <= 0) {
        EndofTheLine();
    }
}

function grabThemQuestions() {
    var Cquestionindex = questions[questionindex];
    var titleEL = document.getElementById("question-title");
    titleEL.textContent = Cquestionindex.title;

    choicesEl.innerHTML = "";

    Cquestionindex.choices.forEach(function (choices, x) {
        var Nodething = document.createElement("button");
        Nodething.setAttribute("class", "choice");
        Nodething.setAttribute("value", choices);
        Nodething.textContent = x + 1 + choices;
        Nodething.onclick = NextorEnd;
        choicesEl.appendChild(Nodething);

    })
}


function NextorEnd() {
    console.log(this.value);
    if (this.value !== questions[questionindex].answer) {
        time -= 10;
        timeEl.textContent = time;
        if (time <= 0) {
            EndofTheLine();
        }

        feedbackEl.textContent = "Incorect :(";
    } else {
        feedbackEl.textContent = "Correct :)";
    }


    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000
    );

    questionindex++;
    if (questionindex === questions.length) {
        EndofTheLine();
    } else {
        grabThemQuestions();
    }
}
function EndofTheLine() {
    clearInterval(timerId);
    quizPage.setAttribute("class", "hide");
    var HighScoreSection = document.querySelector("#highscore-section");
    HighScoreSection.classList.remove("hide");
    var EndScore = document.querySelector("#final-score");
    EndScore.textContent = time;
}

function CreateFinalScore() {
    var initials = initialsEl.value.trim();
    if (initials !== "") {
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [] 
        var newScore = {
            score: time,
            initials: initials
        }
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        window.location.href = "outsidepage.html";

    }
}

function EventListoner(event) {
    if (event.key === "Enter") {
        CreateFinalScore();
    }
}

submitBtn.onclick = CreateFinalScore;
startBtn.onclick = startGame;
initialsEl.onkeyup = EventListoner;