function createhighscore() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function (a, b) {
        return b.score - a.score;
    });
    console.log(highscores);
    
    for(let i=0; i< highscores.length; i++){
        var liTag = document.createElement("li");
        liTag.textContent = highscores[i].initials +" - "+ highscores[i].score;
        var element = document.getElementById("Highscores");
        element.appendChild(liTag);
    }
}

function clearscore() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}
createhighscore();

document.getElementById("Sweeper").onclick = clearscore;
