            var strictMode = "off";
  
           
        
     

    function greenPush() {
        green.stroke = "137px #aaffaa";
        playSound(0);
        console.log("green");
        canvas.redraw();
        setTimeout(function() {
            green.stroke = "140px #53D06A";
            canvas.redraw();
        }, defaultSpeed * speed);
        return 1;
    }

 

 
  
    //canvas.redraw();

    // Write the score value
    updateScore(score);

   
    /**
     * Detect On or Off Click
     */
    onOffButton.bind("click tap", function() {
        this.radius = 15;
        this.fill = "#radial-gradient(center, center, #e07272 0%, #ce2b2b 57%, #6d0019 100%)";
        onOffStatus = onOffStatus === "on" ? "off" : "on";
        this.fill = onOffStatus === "on" ? "#radial-gradient(center, center, #e07272 10%, #ce2b2b 90%, #e07272 100%)" : "#radial-gradient(center, center, #a90329 0%, #8f0222 32%, #8f0222 32%, #6d0019 100%)";
        scoreText.fill = onOffStatus === "on" ? "#888" : "#333";
        scoreValueText.fill = onOffStatus === "on" ? "#f22" : "#333";
        updateScore(score);
        canvas.redraw();
        resetGame();
    });

    /**
     * Strict Mode Label
     */
    var strictText = canvas.display.text({
        x: 255,
        y: 280,
        origin: {
            x: "center",
            y: "middle"
        },
        font: "12px Orbitron",
        text: "Strict",
        fill: "#000"
    });

    canvas.addChild(strictText);

    /**
     * Strict Mode Outer Layout
     */
    var strictModeButton = canvas.display.rectangle({
        x: 220,
        y: 244,
        width: 80,
        height: 34,
        fill: "#333"
    });

    canvas.addChild(strictModeButton);

    var strictModeInnerButton = canvas.display.rectangle({
        x: 221,
        y: 244,
        width: 78,
        height: 30,
        fill: "#000"
    });

    canvas.addChild(strictModeInnerButton);

    var modeButton = canvas.display.rectangle({
        x: 222,
        y: 247,
        width: 38,
        height: 26,
        fill: "linear-gradient(top, #b4e391 0%, #61c419 36%, #b4e391 100%)"
    });

    canvas.addChild(modeButton);

    /**
     * Strict Button click
     */
    modeButton.bind("click tap", function() {

        // prevent button from working unless turned on.
        if (gameOver != true) {
            // Stop any previous running animation
            this.stop();
            console.log("Strict Toggle");

            // Slide the button right or left and change colour
            this.animate({
                x: this.currentPosition === "left" ? 222 : 261
            }, {
                easing: "ease-in-out-cubic"
            });

            // Change the button colour on each click
            this.fill = this.currentPosition === "left" ? "#linear-gradient(top, #b4e391 0%, #61c419 36%, #b4e391 100%)" : "#linear-gradient(top, #ffa3a3 0%, #c41919 36%, #e08f8f 100%)";
            // Toggle the position for the next click
            this.currentPosition = this.currentPosition === "left" ? "right" : "left";
            strictMode = this.currentPosition === "left" ? "on" : "off";
            console.log("Strict Mode: ", strictMode);
            canvas.redraw();
        }
    });

    


    /*
      =================================================================================
     */

   
    // Score Label
    var scoreText = canvas.display.text({
        x: 255,
        y: 305,
        origin: {
            x: "center",
            y: "middle"
        },
        font: "24px Orbitron",
        text: "Score",
        fill: "#333"
    });

    canvas.addChild(scoreText);

    function updateScore(tempScore) {
        // Score value
        // convert to 2 digit string
        if (tempScore < 10) {
            tempScore = "0" + tempScore;
        } else {
            // do nothing right now
        }
        scoreValueText.text = tempScore;
    }
    /*
      =================================================================================
     */

    /**
     * Run Game
     */
    function gameLoop() {
        if (onOffStatus === "on" && gameOver != true) {

            if (sequence.length >= winCondition) {
                console.log("win");
                scoreValueText.text = ":-)";
                gameOver = true;
            }


            do {
                if (gameOver != true) {
                    getNew();
                    playSequence();
                }
            } while (gameOver != true && sequence.length <= winCondition && guess.length != 0);


        } else {
            console.log("Simon is powered off");
        }

    }

    function getUserInput() {

        var x = 0;

        if (guess[x] === sequence[x] && sequence.length >= guess.length && guess[x] !== undefined) {
            do {
                x++;
                if (sequence.length === guess.length) {
                    doneFlag = true;
                }
            } while (x < sequence.length);
        } else if (guess[x] !== sequence[x] && strictMode === "on" && guess[x] !== undefined) {
            console.log("Game Over");
            scoreValueText.text = "XX";
            errorSound = setTimeout(function() {
                playSound(4);
            }, 700);
            gameOver = true;
        }

        // Mistake non strict mode - replay sequence
        if (guess[x] !== sequence[x] && strictMode === "off" && guess.length != 0) {
            var oldTextValue = scoreValueText.text;
            scoreValueText.text = "ER";
            errorSound = setTimeout(function() {
                playSound(4);
                scoreValueText.text = oldTextValue;
            }, 700);
            guess.length = 0;
            playSequence();
        }

        // Successfully completed the sequence
        if (doneFlag === true) {
            guess.length = 0;
            doneFlag = false;
            score++;
            updateScore(score);
            gameLoop();
        }

    }

    /*
    	function tooSlow() {
    		if (strictMode == "on") {
    			gameOver = true;
    			console.log("Game Over");
    		} else if (onOffStatus !== "off") {
    			console.log("Too Slow");
    			guess.length = 0;
    			playSequence();
    		}
    	}
    */
    function playSequence() {
        console.log("=============");
        console.log("Play Sequence");
        console.log("=============");
        var i = 0;
        var pulse = setInterval(function() {
            sequencePush(sequence[i]);
            i++;

            if (i >= sequence.length) {
                clearInterval(pulse);
                console.log("=============");
                console.log("Player Guess ");
                console.log("=============");
            }
        }, sequencePause);
    }

    function sequencePush(incoming) {
        if (incoming == 1) {
            greenPush();
        } else if (incoming == 2) {
            redPush();
        } else if (incoming == 3) {
            bluePush();
        } else if (incoming == 4) {
            yellowPush();
        }
    }

    function playSound(note) {
        var v = document.getElementsByTagName("audio")[note];
        v.play();
    }

    function getNew() {
        // generate a random number between 1 and 4
        rand = Math.floor((Math.random() * 4) + 1);
        // Save the random number to the sequence array
        sequence.push(rand);
        //sequence = [3, 4, 2, 1, 4, 2];
    }

    

});