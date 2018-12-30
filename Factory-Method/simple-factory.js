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
// a space invaders game where items (asteroids, health, rapidfire, time boosts etc) drop into the screen from the top and you shoot them;
// tetris (factory to create pieces, could have some logic in the factory so that not too many pieces of the same type are created at once etc)


// ********* CREATOR *********

class ItemFactory {
    addItem(type) {
        let item = this.createItem(type);
        item.logEffect();
    }
    createItem(type) {
        switch (type) {
            case 'asteroid':
                return new AsteroidItem();
            case 'health':
                return new HealthItem();
            case 'weapon':
                return new WeaponItem();
            case 'time':
                return new TimeItem();
        }
    }
}


// ********* PRODUCT INTERFACE *********

public interface IItem {
    public void logEffect()
    public void doubeSpeed()
}

// ********* CONCRETE PRODUCT IMPLEMENTATIONS *********

class AsteroidItem {
    logEffect = () => console.log('i reduce health');
}
class HealthItem {
    logEffect = () => console.log('i increase health');
}
class WeaponItem {
    logEffect = () => console.log('i improve shooting power/frequency/range');
}
class TimeItem {
    logEffect = () => console.log('I add time to the clock')
}


// ********* RUN CODE *********

let factory = new ItemFactory();
factory.addItem('asteroid');
factory.addItem('time');
factory.addItem('weapon');
factory.addItem('health');


// you can also use the factory pattern statically (i.e. calling .addItem() directly on ItemFactory without any instantiation.
// this would require ItemFactory to be modified by (1) making addItem a static method and (2) refactoring addItem so the 'this' keyboard is not used


