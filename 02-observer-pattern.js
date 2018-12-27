// DEFINITION

// a one to many dependency between objects so that when one object changes state, all of its dependencies are notified and updated automatically

// useful when:
// you want to push notifications/changes in state in an object to one or more subscribers

// pseudocode 

class Observable {
    constructor() {
        this.observers = [];
        this.state = {
            valuableInfo: 'none lol'
        }
        setInterval(() => {
            this.state.valuableInfo = Math.floor(Math.random() * 999);
            this.notify();
        }, 1000)
    }
    register(observers) {
        this.observers.push(...observers)
    }
    unregister(observer) {
        this.observers = this.observers.filter(ob => ob !== observer);
    }
    notify() {
        this.observers.forEach(observer => observer.update())
    }
}

class ObserverOne {
    constructor(observableRef) {
        this.observableRef = observableRef;
    }
    update() {
        let newStateInfo = this.observableRef.state.valuableInfo;
        console.log('ObserverOne notified lol', newStateInfo)
    }
}
class ObserverTwo {
    constructor(observableRef) {
        this.observableRef = observableRef;
    }
    update() {
        let newStateInfo = this.observableRef.state.valuableInfo;
        console.log('ObserverTwo notified lmao', newStateInfo)
    }
}
class ObserverThree {
    constructor(observableRef) {
        this.observableRef = observableRef;
    }
    update() {
        let newStateInfo = this.observableRef.state.valuableInfo;
        console.log('ObserverThree notified rofl', newStateInfo)
    }
}

let observable = new Observable();
let observerOne = new ObserverOne(observable);
let observerTwo = new ObserverTwo(observable);
let observerThree = new ObserverThree(observable);
observable.register([observerOne, observerTwo, observerThree]);
setTimeout(() => observable.unregister(observerOne), 10000);

// links 
// https://www.youtube.com/watch?v=_BpmfnqjgzQ&index=2&list=PLrhzvIcii6GNjpARdnO4ueTUAVR9eMBpc
// [havent watched] https://www.youtube.com/watch?v=xU3oPZUf4Uw&index=3&list=PLrhzvIcii6GNCgHSj44-gXZeTUVbSPC-3
