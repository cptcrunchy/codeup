    function problemOne() {


        var grades = [70, 80, 95];

        function getAvg(grades) {
            return grades.reduce(function(a, b) {
                return a + b;
            }) / grades.length;
        }
        if (getAvg(grades) >= 80) {
            console.log("You're awesome!");
        } else {
            console.log("You need more practice.");
        }
    }
    problemOne();

    function problemTwo() {

    }
    problemTwo();

    function problemThree() {
        const flipACoin = Math.floor(Math.random() * 2);
        console.log(flipACoin);
        choice = (flipACoin) ? "Buy a house." : "Buy a car.";
        console.log(choice);
    }
    problemThree();