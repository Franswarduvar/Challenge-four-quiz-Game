var questionindex = 0;
var timeing = questions.length * 20;
var timeridentification = [];

var timeEl = document.querySelector("#time");
var generate = document.querySelector("#generate");
var submitBtn = document.querySelector("#submit-button");
var beginingScreen = document.querySelector("#start-section");
var quizPage = document.querySelector("#quiz-page");
var highScoreScreen = document.querySelector("#highscore-section");
var highScoreDisplay = document.querySelector("#highscore-display-section");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var questionsEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");

function startGame(){
    beginingScreen.setAttribute("class","hide");
    quizPage.setAttribute("class", "show");
     timerId = setInterval(tick, 1000);
     timeEl.textContent = time;
   
     grabThemQuestions();
}

function clock(){
    time--;
    timeEl.textContent = time;

    if(time <=0){
        quizEnd();
    }
}

function grabThemQuestions(){
    var Cquestionindex = questions[questionindex];
    var titleEL = document.getElementById("question-title");
    titleEL.textContent = Cquestionindex.title;

    choicesEl.innerHTML = "";

    Cquestionindex.choices.forEach(function(choices, x){
        var Nodething = document.createElement("button");
        Nodething.setAttribute("class","choice");
        Nodething.setAttribute("value","choice");
        Nodething.textContent = x + 1 + choices;
        Nodething.onclick = NextorEnd;
        choicesEl.appendChild(Nodething);

    })
}


function NextorEnd(){

}