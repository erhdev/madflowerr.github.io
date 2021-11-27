var time;
var timeText;
var place;
console.log(place)
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
            var commaLocation = response.results[5].formatted_address.indexOf(",");
            place = response.results[5].formatted_address.slice(0, commaLocation);
            $("#placeBox").text(" in " + place + ".")
            $("#placeBox").fadeIn(400);
    });
}

function setDate() {
    time = new Date;
    timeText = time.toLocaleString("en-US");
    timeText.slice(0, 36)
//  console.log(time);
//    if (time
    $("#timeBox").text("It is currently " + timeText);
}

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

 function placeBoxFade() {
     console.log("firing")
     console.log(place)
     if(typeof place !== "undefined") {
         console.log("firing")
        
     }
 }

$( document ).ready(function() {
    navigator.geolocation.getCurrentPosition(logPosition);
    setDate();
    introElementFade();
    
    setInterval(function(){
        setDate();
    } , 1000)
    placeBoxFade();
})
