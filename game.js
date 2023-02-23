
var buttoncolours=["green","red","blue","yellow"];

var gamePattern = [];
var userClickedPattern = [];
level=0;
started = false;

$(document).keypress(function(){
        if(!started){
        $(".header").text("level " + level);
        nextSequence();
        started = true;
    }
    }
);

$(".btn").click(function(){
    console.log("harshhhhh");
  var  userChosencolour = $(this).attr("id");
       userClickedPattern.push(userChosencolour);

    // playSound(userChosencolour);
    makeSound(userChosencolour);
    animatePress(userChosencolour);

    checkAnswer(userClickedPattern.length-1);


});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        // playSound(wrong);       
        makeSound("wrong"); 
        $("body").addClass("game-over");
        // $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
        $(".header").text("Game Over, Press Any Key to Restart");

        startOver();

    }
}



function nextSequence(){
        userClickedPattern=[];
        level++;
        // neww
        $(".header").text("Level " + level);
        var randomNumberChosen= Math.floor(Math.random()*4);
        var randomcolourChosen=buttoncolours[randomNumberChosen];
        gamePattern.push(randomcolourChosen);

        $("#" + randomcolourChosen).fadeIn(100).fadeOut(100).fadeIn(100);
        makeSound(randomcolourChosen);
       
}

function animatePress(currentcolour){
    $("#" + currentcolour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentcolour).removeClass("pressed");
    },100);
}
function makeSound(name){
    var sound = new Audio("sounds/"+ name + ".mp3");
    sound.play();
}

function startOver(){
    level = 0;
    gamePattern=[];
    started = false;
}
