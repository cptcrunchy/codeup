(function() {

    var myNameIs = 'Jason'; // TODO: Fill in your name here.

    function sayHello(name) {
        var helloMessage = "Hello, " + name + "!";
        // console.log(helloMessage);
        return helloMessage;
    }
    sayHello(myNameIs);


    var random = Math.floor((Math.random() * 100) + 1);


    function isOdd(random) {
        var message = (random % 2) ? random + ' is odd' : random + ' is not odd';
        console.log(message);
    }
    isOdd(random);

})();