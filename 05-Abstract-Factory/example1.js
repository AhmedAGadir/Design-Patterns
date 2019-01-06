// ABSTRACT CREATOR SUPERCLASS

class UIControlsFactory {
    createCheckbox() {
        // abstract method
    }
    createButton() {
        // abstract method
    }
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

// public interface Checkbox {
//     public void check();
// }

//  PRODUCT A CONCRETE IMPLEMENTATIONS

class MacOSCheckbox {
    check() {
        console.log('over-priced checking');
    }
}

class LinuxCheckbox {
    check() {
        console.log('unknown checking');
    }
}

class WindowsCheckbox {
    check() {
        console.log('crash check crash');
    }
}

//  PRODUCT B INTERFACE 

// public interface Button {
//     public void click();
// }

//  PRODUCT B CONCRETE IMPLEMENTATIONS

class MacOSButton {
    click() {
        console.log('super stylish button click');
    }
}

class LinuxButton {
    click() {
        console.log('nobody knows i exist button click');
    }
}

class WindowsButton {
    click() {
        console.log('the button click you grew up on');
    }
}

// CLIENT

class Client {
    constructor() {
        this.OSControls = null;
    }
    setOperatingSystem(OS) {
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

let myApp = new Client();
myApp.setOperatingSystem('macOS');
myApp.getCheckedCheckbox();
let myAppsButton = myApp.getButton();
myAppsButton.click();
