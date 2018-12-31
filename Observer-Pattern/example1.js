class Observable {
    constructor() {
        this.observers = [];
        this.state = {
            value: 0
        }
        setInterval(() => {
            console.log('updating state')
            this.state.value++;
            this.notify();
        }, 1000)
    }
    register(observers) {
        console.log('registering observables')
        this.observers.push(...observers)
    }
    unregister(observer) {
        console.log('unregistering an observable')
        this.observers = this.observers.filter(ob => ob !== observer);
    }
    notify() {
        console.log('notifying observables')
        this.observers.forEach(observer => observer.update())
    }
}

class ObserverA {
    constructor(observableRef) {
        this.observableRef = observableRef;
    }
    update() {
        console.log('updating ObserverA')
        let newState = this.observableRef.state;
        // ...
    }
}
class ObserverB {
    constructor(observableRef) {
        this.observableRef = observableRef;
    }
    update() {
        console.log('updating ObserverB')
        let newState = this.observableRef.state;
        // ...
    }
}
class ObserverC {
    constructor(observableRef) {
        this.observableRef = observableRef;
    }
    update() {
        console.log('updating ObserverC')
        let newState = this.observableRef.state;
        // ...
    }
}

let myObservable = new Observable();
let observerA = new ObserverA(myObservable);
let observerB = new ObserverB(myObservable);
let observerC = new ObserverC(myObservable);
myObservable.register([observerA, observerB, observerC]);
setTimeout(() => myObservable.unregister(observerA), 3000);


// another variation of this pattern passes the relevant information to the observers when invoking their update methods,
// this way the observers dont require a reference to the observable