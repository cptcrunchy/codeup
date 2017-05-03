var score = 0;
var simon = [];
var userGuess = [];
var pwrStatus = 'Off';
var gameOver = false;
var strictMode = "Off";
var winCondition = 5;
var simonInterval = 1500;
var defSpeed = 300; //speed is in ms
var speed = 2; //speed multiplier
var doneFlag = false;
var timeout;
var errorSound;

oCanvas.domReady(function() {
    var canvas = oCanvas.create({
        canvas: "#canvas",
        background: "transparent"
    });

    // Draw Game Case
    var frame = canvas.display.arc({
        x: 260,
        y: 260,
        radius: 260,
        start: 0,
        end: 360,
        fill: "#000"
    });
    canvas.addChild(frame);
    // Draw Inner Game Frame
    var innerFrame = canvas.display.ellipse({
        x: 260,
        y: 260,
        radius: 130,
        fill: "#333"
    });
    canvas.addChild(innerFrame);
    // Draw Inner Game Disc
    var innerDisc = canvas.display.ellipse({
        x: 260,
        y: 260,
        radius: 100,
        fill: "radial-gradient(center, center, #b5bdc8 0%, #d0d8e5 22%, #828c95 47%, #bac0c6 71%, #28343b 100%);"
    });
    canvas.addChild(innerDisc);
    // Draw Button Panel
    var scorePanel = canvas.display.arc({
        x: 260,
        y: 260,
        radius: 100,
        start: 19,
        end: 160,
        fill: "linear-gradient(45deg, #111 0%, #000000 100%);"
    });
    canvas.addChild(scorePanel);
    // Draw Score Box
    var scoreTextValue = canvas.display.text({
        x: 260,
        y: 340,
        origin: { x: 'center', y: 'center' },
        font: "30px Orbitron",
        text: "00",
        fill: "#333"
    })
    canvas.addChild(scoreTextValue);
    // Score Label
    var scoreLabel = canvas.display.text({
        x: 255,
        y: 298,
        origin: {
            x: "center",
            y: "middle"
        },
        font: "24px Orbitron",
        text: "Score",
        fill: "#333"
    });
    canvas.addChild(scoreLabel);

    // ************** GAME BUTTONS ****************** //

    // ************** GREEN BUTTON ****************** //
    // Draw Green Button
    var greenBtn = canvas.display.arc({
        x: 255,
        y: 255,
        radius: 172,
        start: 180,
        end: 270,
        stroke: "140px #0f0",
        shadow: "0 0 20px rgba(0,0,0, 0.8)"
    });
    canvas.addChild(greenBtn);

    // Green button click listener
    greenBtn.bind("click tap", function handler() {
        if (pwrStatus == "Off" && gameOver !== true) {
            this.unbind("click tap", handler);
        } else {
            clearTimeout(timeout);
            userGuess.push(greenBtnPush());
            getUserInput();
        }
    });
    // Green button Push function
    function greenBtnPush() {
        greenBtn.stroke = '135px #77e377';
        playSound(0);
        console.log("Green");
        canvas.redraw();
        setTimeout(function() {
            greenBtn.stroke = "140px #0f0";
            canvas.redraw();
        }, defSpeed * speed);
        return 1;
    }

    // ************** RED BUTTON ****************** //
    // Draw Red Button
    var redBtn = canvas.display.arc({
        x: 265,
        y: 255,
        radius: 172,
        start: 270,
        end: 0,
        stroke: "140px #f00",
        shadow: "0 0 20px rgba(0,0,0, 0.8)"
    });
    canvas.addChild(redBtn);
    // Red button click listener
    redBtn.bind("click tap", function handler() {
        if (pwrStatus == "Off" && gameOver !== true) {
            this.unbind("click tap", handler);
        } else {
            clearTimeout(timeout);
            userGuess.push(redBtnPush());
            getUserInput();
        }

    });
    // Red button Push function
    function redBtnPush() {
        redBtn.stroke = '135px #f95d5d';
        playSound(1);
        console.log("Red");
        canvas.redraw();
        setTimeout(function() {
            redBtn.stroke = "140px #f00";
            canvas.redraw();
        }, defSpeed * speed);
        return 2;
    }

    // ************** BLUE BUTTON ****************** //
    // Draw Blue Button
    var blueBtn = canvas.display.arc({
        x: 265,
        y: 265,
        radius: 172,
        start: 0,
        end: 90,
        stroke: "140px #00f",
        shadow: "0 0 20px rgba(0,0,0, 0.8)"
    });
    canvas.addChild(blueBtn);
    // Blue button click listener
    blueBtn.bind("click tap", function handler() {
        if (pwrStatus == "Off" && gameOver !== true) {
            this.unbind("click tap", handler);
        } else {
            clearTimeout(timeout);
            userGuess.push(blueBtnPush());
            getUserInput();
        }
    });
    // Blue button Push function
    function blueBtnPush() {
        blueBtn.stroke = '135px #5050e7';
        playSound(2);
        console.log("Blue");
        canvas.redraw();
        setTimeout(function() {
            blueBtn.stroke = "140px #00f";
            canvas.redraw();
        }, defSpeed * speed);
        return 3;
    }

    // ************** YELLOW BUTTON ****************** //
    // Draw Yellow Button
    var yellowBtn = canvas.display.arc({
        x: 255,
        y: 265,
        radius: 172,
        start: 90,
        end: 180,
        stroke: "140px #ff0",
        shadow: "0 0 20px rgba(0,0,0, 0.8)"
    });
    canvas.addChild(yellowBtn);
    // Yellow button click listener
    yellowBtn.bind("click tap", function handler() {
        if (pwrStatus == "Off" && gameOver !== true) {
            this.unbind("click tap", handler);
        } else {
            clearTimeout(timeout);
            userGuess.push(yellowBtnPush());
            getUserInput();
        }
    });
    // Yellow button Push function
    function yellowBtnPush() {
        yellowBtn.stroke = '135px #dddd6e';
        playSound(3);
        console.log("Yellow");
        canvas.redraw();
        setTimeout(function() {
            yellowBtn.stroke = "140px #ff0";
            canvas.redraw();
        }, defSpeed * speed);
        return 4;
    }

    // ************** OPERATION BUTTONS ****************** //
    // Draw Simon Logo
    var simonLogo = canvas.display.text({
        x: 260,
        y: 180,
        origin: { x: "center", y: "middle" },
        font: "32vw Orbitron",
        text: "Simon",
        fill: "#222"
    });
    canvas.addChild(simonLogo);

    // ************** STRICT MODE BUTTON ****************** //

    // Draw Strict Button
    var strictBtn = canvas.display.ellipse({
        x: 260,
        y: 257,
        radius: 15,
        fill: '#radial-gradient(center, center, #ffffff 0%, #f7ff00 52%, #f7ff00 54%, #f7ff00 100%);'
    });
    canvas.addChild(strictBtn);
    // Draw Strict Button LED
    var strictLed = canvas.display.ellipse({
        x: 260,
        y: 228,
        radius: 5,
        fill: "#linear-gradient(top, #ffa3a3 0%, #c41919 36%, #e08f8f 100%)"
    });
    canvas.addChild(strictLed);
    // Strict Button Label
    var strictBtnText = canvas.display.text({
        x: 260,
        y: 286,
        origin: { x: 'center', y: 'center' },
        font: "14px Orbitron",
        text: "Strict",
        fill: "#000"
    });
    canvas.addChild(strictBtnText);
    // Strict Button Function 
    strictBtn.bind("click tap", function handler() {
        // prevent button from working unless turned on.
        if (pwrStatus === "Off" && gameOver !== true) {
            this.unbind('click tap', handler);
        } else {
            // Change the button colour on each click
            strictLed.fill = (strictLed.currentPosition === "On") ? "#linear-gradient(top, #ffa3a3 0%, #c41919 36%, #e08f8f 100%)" : "#linear-gradient(top, #b4e391 0%, #61c419 36%, #b4e391 100%)";
            // Toggle the position for the next click
            strictLed.currentPosition = (strictLed.currentPosition === "On") ? "Off" : "On";
            strictMode = (strictLed.currentPosition === "On") ? "On" : "Off";

            console.log("Strict Toggle");
            console.log(strictLed.currentPosition);
            console.log("Strict Mode: ", strictMode);
            canvas.redraw();
        }
    });

    // ************** POWER BUTTON ****************** //
    //Power Button Label
    var pwrBtnText = canvas.display.text({
        x: 200,
        y: 286,
        origin: { x: 'center', y: 'center' },
        font: "14px Orbitron",
        text: "On/Off",
        fill: "#000"
    })
    canvas.addChild(pwrBtnText);
    //Draw Power Button 
    var pwrBtn = canvas.display.ellipse({
        x: 200,
        y: 258,
        radius: 20,
        fill: 'radial-gradient(center, center, #a90329 0%, #8f0222 32%, #8f0222 32%, #6d0019 100%);'
    });
    canvas.addChild(pwrBtn);
    // Power Button Function
    pwrBtn.bind("click tap", function() {
        this.radius = 20;
        pwrStatus = (pwrStatus === "On") ? "Off" : "On";
        if (pwrStatus === "On") { playSound(4); }
        this.fill = (pwrStatus === "On") ? "radial-gradient(center, center, #ffcc55 0%, #880022 32%, #8f0223 32%, #ffcc55 100%);" : "radial-gradient(center, center, #a90329 0%, #8f0222 32%, #8f0222 32%, #6d0019 100%);";
        scoreTextValue.fill = (pwrStatus === "On") ? "#f00" : "#333";
        scoreLabel.fill = (pwrStatus === "Off") ? "#333" : "#f00";
        canvas.redraw();
        resetGame();
    });

    // ************** RESET BUTTON ****************** //
    //Reset Button Label
    var resetBtnText = canvas.display.text({
        x: 320,
        y: 286,
        origin: { x: 'center', y: 'center' },
        font: "14px Orbitron",
        text: "Reset",
        fill: "#000"
    })
    canvas.addChild(resetBtnText);
    //Draw Reset Button
    var resetBtn = canvas.display.ellipse({
        x: 320,
        y: 257,
        radius: 20,
        fill: "radial-gradient(center, center, #a90329 0%, #8f0222 32%, #8f0222 32%, #6d0019 100%);"
    });
    canvas.addChild(resetBtn);
    // Reset Button Function
    resetBtn.bind("click tap", function() {
        if (pwrStatus === 'On') {
            playSound(6);
            this.radius = 20;
            this.fill = 'radial-gradient(center, center, #ffcc55 0%, #880022 32%, #8f0222 32%, #ffcc55 100%);';
            canvas.redraw();
            setTimeout(function() {
                resetBtn.fill = "radial-gradient(center, center, #a90329 0%, #8f0222 32%, #8f0222 32%, #6d0019 100%);";
                canvas.redraw();
            }, 300);
            resetGame();
        }
    });
    //

    // ************** GAME FUNCTIONS ****************** //

    //Reset the game
    function resetGame() {
        console.clear();
        simon = [];
        userGuess = [];
        score = 0;
        scoreTextValue.text = "00";
        gameOver = false;
        gameLoop();
    }

    //Keep track of the score count
    function updateScore(tempScore) {
        // convert to 2 digit string
        if (tempScore < 10) {
            tempScore = "0" + tempScore;
        }
        scoreTextValue.text = tempScore;
    }
    // Write the score value
    updateScore(score);

    // Game Logic
    function gameLoop() {
        if (pwrStatus === "On" && gameOver != true) {
            if (simon.length >= winCondition) {
                console.log("You win");
                scoreTextValue.text = "!!"; // Do some celebration!
                gameOver = true;
            }
            do {
                if (gameOver != true) {
                    getNew();
                    playSimon();
                }
            } while (gameOver != true && simon.length <= winCondition && userGuess.length != 0);
        } else {
            console.log("Simon is powered off");
        }

    }
    // Random # Generator for Simon
    function getNew() {
        rand = Math.floor((Math.random() * 4) + 1);
        simon.push(rand);
        //simon = [3, 4, 2, 1, 4, 2];
    }

    // Get Users Input
    function getUserInput() {
        var x = 0;
        if (userGuess[x] === simon[x] && simon.length >= userGuess.length && userGuess[x] !== undefined) {
            do {
                x++;
                if (simon.length === userGuess.length) { doneFlag = true; }
            } while (x < simon.length);
        } else if (userGuess[x] !== simon[x] && strictMode === "On" && userGuess[x] !== undefined) {
            console.log("Game Over");
            scoreTextValue.text = "XX";
            errorSound = ''; //Play Mp3
            gameOver = true;
        }
        // Mistake non strict mode - replay simon
        if (userGuess[x] !== simon[x] && strictMode === "Off" && userGuess.length != 0) {
            var oldTextValue = scoreTextValue.text;
            scoreTextValue.text = "ER";
            errorSound = setTimeout(function() {
                playSound(4);
                scoreTextValue.text = oldTextValue;
            }, 700);
            userGuess.length = 0;
            playSimon();
        }

        // Successfully completed turn
        if (doneFlag === true) {
            userGuess.length = 0;
            doneFlag = false;
            score++;
            updateScore(score);
            gameLoop();
        }

    }

    // Simon gameplay function
    function playSimon() {
        if (pwrStatus === "On" && gameOver != true) {
            console.log("Play Simon");
            console.log("----------");
            var i = 0;
            var pulse = setInterval(function() {
                simonPush(simon[i]);
                i++;

                if (i >= simon.length) {
                    clearInterval(pulse);
                    // console.log("Player Guess ");
                }
            }, simonInterval);
        }
    }

    //Enter Button Input into Array
    function simonPush(incoming) {
        if (incoming == 1) {
            greenBtnPush();
        } else if (incoming == 2) {
            redBtnPush();
        } else if (incoming == 3) {
            blueBtnPush();
        } else if (incoming == 4) {
            yellowBtnPush();
        }
    }

    function playSound(note) {
        var audio = document.getElementsByTagName("audio")[note];
        audio.currentTime = 0;
        audio.play();
    }

    // End of Canvas
});