var score = 0;

var sequence = [];
var userGuess = [];
var pwrStatus = false;
var gameOver = false;
var winCondition = 15;
var sequenceInterval = 1000;
var defSpeed = 300; //speed is in ms
var speed = 2; //speed multiplier
var turnDone = false;
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
    var innerFrame = canvas.display.arc({
        x: 260,
        y: 260,
        radius: 130,
        start: 0,
        end: 360,
        fill: "linear-gradient(45deg, #303030 23%, #333 50%);"
    });
    canvas.addChild(innerFrame);

    // Draw Inner Game Disc
    var innerDisc = canvas.display.arc({
        x: 260,
        y: 260,
        radius: 100,
        start: 0,
        end: 360,
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
        fill: "linear-gradient(45deg, #333333 0%, #000000 100%);"
    });
    canvas.addChild(scorePanel);
    // Draw Score Box
    var scoreText = canvas.display.text({
        x: 260,
        y: 330,
        origin: { x: 'center', y: 'center' },
        font: "30px Orbitron",
        text: "00",
        fill: "#333"
    })
    canvas.addChild(scoreText);
    // Write the score value



    // ************** GAME BUTTONS ****************** //

    // ************** GREEN BUTTON ****************** //
    // Draw Green Button
    var greenBtn = canvas.display.arc({
        x: 255,
        y: 255,
        radius: 170,
        start: 180,
        end: 270,
        stroke: "140px #0f0",
        shadow: "0 0 20px rgba(0,0,0, 0.8)"
    });
    canvas.addChild(greenBtn);

    // Green button click listener
    greenBtn.bind("click tap", function() {
        console.log("Green");
        if (pwrStatus == "on" && gameOver != true) {
            clearTimeout(timeout);
            userGuess.push('greenBtnPush()');
            getUserInput();
        }
    });
    // Green button Push function
    function greenBtnPush() {
        greenBtn.stroke = '137px #aaa';
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
        radius: 170,
        start: 270,
        end: 0,
        stroke: "140px #f00",
        shadow: "0 0 20px rgba(0,0,0, 0.8)"
    });
    canvas.addChild(redBtn);
    // Red button click listener
    redBtn.bind("click tap", function() {
        console.log("Red");
        if (pwrStatus == "on" && gameOver != true) {
            clearTimeout(timeout);
            userGuess.push('redBtnPush()');
            getUserInput();
        }
    });

    // ************** BLUE BUTTON ****************** //
    // Draw Blue Button
    var blueBtn = canvas.display.arc({
        x: 265,
        y: 265,
        radius: 170,
        start: 0,
        end: 90,
        stroke: "140px #00f",
        shadow: "0 0 20px rgba(0,0,0, 0.8)"
    });
    canvas.addChild(blueBtn);
    // Blue button click listener
    blueBtn.bind("click tap", function() {
        console.log("Blue");
        if (pwrStatus == "on" && gameOver != true) {
            clearTimeout(timeout);
            userGuess.push('blueBtnPush()');
            getUserInput();
        }
    });

    // ************** YELLOW BUTTON ****************** //
    // Draw Yellow Button
    var yellowBtn = canvas.display.arc({
        x: 255,
        y: 265,
        radius: 170,
        start: 90,
        end: 180,
        stroke: "140px #ff0",
        shadow: "0 0 20px rgba(0,0,0, 0.8)"
    });
    canvas.addChild(yellowBtn);
    // Yellow button click listener
    yellowBtn.bind("click tap", function() {
        console.log("Yellow");
        if (pwrStatus == "on" && gameOver != true) {
            clearTimeout(timeout);
            userGuess.push('yellowBtnPush()');
            getUserInput();
        }
    });
    // ************** OPERATION BUTTONS ****************** //
    //Power Button Label
    var pwrBtnText = canvas.display.text({
        x: 215,
        y: 305,
        origin: { x: 'center', y: 'center' },
        font: "14px Orbitron",
        text: "On/Off",
        fill: "#fff"
    })
    canvas.addChild(pwrBtnText);
    //Draw Power Button 
    var pwrBtn = canvas.display.arc({
        x: 215,
        y: 272,
        radius: 20,
        start: 0,
        end: 360,
        fill: 'radial-gradient(center, center, #a90329 0%, #8f0222 32%, #8f0222 32%, #6d0019 100%);'
    });
    canvas.addChild(pwrBtn);
    //Reset Button Label
    var resetBtnText = canvas.display.text({
        x: 300,
        y: 305,
        origin: { x: 'center', y: 'center' },
        font: "14px Orbitron",
        text: "Reset",
        fill: "#fff"
    })
    canvas.addChild(resetBtnText);
    //Draw Reset Button
    var resetBtn = canvas.display.arc({
        x: 300,
        y: 272,
        radius: 20,
        start: 0,
        end: 360,
        fill: "radial-gradient(center, center, #a90329 0%, #8f0222 32%, #8f0222 32%, #6d0019 100%);"
    });
    canvas.addChild(resetBtn);

    // ************** GAME FUNCTIONS ****************** //
    // Game reset button function and animation
    resetBtn.bind("click tap", function() {
        if (pwrStatus === 'On') {
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
    // Game power button function and animation
    pwrBtn.bind("click tap", function() {
        this.radius = 20;
        this.fill = "radial-gradient(center, center, #ffcc55 0%, #880022 32%, #8f0222 32%, #ffcc55 100%);'";
        pwrStatus = (pwrStatus === "On") ? "Off" : "On";
        this.fill = pwrStatus === "On" ? "radial-gradient(center, center, #ffcc55 0%, #880022 32%, #8f0223 32%, #ffcc55 100%);" : "radial-gradient(center, center, #a90329 0%, #8f0222 32%, #8f0222 32%, #6d0019 100%)";
        scoreText.fill = pwrStatus === "On" ? "#f00" : "linear-gradient(45deg, #333333 0%, #000000 100%);";
        scorePanel.fill = pwrStatus === "Off" ? "#333" : "linear-gradient(45deg, #333333 0%, #000000 100%);";
        console.log(score);

        canvas.redraw();
        resetGame();
    })




    function resetGame() {
        console.clear();
        sequence = [];
        userGuess = [];
        score = 0;
        scoreText.text = "00";
        gameOver = false;

    }


    // End of Canvas
});