(function() {

    person = {
        firstName: 'Jason',
        lastName: 'Gutierrez',
        sayHello: function() {
            console.log('Hello, Mr. ' + this.firstName + ' ' + this.lastName);
        }
    };
    // person.sayHello();




    shoppers = [
        { name: 'Cameron', amount: 180 },
        { name: 'Ryan', amount: 250 },
        { name: 'George', amount: 320 }
    ];

    price = 0.00;
    discount = .35;
    spacer = ' | ';

    title = {
        cHeader: 'CUSTOMER NAME',
        pHeader: 'PRICE W/O DISC',
        dTrue: 'DISCOUNT APPLIED',
        priceDiscounted: 'DISCOUNTED PRICE',
        createHeader: function() {
            var header = applyPadding(this.cHeader, 1) + spacer + applyPadding(this.pHeader, 10);
            header += spacer + applyPadding(this.dTrue, 10) + spacer + applyPadding(this.priceDiscounted, 10);
            return header;
        }
    };

    console.log(title.createHeader());

    shoppers.map(x => {
        if (x.amount > 200) {
            price = x.amount - (x.amount * discount)
        } else {
            price = x.amount
        }
        var dataOutput = applyPadding(x.name, 10) +
            spacer + applyPadding(x.amount, 10) +
            spacer + applyPadding((x.amount > 200), 10) +
            spacer + applyPadding(price, 10)

        console.log(dataOutput);
        makeLine(50);

    });

    function applyPadding(text, length) {
        text = String(text);
        while (text.length < length) {
            text = text.concat(' ');
        }
        return text;
    }

    function makeLine(length) {
        var line = String('-');
        for (var i = 0; i <= length; i++) {
            line = line.concat('-')
        }
        console.log(line);
    }

    // discountCalc = function() {
    //     discTotal = ((shopppers.amount * discounts.disc) + shoppers.amount);
    // }

    // totalCalc = function(shoppers) {
    //     if (shopppers.amount <= 200) {
    //         console.log(shoppers.name + ' Total before discount: ' + shoppers.amount + " Total after discount: " + discTotal);
    //     }


    // }
    // totalCalc();

    // (function() {

    //   function randomStr(length) {
    //     return Math.random().toString(36).substr(0,length)
    //   }
    //   var books = new Array(5).fill(1)
    //   books.forEach( (_, idx) => {
    //     books[idx] = { title: randomStr(12), author: `${randomStr(5)} ${randomStr(7)}` }
    //   })
    //   console.log(books)
    // })();       


    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */



})();