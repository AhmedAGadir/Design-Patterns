// you can also use the factory pattern statically - i.e. calling createItem() directly on ItemFactory without any instantiation.
// this requires ItemFactory to (1) make createItem a static method and (2) not use the 'this' keyboard in createItem

class ItemFactory2 {
    static createItem(type) {
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

//  RUN CODE

ItemFactory2.createItem('asteroid').logEffect();
ItemFactory2.createItem('time').logEffect();
ItemFactory2.createItem('weapon').logEffect();
ItemFactory2.createItem('health').logEffect();
