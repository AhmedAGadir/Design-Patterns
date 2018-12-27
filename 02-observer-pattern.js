// DEFINITION

// a one to many dependency between objects so that when one object changes state, all of its dependencies are notified and updated automatically

// useful when:
// you want to push notifications/changes in state in an object to one or more subscribers

// pseudocode 

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
        console.log('notifying observables of updated state')
        this.observers.forEach(observer => observer.update())
    }
}

class ObserverA {
    constructor(observableRef) {
        this.observableRef = observableRef;
    }
    update() {
        console.log('updating observerA')
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


// links 
// https://www.youtube.com/watch?v=_BpmfnqjgzQ&index=2&list=PLrhzvIcii6GNjpARdnO4ueTUAVR9eMBpc
// https://www.dofactory.com/javascript/observer-design-pattern
// [havent watched] https://www.youtube.com/watch?v=xU3oPZUf4Uw&index=3&list=PLrhzvIcii6GNCgHSj44-gXZeTUVbSPC-3
