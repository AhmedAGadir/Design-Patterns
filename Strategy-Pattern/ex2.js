// different syntax

var StrategyA = function () {
    this.doSomething = function () {
        // does something
    }
}
var StrategyB = function () {
    this.doSomething = function () {
        // does something
    }
}
var StrategyC = function () {
    this.doSomething = function () {
        // does something
    }
}

var Client = function () {
    this.strategy = null;
}
Client.prototype.setStrategy = function (strat) {
    this.strategy = strat
}
Client.prototype.doSomething = function () {
    this.strategy.doSomething();
}


// could do:

var methodOne = new StrategyA();
var methodTwo = new StrategyB();
var methodThree = new StrategyC();

var myClient = new Client();
myClient.setStrategy(methodOne);
myClient.doSomething();
myClient.setStrategy(methodTwo);
myClient.doSomething();
myClient.setStrategy(methodThree);
myClient.doSomething();

// or 

newClient().setStrategy(methodOne).doSomething();
newClient().setStrategy(methodTwo).doSomething();
newClient().setStrategy(methodThree).doSomething();