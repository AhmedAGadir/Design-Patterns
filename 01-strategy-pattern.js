// DEFINITIONS:

// Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

// Encapsulates algorithms within classes, making them interchangable and more reusable 

// what it allows you to do (my own words):
// the strategy pattern allows you to swap out different algorithms within a client at run time without it mattering to the client, 
// the different strategies are normally set on the clients constructor, or using some kind of setter 


// ===== psuedo code =====

class StrategyA {
    doSomething() {
        console.log('does something')
    }
}
class StrategyB {
    doSomething() {
        console.log('does something different')
    }
}
class StrategyC {
    doSomething() {
        console.log('does something very different')
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



// different syntax

// var StrategyA = function () {
//     this.doSomething = function () {
//         // does something
//     }
// }
// var StrategyB = function () {
//     this.doSomething = function () {
//         // does something
//     }
// }
// var StrategyC = function () {
//     this.doSomething = function () {
//         // does something
//     }
// }

// var Client = function () {
//     this.strategy = null;
// }
// Client.prototype.setStrategy = function (strat) {
//     this.strategy = strat
// }
// Client.prototype.doSomething = function () {
//     this.strategy.doSomething();
// }


// // could do:

// var methodOne = new StrategyA();
// var methodTwo = new StrategyB();
// var methodThree = new StrategyC();

// var myClient = newClient();
// myClient.setStrategy(methodOne);
// myClient.doSomething();
// myClient.setStrategy(methodTwo);
// myClient.doSomething();
// myClient.setStrategy(methodThree);
// myClient.doSomething();

// // or 

// newClient().setStrategy(methodOne).doSomething();
// newClient().setStrategy(methodTwo).doSomething();
// newClient().setStrategy(methodThree).doSomething();




// ====== links ======
// https://www.youtube.com/watch?v=v9ejT8FO-7I&index=1&list=PLrhzvIcii6GNjpARdnO4ueTUAVR9eMBpc
// https://www.youtube.com/watch?v=13nftsQUUE0&list=PLrhzvIcii6GNCgHSj44-gXZeTUVbSPC-3&index=1
// https://www.youtube.com/watch?v=slfeCvztnT4&list=PLrhzvIcii6GNCgHSj44-gXZeTUVbSPC-3&index=2
// https://www.dofactory.com/javascript/strategy-design-pattern
