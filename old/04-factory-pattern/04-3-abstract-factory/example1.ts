// ABSTRACT CREATOR SUPERCLASS

abstract class UIControlsFactory {
    abstract createCheckbox(): Checkbox
    abstract createButton(): Button
}

// CONCRETE CREATOR SUBCLASSES

class MacOSControls extends UIControlsFactory {
    createCheckbox() {
        return new MacOSCheckbox();
    }
    createButton() {
        return new MacOSButton();
    }
}

class LinuxControls extends UIControlsFactory {
    createCheckbox() {
        return new LinuxCheckbox();
    }
    createButton() {
        return new LinuxButton();
    }
}

class WindowsControls extends UIControlsFactory {
    createCheckbox() {
        return new WindowsCheckbox();
    }
    createButton() {
        return new WindowsButton();
    }
}

//  PRODUCT A INTERFACE 

interface Checkbox {
    check(): void;
}

//  PRODUCT A CONCRETE IMPLEMENTATIONS

class MacOSCheckbox implements Checkbox {
    check() {
        console.log('over-priced checking');
    }
}

class LinuxCheckbox implements Checkbox {
    check() {
        console.log('unknown checking');
    }
}

class WindowsCheckbox implements Checkbox {
    check() {
        console.log('crash check crash');
    }
}

//  PRODUCT B INTERFACE 

interface Button {
    click(): void;
}

//  PRODUCT B CONCRETE IMPLEMENTATIONS

class MacOSButton implements Button {
    click() {
        console.log('super stylish button click');
    }
}

class LinuxButton implements Button {
    click() {
        console.log('nobody knows i exist button click');
    }
}

class WindowsButton implements Button {
    click() {
        console.log('the button click you grew up on');
    }
}

// CLIENT

class Client2 {
    OSControls!: UIControlsFactory;
    setOperatingSystem(OS: string) {
        if (OS == 'macOS') {
            this.OSControls = new MacOSControls();
        } else if (OS == 'linux') {
            this.OSControls = new LinuxControls();
        } else if (OS == 'windows') {
            this.OSControls = new WindowsControls();
        }
    }
    getCheckedCheckbox() {
        let c = this.OSControls.createCheckbox()
        c.check();
        return c;
    }
    getButton() {
        return this.OSControls.createButton();
    }
}

let myApp = new Client2();
myApp.setOperatingSystem('macOS');
myApp.getCheckedCheckbox();
let myAppsButton = myApp.getButton();
myAppsButton.click();
