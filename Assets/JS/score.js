function createhighscore(){
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function(a, b){
        return b.score - a.score;
    });

highscores.array.forEach(element => {
    var Tag = document.createElement("Tag");
    Tag.textContent = score.initials + score.score;
    var element = document.getElementById("highscores");
    element.appendChild(Tag);
});
}

document.getElementById("clear").onclick = clearscore;

function clearscore(){
    window.localStorage.removeItem("highscores");
    window.location.reload();
}
printhighscores();