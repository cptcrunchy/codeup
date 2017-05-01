var score = 0;

var sequence = [];
var userGuess = [];
var gameOver = false;
var winCondition = 15;
var sequenceInterval = 1000;
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
        fill: "linear-gradient(45deg, #d0bebe 0%, #575757 100%);"
    });
    canvas.addChild(frame);
    // ************** GAME BUTTONS ****************** //

    // ************** GREEN BUTTON ****************** //
    // Draw Green Button
    var greenBtn = canvas.display.arc({
        x: 240,
        y: 240,
        radius: 140,
        start: 180,
        end: 270,
        stroke: "140px #0f0"
    });
    canvas.addChild(greenBtn);

    // Green button click listener
    greenBtn.bind("click tap", function() {
        console.log("Game Over");
        if (PwrStatus == "on" && gameOver != true) {
            clearTimeout(timeout);
            userGuess.push('greenBtnPush()');
            getUserInput();
        }
    });
    // ************** RED BUTTON ****************** //
    // Draw Red Button
    var redBtn = canvas.display.arc({
        x: 280,
        y: 240,
        radius: 140,
        start: 270,
        end: 0,
        stroke: "140px #f00"
    });
    canvas.addChild(redBtn);
    // Red button click listener
    redBtn.bind("click tap", function() {
        console.log("Game Over");
        if (PwrStatus == "on" && gameOver != true) {
            clearTimeout(timeout);
            userGuess.push('redBtnPush()');
            getUserInput();
        }
    });

    // ************** BLUE BUTTON ****************** //
    // Draw Blue Button
    var blueBtn = canvas.display.arc({
        x: 280,
        y: 280,
        radius: 140,
        start: 0,
        end: 90,
        stroke: "140px #00f"
    });
    canvas.addChild(blueBtn);
    // Blue button click listener
    blueBtn.bind("click tap", function() {
        console.log("Game Over");
        if (PwrStatus == "on" && gameOver != true) {
            clearTimeout(timeout);
            userGuess.push('blueBtnPush()');
            getUserInput();
        }
    });

    // ************** YELLOW BUTTON ****************** //
    // Draw Yellow Button
    var yellowBtn = canvas.display.arc({
        x: 240,
        y: 280,
        radius: 140,
        start: 90,
        end: 180,
        stroke: "140px #ff0"
    });
    canvas.addChild(yellowBtn);
    // Red button click listener
    yellowBtn.bind("click tap", function() {
        console.log("Game Over");
        if (PwrStatus == "on" && gameOver != true) {
            clearTimeout(timeout);
            userGuess.push('yellowBtnPush()');
            getUserInput();
        }
    });
    // ************** OPERATION BUTTONS ****************** //
    //Power Button Label
    var pwrBtnText = canvas.display.text({
        x: 215,
        y: 310,
        origin: { x: 'center', y: 'center' },
        font: "14px Orbitron",
        text: "On/Off",
        fill: "#000"
    })
    canvas.addChild(pwrBtnText);
    //Draw Power Button 
    var pwrBtn = canvas.display.arc({
        x: 215,
        y: 280,
        radius: 20,
        start: 0,
        end: 360,
        fill: '#0ff'
    });
    canvas.addChild(pwrBtn);
    //Reset Button Label
    var resetBtnText = canvas.display.text({
        x: 300,
        y: 310,
        origin: { x: 'center', y: 'center' },
        font: "14px Orbitron",
        text: "Reset",
        fill: "#000"
    })
    canvas.addChild(resetBtnText);
    //Draw Reset Button
    var resetBtn = canvas.display.arc({
        x: 300,
        y: 280,
        radius: 20,
        start: 0,
        end: 360,
        fill: "#0fa"
    });
    canvas.addChild(resetBtn);

    // ************** GAME FUNCTIONS ****************** //
    // Game power status
    pwrBtn.bind("click tap", function() {

    });

    // End of Canvas
});