
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
const chichagoPizzaStore = new ChicagoPizzaStore();

let restaurant;
restaurant = nyPizzaStore;
restaurant.orderPizza('cheese');
restaurant = chichagoPizzaStore;
restaurant.orderPizza('cheese');

