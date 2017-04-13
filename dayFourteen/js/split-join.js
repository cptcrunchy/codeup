(function() {

    function splitJoin() {
        var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
        var planetsArray;
        console.log(planetsString);
        // TODO: Convert planetsString to an array, save it to planetsArray.
        var planetsArray = planetsString.split('|');
        console.log(planetsArray);

        // TODO: Create a string with <br> tags between each planet. console.log() your results.
        //       Why might this be useful?
        console.log(planetsArray.join('<br>'))
            // Bonus: Create a second string that would display your planets in an undordered list.
            //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
            //        console.log() your results.

        var planetsList = '<ul><li>' + planetsArray.join('</li><li>') + "</ul>";
        document.write(planetsList);
    }
    // splitJoin();

    var milTimeString = '00:00|01:00|02:00|03:00|04:00|05:00|06:00|07:00|08:00|09:00|10:00|11:00|12:00|13:00|14:00|15:00|16:00|17:00|18:00|19:00|20:00|21:00|22:00|23:00'

    function convert_to_12h(milTimeString) {
        var time = milTimeString.match(/(\d+):(\d+)/);
        var hours = Number(time[1]);
        var minutes = Number(time[2]);
        var meridian = time[4].toLowerCase();

        if (meridian == 'p' && hours < 12) {
            hours = hours + 12;
        } else if (meridian == 'a' && hours == 12) {
            hours = hours - 12;
        }
        return [hours, minutes];
    };



})();