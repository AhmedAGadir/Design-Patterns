// ********* CREATOR *********

class ItemFactory {
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

// public interface IItem {
//     public void logEffect()
//     public void doubeSpeed()
// }

// ********* CONCRETE PRODUCT IMPLEMENTATIONS *********

class AsteroidItem {
    logEffect() {
        console.log('i reduce health');
    }
}
class HealthItem {
    logEffect() {
        console.log('i increase health');
    }
}
class WeaponItem {
    logEffect() {
        console.log('i improve shooting power/frequency/range');
    }
}
class TimeItem {
    logEffect() {
        console.log('I add time to the clock')
    }
}


// CLIENT

const ITEMS = ['asteroid', 'time', 'weapon', 'health']

class Game {
    constructor(itemFactory) {
        this.itemFactory = itemFactory;
    }
    dropRandItem() {
        let randItemInd = Math.floor(Math.random() * ITEMS.length);
        let randItem = this.itemFactory.createItem(ITEMS[randItemInd]);
        randItem.logEffect();
        return randItem;
    }
    dropAsteroid() {
        let asteroid = this.itemFactory.createItem('asteroid');
        asteroid.logEffect();
        return asteroid;
    }
    dropTime() {
        let time = this.itemFactory.createItem('time');
        time.logEffect();
        return time;
    }
    dropWeapon() {
        let weapon = this.itemFactory.createItem('weapon');
        weapon.logEffect();
        return weapon;
    }
    dropHealth() {
        let health = this.itemFactory.createItem('health');
        health.logEffect();
        return health;
    }
}

let spaceInvaders = new Game(new ItemFactory());
spaceInvaders.dropAsteroid();
spaceInvaders.dropTime();
spaceInvaders.dropWeapon();
spaceInvaders.dropHealth();
spaceInvaders.dropRandItem();



