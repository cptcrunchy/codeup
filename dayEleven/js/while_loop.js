"use strict";

// var stopAt = 25;
// var i = 0;
// var r = 1;
// while (i <= stopAt) {
//     console.log("Count " + i + " Rounds " + r);
//     i++;
//     r++;
// }
// console.log("End of while loop");

// var links = "";
// i = 0;

// do {
//     links += "<a href='" + (i + 1) + ".html' target='_blank' class='links'></a><br>";
//     i++;
// } while (i < 5);
// console.log(links);

// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// console.log(allCones);
// var cones;

// do {
//     cones = Math.floor(Math.random() * 5) + 1;
//     allCones = allCones - cones;
//     console.log(allCones);
// } while (allCones >= 0 && cones <= allCones)
// console.log("All Cones sold!");
var conesInventory = Math.floor(Math.random() * 50) + 50;
var conesRequested;
var