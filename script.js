var player;
var playermoveUp;
var playermoveDown;
var playermoveLeft;
var playermoveRight;
var playerupHeld;
var playerdownHeld;
var playerleftHeld;
var playerrightHeld;

document.addEventListener("keydown", function(event) {
    player = document.getElementById("player");
    if(event.key == "w") {
        if (!playermoveUp) {
            if (playermoveDown) {
                clearInterval(playermoveDown);
                playermoveDown = undefined;
                playerdownHeld = true;
            }
            playermoveUp = setInterval(function () {player.style.top = parseInt(player.style.top) - 2 + "px"}, 10);
        }
    } else if(event.key == "s") {
        if (!playermoveDown) {
            if (playermoveUp) {
                clearInterval(playermoveUp);
                playermoveUp = undefined;
                playerupHeld = true;
            }
            playermoveDown = setInterval(function () {player.style.top = parseInt(player.style.top) + 2 + "px"}, 10);
        }
    }
    if(event.key == "a") {
        if (!playermoveLeft) {
            if (playermoveRight) {
                clearInterval(playermoveRight);
                playermoveRight = undefined;
                playerrightHeld = true;
            }
            playermoveLeft = setInterval(function () {player.style.left = parseInt(player.style.left) - 2 + "px"}, 10);
        }
    } else if(event.key == "d") {
        if (!playermoveRight) {
            if (playermoveLeft) {
                clearInterval(playermoveLeft);
                playermoveLeft = undefined;
                playerleftHeld = true;
            }
            playermoveRight = setInterval(function () {player.style.left = parseInt(player.style.left) + 2 + "px"}, 10);
        }
    }
});

document.addEventListener("keyup", function(event) {
    if(event.key == "w") {
        playerupHeld = false;
        if (playermoveUp) {
            clearInterval(playermoveUp);
            playermoveUp = undefined;
            if (playerdownHeld) {
                playermoveDown = setInterval(function () {player.style.top = parseInt(player.style.top) + 2 + "px"}, 10);
            }
        }
    }
    if (event.key == "s") {
        playerdownHeld = false;
        if (playermoveDown) {
            clearInterval(playermoveDown);
            playermoveDown = undefined;
            if (playerupHeld) {
                playermoveUp = setInterval(function () {player.style.top = parseInt(player.style.top) - 2 + "px"}, 10);
            }
        }
    }
    if (event.key == "a") {
        playerleftHeld = false;
        if (playermoveLeft) {
            clearInterval(playermoveLeft);
            playermoveLeft = undefined;
            if (playerrightHeld) {
                playermoveRight = setInterval(function () {player.style.left = parseInt(player.style.left) + 2 + "px"}, 10);
            }
        }
    }
    if (event.key == "d") {
        playerrightHeld = false;
        if (playermoveRight) {
            clearInterval(playermoveRight);
            playermoveRight = undefined;
            if (playerleftHeld) {
                playermoveLeft = setInterval(function () {player.style.left = parseInt(player.style.left) - 2 + "px"}, 10);
            }
        }
    }
});