// DOUGH
class Dough { }
class ThinCrustDough extends Dough { }
class ThickCrustDough extends Dough { }
// SAUCE
class Sauce { }
class MarinaraSauce extends Sauce { }
class PlumTomatoSauce extends Sauce { }
// CHEESE
class Cheese { }
class ReggianoCheese extends Cheese { }
class MozzarellaCheese extends Cheese { }
// CLAMS
class Clams { }
class FreshClams extends Clams { }
class FrozenClams extends Clams { }
// PEPPERONI
class Pepperoni { }
// VEGGIES
class Veggie { }
class Garlic extends Veggie { }
class Onion extends Veggie { }
class Mushroom extends Veggie { }
class RedPepper extends Veggie { }
class EggPlant extends Veggie { }
class Spinach extends Veggie { }
class BlackOlives extends Veggie { }

// *** THIS SHOULD BE AN INTERFACE •••
class IIngredientsFactory {
    createDough() {
        // implement 
        // return type Dough
    }
    createSauce() {
        // implement 
        // return type Sauce
    }
    createCheese() {
        // implement 
        // return type Cheese
    }
    createClams() {
        // interface
        // return type Clams
    }
    createPepperoni() {
        // interface
        // return type Pepperoni
    }
    createVeggies() {
        // interface
        // return Array of type Veggie
    }
}

// should be implmenting and not extending
class NyIngredientsFactory extends IIngredientsFactory {
    createDough() {
        return new ThinCrustDough();
    }
    createSauce() {
        return new MarinaraSauce();
    }
    createCheese() {
        return new ReggianoCheese();
    }
    createClams() {
        return new FreshClams();
    }
    createPepperoni() {
        return new Pepperoni();
    }
    createVeggies() {
        // to keep things simple
        return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
    }
}

// should be implmenting and not extending
class ChicagoIngredientsFactory extends IIngredientsFactory {
    createDough() {
        return new ThickCrustDough();
    }
    createSauce() {
        return new PlumTomatoSauce();
    }
    createCheese() {
        return new MozzarellaCheese();
    }
    createClams() {
        return new FrozenClams();
    }
    createPepperoni() {
        return new Pepperoni();
    }
    createVeggies() {
        // to keep things simple
        return [new EggPlant(), new Spinach(), new BlackOlives()];
    }
}

class AbstractPizza {
    constructor() {
        this.ingredients = {
            dough: null,
            sauce: null,
            cheese: null,
            clam: null,
            pepperoni: null,
            veggies: []
        };
    }
    prepare() {
        // abstract method
    }
    bake() {
        console.log('Bake for 25 mins at 350');
    }
    cut() {
        console.log('Cutting the pizzza into diagonal slices');
    }
    box() {
        console.log('Place pizza in official PizzaStore box');
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class CheesePizza extends AbstractPizza {
    constructor(ingredientsFactory) {
        super();
        this.ingredientsFactory = ingredientsFactory;
    }
    prepare() {
        console.log('preparing ' + this.getName());
        this.ingredients.dough = this.ingredientsFactory.createDough();
        this.ingredients.sauce = this.ingredientsFactory.createSauce();
        this.ingredients.cheese = this.ingredientsFactory.createCheese();
        this.ingredients.veggies = this.ingredientsFactory.createVeggies();
    }
}

class ClamPizza extends AbstractPizza {
    constructor(ingredientsFactory) {
        super();
        this.ingredientsFactory = ingredientsFactory;
    }
    prepare() {
        console.log('preparing ' + this.getName());
        this.ingredients.dough = this.ingredientsFactory.createDough();
        this.ingredients.sauce = this.ingredientsFactory.createSauce();
        this.ingredients.cheese = this.ingredientsFactory.createCheese();
        this.ingredients.veggies = this.ingredientsFactory.createVeggies();
        this.ingredients.clam = this.ingredientsFactory.createClams();
    }
}

class VeggiePizza extends AbstractPizza {
    constructor(ingredientsFactory) {
        super();
        this.ingredientsFactory = ingredientsFactory;
    }
    prepare() {
        console.log('preparing ' + this.getName());
        this.ingredients.dough = this.ingredientsFactory.createDough();
        this.ingredients.sauce = this.ingredientsFactory.createSauce();
        this.ingredients.cheese = this.ingredientsFactory.createCheese();
        this.ingredients.veggies = this.ingredientsFactory.createVeggies();
    }
}

class PepperoniPizza extends AbstractPizza {
    constructor(ingredientsFactory) {
        super();
        this.ingredientsFactory = ingredientsFactory;
    }
    prepare() {
        console.log('preparing ' + this.getName());
        this.ingredients.dough = this.ingredientsFactory.createDough();
        this.ingredients.sauce = this.ingredientsFactory.createSauce();
        this.ingredients.cheese = this.ingredientsFactory.createCheese();
        this.ingredients.veggies = this.ingredientsFactory.createVeggies();
        this.ingredients.pepperoni = this.ingredientsFactory.createPepperoni();
    }
}

class AbstractPizzaFactory {
    createPizza(type) {
        // abstract methodd
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

class NyPizzaFactory extends AbstractPizzaFactory {
    createPizza(type) {
        let nyIngredientsFactory = new NyIngredientsFactory();
        let pizza;
        switch (type) {
            case 'cheese':
                pizza = new CheesePizza(nyIngredientsFactory);
                pizza.setName('New York Style Cheese Pizza');
                break;
            case 'clam':
                pizza = new ClamPizza(nyIngredientsFactory);
                pizza.setName('New York Style Clam Pizza');
                break;
            case 'veggie':
                pizza = new VeggiePizza(nyIngredientsFactory);
                pizza.setName('New York Style Veggie Pizza');
                break;
            case 'pepperoni':
                pizza = new PepperoniPizza(nyIngredientsFactory);
                pizza.setName('New York Style Pepperoni Pizza');
                break;
        }
        return pizza;
    }
}

class ChicagoPizzaFactory extends AbstractPizzaFactory {
    createPizza(type) {
        let chicagoIngredientsFactory = new ChicagoIngredientsFactory();
        let pizza;
        switch (type) {
            case 'cheese':
                pizza = new CheesePizza(chicagoIngredientsFactory);
                pizza.setName('Chicago Style Cheese Pizza');
                break;
            case 'clam':
                pizza = new ClamPizza(chicagoIngredientsFactory);
                pizza.setName('Chicago Style Clam Pizza');
                break;
            case 'veggie':
                pizza = new VeggiePizza(chicagoIngredientsFactory);
                pizza.setName('Chicago Style Veggie Pizza');
                break;
            case 'pepperoni':
                pizza = new PepperoniPizza(chicagoIngredientsFactory);
                pizza.setName('Chicago Style Style Pepperoni Pizza');
                break;
        }
        return pizza;
    }
}

// client

let myShop = new NyPizzaFactory();
myShop.orderPizza('cheese');
myShop = new ChicagoPizzaFactory();
myShop.orderPizza('clam');
myShop.orderPizza('veggie');