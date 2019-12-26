// CLIENT

class Duck {
    constructor(
        public quackStrategy: IQuackStrategy,
        public flyStrategy: IFlyStrategy,
        public walkStrategy: IWalkStrategy
    ) { }

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

interface IQuackStrategy {
    quack(): void;
}

class ClassicQuackStrategy implements IQuackStrategy {
    quack() {
        console.log('quack quack');
    }
}

class SqueakQuackStrategy implements IQuackStrategy {
    quack() {
        console.log('squeaky quack quack');
    }
}

// FLY STRATEGY

interface IFlyStrategy {
    fly(): void;
}

class SurprisedFlyStrategy implements IFlyStrategy {
    fly() {
        console.log('I didnt know I could fly');
    }
}

class AlwaysFlyStrategy implements IFlyStrategy {
    fly() {
        console.log('All I do is fly fly fly no matter what');
    }
}

class NoFlyStrategy implements IFlyStrategy {
    fly() {
        console.log('*Falls to ground* ouch!');
    }
}

// WALK STRATEGY

interface IWalkStrategy {
    walk(): void;
}

class ChilledOutWalkStrategy implements IWalkStrategy {
    walk() {
        console.log('walk walk');
    }
}

class NoWalkStrategy implements IWalkStrategy {
    walk() {
        console.log('i cant walk');
    }
}


//  RUN CODE

let cityDuck: Duck = new Duck(
    new ClassicQuackStrategy(),
    new SurprisedFlyStrategy(),
    new ChilledOutWalkStrategy()
);
cityDuck.quack();
cityDuck.fly();
cityDuck.walk();

let mountainDuck: Duck = new Duck(
    new ClassicQuackStrategy(),
    new AlwaysFlyStrategy(),
    new NoWalkStrategy()
);
mountainDuck.quack();
mountainDuck.fly();
mountainDuck.walk();

let rubberDuck: Duck = new Duck(
    new SqueakQuackStrategy(),
    new NoFlyStrategy(),
    new NoWalkStrategy()
);
rubberDuck.quack();
rubberDuck.fly();
rubberDuck.walk();
