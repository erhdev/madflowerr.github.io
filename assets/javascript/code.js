var time;
var timeText;
var location;
var latlng;
var mapsURL;

function logPosition(position) {
    latlng = position.coords.latitude + "," + position.coords.longitude;
    latlng.toString();
    
    mapsURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlng + "&key=AIzaSyC1o1Xen2LI7c3nc8j1ksLNczyb8YkQ43E"
    getAddress();
}

function getAddress() {

    $.ajax({
        url: mapsURL,
        method: "GET"
    }).then(function(response) {
            console.log(response);    
    });
}

function setDate() {
    time = new Date;
    timeText = time.toLocaleString("en-US");
    timeText.slice(0, 36)
//  console.log(time);
//    if (time
    $("#timeBox").text("It is currently " + timeText + "in");
}
// Sat Nov 27 2021 11:53:14 GMT-0500 (Eastern Standard Time)




function playMusic() {
    document.querySelector("#music").play();
 }
 function yesFade() {
     $("#YES").fadeIn(20000)
 }
 function startGrinding() {
     $("#introElement").hide()
     console.log("The grind extends to the console too. Did you think that the grind would stop at the viewport?");
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
    navigator.geolocation.getCurrentPosition(logPosition);
    setDate();
    introElementFade();
    
    setInterval(function(){
        setDate();
    } , 1000)
})
