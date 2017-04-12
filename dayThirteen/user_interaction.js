"use strict";

// function name() {
//     var userName = "";

//     while (userName === "") {
//         userName = prompt('What is your name stranger?');
//     }
//     alert('Welcome, ' + userName + '!');
//     var response = confirm('Do you like beer and pizza, ' + userName + "?");

//     (response) ? alert("Good news, we have some for you!"): alert("How odd, I thought everyone liked pizza and beer.")
// }
// name();

// BONUS

// Create an application that simulates a registration page with dialogue functions...
//  --ask the user if they are registered
//  -- for registered users have, the user login with a predefined username and password
// -- if they are not logged in, have them register with a new username and password
// -- greet them with their username
// -- make sure you check for invalid or empty responses


// function cPanel() {
//     var login = "";
//     while (login === "") {
//         login = alert('Welcome to our Page! Click OK if your a registered user. New users click Cancel to sign-up.');
//     }
//     var userName = prompt('Enter your username:');
//     while (userName !== "dr_evil") {
//         prompt('You username is incorrect. Try again:');
//     }
//     var userPassword = prompt('Enter your password:');
//     while (userPassword !== "taco_cat") {
//         prompt('Your password is incorrect. Try again:');
//     }
//     alert('Welcome, ' + userName + "!");
// }
// cPanel();

const name = "My name is Global";

function someFunction() {
    name = "I'm actually Local";
    console.log(name + " IN FUNCTION");
    // name = "Something else";
    //     console.log(name + " IN FUNCTION");
    //     name = "WEEEEEEE!!!!";
    //     console.log(name + " IN FUNCTION");
}
someFunction();
console.log(name + " OUTSIDE FUNCTION");