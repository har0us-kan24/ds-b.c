// JUMBOTRON Define


// MODAL Define
var modal = document.getElementById('modal');
    // MODAL Open Button
    var btnOpen = document.getElementById('btnOpen');
    // MODAL Close Button
    var btnClose = document.getElementById('btnClose');


// JUMBOTRON Execute
window.onload = function() {
    var currentTime = new Date().getHours();
    var bgImg = document.getElementById('bgImg');

    if (5 <= currentTime && currentTime < 6) { /* SUNRISE/DAWN Time */
        bgImg.style.backgroundImage = 'url("./img/jumbotron-sunrise.jpg")';
    } else if (17 <= currentTime && currentTime < 18) { /* SUNSET Time */
        bgImg.style.backgroundImage = 'url("./img/jumbotron-sunset.jpg")';
    } else if (6 <= currentTime && currentTime < 11) { /* MORNING Time */
        bgImg.style.backgroundImage = 'url("./img/jumbotron-morning.jpg")';
    } else if (11 <= currentTime && currentTime < 13) { /* NOON Time */
        bgImg.style.backgroundImage = 'url("./img/jumbotron-noon.jpg")';
    } else if (13 <= currentTime && currentTime < 17) { /* AFTERNOON Time */
        bgImg.style.backgroundImage = 'url("./img/jumbotron-afternoon.jpg")';
    } else if (18 <= currentTime && currentTime < 20) { /* EVENING Time */
        bgImg.style.backgroundImage = 'url("./img/jumbotron-evening.jpg")';
    } else if (20 <= currentTime || currentTime < 5) { /* NIGHT Time */
        bgImg.style.backgroundImage = 'url("./img/jumbotron-night.jpg")';
    } else {
        bgImg.style.backgroundImage = 'url("./img/jumbotron.jpg")';
    }
}


// MODAL OPEN Start
btnOpen.onclick = function() {
    modal.style.display = "block";
}
// MODAL OPEN End

// MODAL CLOSE Start
btnClose.onclick = function() {
    modal.style.display = "none";
}
// MODAL OPEN End