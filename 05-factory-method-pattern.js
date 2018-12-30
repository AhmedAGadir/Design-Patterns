// Factory Method Pattern:
// A creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created.

// ***** useful in: ***** 
// applications that manage, maintain, or manipulate collections of objects that are different but at the same time have many characteristics in common.


// ======================================= EXAMPLE 1 (PSEUDO-CODE) =======================================

//  ABSTRACT CREATOR SUPERCLASS

class Dialog {
    createButton() {
        // abstract method
    }
    render() {
        let okButton = createButton();
        okButton.onClick(closeDialog);
        okButton.render();
    }
}

// CONCRETE CREATOR SUBCLASS

class WindowsDialog extends Dialog {
    createButton() {
        return new WindowsButton();
    }
}

class WebDialog extends Dialog {
    createButton() {
        return new HTMLButton();
    }
}

//  PRODUCT INTERFACE 

interface Button {
    method onClick()
method render()
}

// CONCRETE PRODUCT IMPLEMENTATION 

class WindowsButton implements Button {
    render() {
        // render to screen 
    }
    onClick() {
        // do something
    }
}

class HTMLButton implements Button {
    render() {
        // render to screen
    }
    onClick() {
        // do something
    }
}

// RUN CODE

let dialog;
let config = readApplicationConfigFile();

if (config.OS == 'Windows') {
    dialog = new WindowsDialog();
} else if (config.OS == 'Web') {
    dialog = new WebDialog();
} else {
    throw new Error('Error! Unknown operating system')
}

dialog.render();



// ======================================= EXAMPLE 2 =======================================

// ABSTRACT CREATOR SUPERCLASS 

class PizzaStore {
    createPizza() {
        // abstract method
    }
    orderPizza(type) {
        let pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}

// CONCRETE CREATOR SUBCLASS

class NYPizzaStore extends PizzaStore {
    createPizza(type) {
        switch (type) {
            case 'cheese':
                return new NYStyleCheesePizza();
            case 'pepperoni':
                return new NYStylePepperoniPizza();
            case 'clam':
                return new NYStyleClamPizza();
            case 'veggie':
                return new NYStyleVeggiePizza();
        }
    }
}

class ChicagoPizzaStore extends PizzaStore {
    createPizza(type) {
        switch (type) {
            case 'cheese':
                return new ChicagoStyleCheesePizza();
            case 'pepperoni':
                return new ChicagoStylePepperoniPizza();
            case 'clam':
                return new ChicagoStyleClamPizza();
            case 'veggie':
                return new ChicagoStyleVeggiePizza();
        }
    }
}

// ABSTRACT PRODUCT SUPERCLASS

class Pizza {
    constructor(name, dough, sauce) {
        this.name = name;
        this.dough = dough;
        this.sauce = sauce;
        this.toppings = [];
    }
    prepare() {
        console.log('Preparing ' + this.name);
        console.log('Tossing dough...');
        console.log('Adding sauce...');
        console.log('Adding toppings: ' + this.toppings.join(', '));
    }
    bake() {
        console.log('Bake for 25 minutes at 350');
    }
    cut() {
        console.log('Cutting the pizza into diagonal slices');
    }
    box() {
        console.log('Place pizza in official PizzaStore box');
    }
    getName() {
        return this.name;
    }
}

// PRODUCT SUBCLASSES

class NYStyleCheesePizza extends Pizza {
    constructor() {
        super(
            'NY Style Sauce and Cheese Pizza',
            'Thin Crust Dough',
            'Marinara Sauce'
        );
        this.toppings.push('Grated Reggiano Cheese');

    }
}
class NYStylePepperoniPizza {
    // ...
}
class NYStyleClamPizza {
    // ...
}
class NYStyleVeggiePizza {
    // ...
}

class ChicagoStyleCheesePizza extends Pizza {
    constructor() {
        super(
            'Chicago Style Deep Dish Cheese Pizza',
            'Extra Thick Crust Dough',
            'Plum Tomato Sauce'
        );
        this.toppings.push('Shredded Mozzarella Cheese');

    }
}
class ChicagoStylePepperoniPizza {
    // ...
}
class ChicagoStyleClamPizza {
    // ...
}
class ChicagoStyleVeggiePizza {
    // ...
}


// RUN CODE

const nyPizzaStore = new NYPizzaStore();
console.group('NY_PIZZA_STORE');
nyPizzaStore.orderPizza('cheese');
console.groupEnd('NY_PIZZA_STORE');

const chichagoPizzaStore = new ChicagoPizzaStore();
console.group('CHICAGO_PIZZA_STORE');
chichagoPizzaStore.orderPizza('cheese');
console.groupEnd('CHICAGO_PIZZA_STORE');




// links
// https://www.youtube.com/watch?v=EcFVTgRHJLM&index=4&list=PLrhzvIcii6GNjpARdnO4ueTUAVR9eMBpc
// https://refactoring.guru/design-patterns/factory-method 

