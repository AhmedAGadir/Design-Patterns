// ===== psuedo code =====

class StrategyA {
    doSomething() {
        console.log('does something');
    }
}
class StrategyB {
    doSomething() {
        console.log('does something different');
    }
}
class StrategyC {
    doSomething() {
        console.log('does something very different');
    }
}

class Client {
    constructor(strat) {
        this.strategy = strat;
    }
    setStrategy(newStrat) {
        this.strategy = newStrat;
    }
    doSomething() {
        this.strategy.doSomething();
    }
}

// COULD DO THIS
let myClient = new Client(new StrategyA);
myClient.doSomething();
myClient.setStrategy(new StrategyB);
myClient.doSomething();
myClient.setStrategy(new StrategyC);
myClient.doSomething();

// OR THIS
new Client(new StrategyA).doSomething();
new Client(new StrategyB).doSomething();
new Client(new StrategyC).doSomething();
