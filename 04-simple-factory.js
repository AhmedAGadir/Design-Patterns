// not really a pattern, more of a technique

// DEFINITION: 
// the simple factory defines an interface for creating objects
// simple factory encapsulates object creation(and business logic) into its own class and uses composition

// Factory patterns:
// - follow the principle of separating what varies from what stays the same
// - allow for clients to program to interfaces, instead of concrete classes
// - allow for easily extensible code

// the limit of the simple factory is that theres little control over object creation, you're limited to the params you pass
// if there are a lot more objects and possibly different categories within those objects, then the factory method pattern is a good alternative

// EXAMPLE
// a space invaders game where obstacles (asteroids, health, rapidfire, time boosts etc) drop into the screen from the top and you shoot them;
// tetris 


// ********* PRODUCTS *********

// product interface
// public interface IProduct {
//     public void logEffect()
//     public void doubeSpeed()
// }

class AsteroidProduct {
    logEffect() {
        console.log('i reduce health')
    }
}

class HealthProduct {
    logEffect() {
        console.log('i increase health')
    }
}

class WeaponProduct {
    logEffect() {
        console.log('i improve shooting power/frequency/range')
    }
}

class TimeProduct {
    logEffect() {
        console.log('I add time to the clock')
    }
}

// ********* CREATOR *********

class ProductFactory {
    constructor() {
        this.count = 0;
        this.rareProducts = ['health', 'weapon', 'time']
    }
    addProduct() {
        let product = this.createProduct();
        product.logEffect();
    }
    createProduct() {
        if (this.count < 3) {
            this.count++;
            return new AsteroidProduct();
        } else {
            this.count = 0
            let randType = this.rareProducts[Math.floor(Math.random() * this.rareProducts.length)];
            switch (randType) {
                case 'health':
                    return new HealthProduct();
                case 'weapon':
                    return new WeaponProduct();
                case 'time':
                    return new TimeProduct();
            }
        }
    }
}

// ********* RUN CODE *********

let productFactory = new ProductFactory();

let x = 0;
while (x < 20) {
    productFactory.addProduct();
    x++
}

// you can also use the factory pattern statically;



