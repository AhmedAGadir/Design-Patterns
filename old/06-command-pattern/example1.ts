
// invoker 

class Remote {
    buttonACommand!: Command;

    setButtonACommand(command: Command) {
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

interface Command {
    execute(): void;
    unexecute(): void;
}

// the point here is not that were encapsulating something complicated. we're deliberately encapsulating something simple so we can pass it around
class LightOnCommand implements Command {
    light: Light;
    constructor(l: Light) {
        this.light = l;
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
    lightOn: boolean = false;
    turnOn() {
        this.lightOn = true;
        console.log('turning light on');
    }
    turnOff() {
        this.lightOn = false;
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


