function problemOne() {
    var luckyNumber = Math.floor(Math.random() * 6)
    var receipt = 60;
    var total;
    switch (luckyNumber) {
        case 0:
            total = receipt - (receipt * 0);
            console.log("Your receipt is for $" + total.toFixed(2));
            break;
        case 1:
            total = receipt - (receipt * .1);
            console.log("Your receipt is for $" + total.toFixed(2));
            break;
        case 2:
            total = receipt - (receipt * .25);
            console.log("Your receipt is for $" + total.toFixed(2));
            break;
        case 4:
            total = receipt - (receipt * .5);
            console.log("Your receipt is for $" + total.toFixed(2));
            break;
        case 5:
            total = receipt - (receipt * 1);
            console.log("your receipt is for $" + total.toFixed(2));

        default:
            total = receipt;
            console.log("Total: $" + total.toFixed(2));
    }
}
problemOne();

function problemTwo() {
    var calendarNum = Math.floor(Math.random() * 12)
    switch (calendarNum) {
        case 1:
            console.log("You are in the month of January");
            break;
        case 2:
            console.log("You are in the month of February");
            break;
        case 3:
            console.log("You are in the month of March");
            break;
        case 4:
            console.log("You are in the month of April");
            break;
        case 5:
            console.log("You are in the month of May");
            break;
        case 6:
            console.log("You are in the month of June");
            break;
        case 7:
            console.log("You are in the month of July");
            break;
        case 8:
            console.log("You are in the month of August");
            break;
        case 9:
            console.log("You are in the month of September");
            break;
        case 10:
            console.log("You are in the month of October");
            break;
        case 11:
            console.log("You are in the month of November");
            break;
        case 12:
            console.log("You are in the month of December");
            break;
        default:
            console.log("This is not a valid month.");

    }
}
// problemTwo();