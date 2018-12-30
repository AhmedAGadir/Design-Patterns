// CLIENT

class Duck {
    constructor(quackStrategy, flyStrategy, walkStrategy) {
        this.quackStrategy = quackStrategy;
        this.flyStrategy = flyStrategy;
        this.walkStrategy = walkStrategy;
    }
    quack() {
        this.quackStrategy.quack();
    }
    fly() {
        this.flyStrategy.fly();
    }
    walk() {
        this.walkStrategy.walk();
    }
}

// STRATEGIES


// QUACK STRATEGY

// interface IQuackStrategy {
//     public String quack();
// }

class ClassicQuackStrategy {
    quack() {
        console.log('quack quack');
    }
}

class SqueakQuackStrategy {
    quack() {
        console.log('squeaky quack quack');
    }
}

// FLY STRATEGY

// interface IFlyStrategy {
//     public String fly();
// }

class SurprisedFlyStrategy {
    fly() {
        console.log('I didnt know I could fly');
    }
}

class AlwaysFlyStrategy {
    fly() {
        console.log('All I do is fly fly fly no matter what');
    }
}

class NoFlyStrategy {
    fly() {
        console.log('*Falls to ground* ouch!');
    }
}

// WALK STRATEGY

// interface IWalkStrategy {
//     public String walk();
// }

class ChilledOutWalkStrategy {
    walk() {
        console.log('walk walk');
    }
}

class NoWalkStrategy {
    walk() {
        console.log('i cant walk');
    }
}



//  RUN CODE

let cityDuck = new Duck(
    new ClassicQuackStrategy(),
    new SurprisedFlyStrategy(),
    new ChilledOutWalkStrategy()
);
cityDuck.quack();
cityDuck.fly();
cityDuck.walk();

let mountainDuck = new Duck(
    new ClassicQuackStrategy(),
    new AlwaysFlyStrategy(),
    new NoWalkStrategy()
);
mountainDuck.quack();
mountainDuck.fly();
mountainDuck.walk();

let rubberDuck = new Duck(
    new SqueakQuackStrategy(),
    new NoFlyStrategy(),
    new NoWalkStrategy()
);
rubberDuck.quack();
rubberDuck.fly();
rubberDuck.walk();
