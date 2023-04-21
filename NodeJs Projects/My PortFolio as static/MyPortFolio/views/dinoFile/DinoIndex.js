const audio = new Audio('game.mp3');
const kill = new Audio('gameover.mp3');
let cross = true;
score = 0;
document.onkeydown = function(e) {
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('dinoAnimation');
        audio.play();
        setTimeout(() => {
            dino.classList.remove('dinoAnimation')
        }, 800);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }

    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + "px";
    }

    setInterval(() => {
        dino = document.querySelector(".dino");
        mount = document.querySelector(".mount");
        gameover = document.querySelector(".gameover");
        container = document.querySelector(".container");


        dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
        ox = parseInt(window.getComputedStyle(mount, null).getPropertyValue('left'));
        oy = parseInt(window.getComputedStyle(mount, null).getPropertyValue('top'));

        offsetX = Math.abs(dx - ox);
        offsetY = Math.abs(dy - oy);
        // cheak here
        if (offsetX < 50 && offsetY < 20) {
            gameover.innerHTML = "Game Over , Reload to play again";
            mount.classList.remove('mountAni');
            audio.pause();
            kill.play();
            setTimeout(() => {

                kill.pause();
            }, 2000);
        }
        // check here
        else if ((offsetX < 200 && cross) && offsetY > 10) {
            score += 5;
            updateScore(score);
            if (score > 25) {
                gameover.innerHTML = " Dino Adventures ! Level 2";
                gameover.style.background = "green";
                container.classList.remove('back1')
                    //container.classList.add('container');

            } else {
                gameover.style.background = "white";
            }
            if (score > 60) {
                gameover.innerHTML = "Dino Adventures ! Level 3";
                gameover.style.background = "Orange";
                container.classList.remove('back')
            }
            if (score > 100) {
                gameover.innerHTML = "Dino Adventures ! Level 4";
                gameover.style.background = "red";
                container.style.background = "pink"
            }
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);


            setTimeout(() => {
                anidur = parseFloat(window.getComputedStyle(mount, null).getPropertyValue('animation-duration'));
                newDur = anidur - 0.01;
                mount.style.animationDuration = newDur + "s";
            }, 500);
        }

    }, 10);
}



function updateScore(score) {
    document.getElementById("score").innerHTML = "Your Score is : " + score;
}