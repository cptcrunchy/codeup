(function() {

    person = {
        firstName: 'Jason',
        lastName: 'Gutierrez',
        sayHello: function() {
            console.log('Hello, Mr. ' + this.firstName + ' ' + this.lastName);
        }
    };
    // person.sayHello()


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
            header = applyPadding(this.cHeader, 1) + spacer + applyPadding(this.pHeader, 10);
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
            line = line.concat('-');
        }
        console.log(line);
    }

})();