function setDate() {
    var time =new Date;
    time.toLocaleString("en-US");
    $("#timeBox").text("It is currently " + time + ".");
}

function playMusic() {
   document.querySelector("#music").play();
}
function yesFade() {
    $("#YES").fadeIn(20000)
}
function startGrinding() {
    $("#introElement").hide()
    playMusic();
    document.body.style.backgroundColor = "black";
    setTimeout(yesFade, 4500);
}

$("#goButton").click( function() {
startGrinding();
})

function introElementFade() { 
    $("#introElement").fadeIn(500);
}

$( document ).ready(function() {
    setDate();
    introElementFade();
    console.log("firing")
})