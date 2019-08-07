// ABSTRACT CREATOR SUPERCLASS 

abstract class PizzaStore {
    abstract createPizza(type: string): Pizza
    orderPizza(type: string) {
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
    createPizza(type: string) {
        switch (type) {
            case 'cheese':
                return new NYStyleCheesePizza();
            case 'pepperoni':
                return new NYStylePepperoniPizza();
            case 'clam':
                return new NYStyleClamPizza();
            case 'veggie':
                return new NYStyleVeggiePizza();
            default:
                return new NYStyleCheesePizza()
        }
    }
}

class ChicagoPizzaStore extends PizzaStore {
    createPizza(type: string) {
        switch (type) {
            case 'cheese':
                return new ChicagoStyleCheesePizza();
            case 'pepperoni':
                return new ChicagoStylePepperoniPizza();
            case 'clam':
                return new ChicagoStyleClamPizza();
            case 'veggie':
                return new ChicagoStyleVeggiePizza();
            default:
                return new ChicagoStyleCheesePizza();
        }
    }
}

// ABSTRACT PRODUCT SUPERCLASS

abstract class Pizza {
    toppings: string[] = [];
    constructor(
        public name: string,
        public dough: string,
        public sauce: string) {
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

// CONCRETE PRODUCT SUBCLASSES

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
class NYStylePepperoniPizza extends Pizza {
    // ...
    constructor() { super('foo', 'bar', 'foobar'); }
}
class NYStyleClamPizza extends Pizza {
    // ...
    constructor() { super('foo', 'bar', 'foobar'); }
}
class NYStyleVeggiePizza extends Pizza {
    // ...
    constructor() { super('foo', 'bar', 'foobar'); }
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

class ChicagoStylePepperoniPizza extends Pizza {
    // ...
    constructor() { super('foo', 'bar', 'foobar'); }
}
class ChicagoStyleClamPizza extends Pizza {
    // ...
    constructor() { super('foo', 'bar', 'foobar'); }
}
class ChicagoStyleVeggiePizza extends Pizza {
    // ...
    constructor() { super('foo', 'bar', 'foobar'); }
}


// RUN CODE

const nyPizzaStore = new NYPizzaStore();
const chicagoPizzaStore = new ChicagoPizzaStore();

let restaurant;
restaurant = nyPizzaStore;
restaurant.orderPizza('cheese');
restaurant = chicagoPizzaStore;
restaurant.orderPizza('cheese');

