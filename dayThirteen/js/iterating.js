(function() {
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ['John', 'Dusty', 'Ean', 'Jason'];

    var meals = ['Lemon Pepper Talapia', 'Mac-n-Cheese', 'Cheeseburger', 'Chicken Soup', 'Fruit Plate',
        'Fries', 'Chicken Wings', 'Hot Dog', 'Chimichanga', 'Burrito', 'Quinoa', 'Lentils-n-Rice'
    ];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        // TODO: Create a log statement that will log the number of elements in the names array.
    console.log('There are ' + names.length + ' names in the array.');
    // TODO: Create log statements that will print each of the names array elements individually.
    console.log("For Loop:");
    for (var i = 0; i < names.length; i++) {
        console.log('Name at index: ' + i + ' is ' + names[i]);
    }
    console.log("");
    console.log("ForEach Loop:");
    names.forEach(function(element, index, array) {
        console.log('Name at index: ' + index + ' is ' + element);
    });

    console.log("");
    console.log("Random Meal on Day:");
    var mealPicker = function() {
        var todaysMeal = meals[Math.floor(Math.random() * 6)];
        return todaysMeal;
    }

    for (i = 0; i < days.length; i++) {

        console.log(days[i] + " -" + mealPicker());
    }


})();