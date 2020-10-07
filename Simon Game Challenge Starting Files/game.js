var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStarted = !true;

$(document).keydown(function(key) {
    // $("#level-title").text("Level " + level);
    if (!gameStarted) {
        nextSequence();
        $("#level-title").text("Level " + level);
    } 
    gameStarted = true;
});


function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(150).fadeIn(150);
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
    level++
    $("#level-title").text("Level " + level);
    userClickedPattern = [];
}

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    // var userChosenColor = btnClicked.target.id;
    $("#" + userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
    
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function playSound (evt) { 
    var soundEffect = new Audio("sounds/" + evt +".mp3");
    soundEffect.play();
};

function animatePress(currentColor) {
        $("#" + currentColor).addClass("pressed");
        setTimeout(function() { 
            $("#" + currentColor).removeClass("pressed"); 
        }, 100);
}

function checkAnswer(currentLevel){
    
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () { 
                nextSequence();
            }, 1000);
        }
        
    } else {
        playSound("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart")
        $("body").addClass("game-over")
        setTimeout(function () {
            $("body").removeClass("game-over")
        }, 250);
        startOver()
    }
}

function startOver() {
    gamePattern=[];
    level=0;
    gameStarted = !true;
}
    
