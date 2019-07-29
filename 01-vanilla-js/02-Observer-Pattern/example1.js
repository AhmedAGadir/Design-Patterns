class Observable {
    constructor() {
        this.observers = [];
        this.state = {
            value: 0
        }
        console.log('intial state', this.state)
    }
    setState(fn) {
        console.log('updating state...')
        let updatedState = fn.call(this, this.state);
        this.state = {
            ...this.state,
            ...updatedState
        };
        console.log('updatedState', this.state)
        this.notify();
    }
    register(observers) {
        console.log('registering observers', observers)
        this.observers.push(...observers)
    }
    unregister(observer) {
        console.log('unregistering an observer', observer)
        this.observers = this.observers.filter(ob => ob !== observer);
    }
    notify() {
        console.log('notifying observers...')
        this.observers.forEach(observer => observer.update())
    }

}

class ObserverA {
    constructor(observableRef) {
        this.observableRef = observableRef;
    }
    update() {
        console.log('updating ObserverA...')
        let newState = this.observableRef.state;
        // ...
    }
}
class ObserverB {
    constructor(observableRef) {
        this.observableRef = observableRef;
    }
    update() {
        console.log('updating ObserverB...')
        let newState = this.observableRef.state;
        // ...
    }
}
class ObserverC {
    constructor(observableRef) {
        this.observableRef = observableRef;
    }
    update() {
        console.log('updating ObserverC...')
        let newState = this.observableRef.state;
        // ...
    }
}

let myObservable = new Observable();
let observerA = new ObserverA(myObservable);
let observerB = new ObserverB(myObservable);
let observerC = new ObserverC(myObservable);
myObservable.register([observerA, observerB, observerC]);

myObservable.setState(prevState => ({
    value: prevState.value + 1
}))

myObservable.unregister(observerA);

myObservable.setState(prevState => ({
    value: prevState.value + 1
}))

// another variation of this pattern passes the relevant information to the observers when invoking their update methods,
// this way the observers dont require a reference to the observable