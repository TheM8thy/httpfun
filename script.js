var player;
var playermoveUp;
var playermoveDown;
var playermoveLeft;
var playermoveRight;
var playerupHeld;
var playerdownHeld;
var playerleftHeld;
var playerrightHeld;
var crosshair;

function objectCenter(object) {
    let objectboundingRect = object.getBoundingClientRect();
    return {
        x: parseInt(object.style.left) + objectboundingRect.width/2,
        y: parseInt(object.style.top) + objectboundingRect.height/2
    };
}

function movePlayer(object, direction, distance, object2) {
    if (direction == "top") {
        object.style.top = `${parseInt(object.style.top) + distance}px`;
    } else if (direction == "left") {
        object.style.left = `${parseInt(object.style.left) + distance}px`;
    }
    object2.style.transformOrigin = `${objectCenter(player).x} ${objectCenter(player).y}`;
}


document.addEventListener("keydown", function(event) {
    player = document.getElementById("player");
    crosshair = document.getElementById("crosshair");
    if(event.key == "w") {
        if (!playermoveUp) {
            if (playermoveDown) {
                clearInterval(playermoveDown);
                playermoveDown = undefined;
                playerdownHeld = true;
            }
            playermoveUp = setInterval(movePlayer, 10, player, "top", -2, crosshair);
        }
    } else if(event.key == "s") {
        if (!playermoveDown) {
            if (playermoveUp) {
                clearInterval(playermoveUp);
                playermoveUp = undefined;
                playerupHeld = true;
            }
            playermoveDown = setInterval(movePlayer, 10, player, "top", 2, crosshair);
        }
    }
    if(event.key == "a") {
        if (!playermoveLeft) {
            if (playermoveRight) {
                clearInterval(playermoveRight);
                playermoveRight = undefined;
                playerrightHeld = true;
            }
            playermoveLeft = setInterval(movePlayer, 10, player, "left", -2, crosshair);
        }
    } else if(event.key == "d") {
        if (!playermoveRight) {
            if (playermoveLeft) {
                clearInterval(playermoveLeft);
                playermoveLeft = undefined;
                playerleftHeld = true;
            }
            playermoveRight = setInterval(movePlayer, 10, player, "left", 2, crosshair);
        }
    }
});

document.addEventListener("keyup", function(event) {
    player = document.getElementById("player");
    crosshair = document.getElementById("crosshair");
    if(event.key == "w") {
        playerupHeld = false;
        if (playermoveUp) {
            clearInterval(playermoveUp);
            playermoveUp = undefined;
            if (playerdownHeld) {
                playermoveDown = setInterval(movePlayer, 10, player, "top", -2, crosshair);
            }
        }
    }
    if (event.key == "s") {
        playerdownHeld = false;
        if (playermoveDown) {
            clearInterval(playermoveDown);
            playermoveDown = undefined;
            if (playerupHeld) {
                playermoveUp = setInterval(movePlayer, 10, player, "top", 2, crosshair);
            }
        }
    }
    if (event.key == "a") {
        playerleftHeld = false;
        if (playermoveLeft) {
            clearInterval(playermoveLeft);
            playermoveLeft = undefined;
            if (playerrightHeld) {
                playermoveRight = setInterval(movePlayer, 10, player, "left", -2, crosshair);
            }
        }
    }
    if (event.key == "d") {
        playerrightHeld = false;
        if (playermoveRight) {
            clearInterval(playermoveRight);
            playermoveRight = undefined;
            if (playerleftHeld) {
                playermoveLeft = setInterval(movePlayer, 10, player, "left", 2, crosshair);
            }
        }
    }
});


document.addEventListener("mousemove", e => {
    player = document.getElementById("player");
    crosshair = document.getElementById("crosshair");
    let playercenter = objectCenter(player);
    // console.log(playercenter);
    let angle = Math.atan2(e.pageX - playercenter.x, - (e.pageY - playercenter.y) )*(180 / Math.PI);
    crosshair.style.transform = `rotate(${angle}deg)`;
})