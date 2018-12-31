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


// ********* RUN CODE *********

let factory = new ItemFactory();

let itemStore = [];

itemStore.push(factory.createItem('asteroid'));
itemStore.push(factory.createItem('time'));
itemStore.push(factory.createItem('weapon'));
itemStore.push(factory.createItem('health'));

itemStore.forEach(item => item.logEffect());


