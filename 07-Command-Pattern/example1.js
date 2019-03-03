// invoker 

// interface Invoker {
//     setCommand() {}
// }

class Remote {
    constructor() {
        this.buttonACommand = null;
    }
    setButtonACommand(command) {
        this.buttonACommand = command
    }
    pressButtonA() {
        this.buttonACommand.execute();
    }
    undoButtonAPress() {
        this.buttonACommand.unexecute();
    }
}

// command

// interface Command {
//     execute() {}
//     unexecute() {}
// }

// the point here is not that were encapsulating something complicated. we're deliberately encapsulating something simple so we can pass it around
class LightOnCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.turnOn();
    }
    unexecute() {
        this.light.turnOff();
    }
}

// receiver 

class Light {
    constructor() {
        this.isLightOn = false;
    }
    turnOn() {
        this.isLightOn = true;
        console.log('turning light on');
    }
    turnOff() {
        this.isLightOn = false;
        console.log('turning light off');
    }
}


// client
let light = new Light();
let lightOnCommand = new LightOnCommand(light);
let remote = new Remote();
remote.setButtonACommand(lightOnCommand);
remote.pressButtonA();
remote.undoButtonAPress();


