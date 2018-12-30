
//  ABSTRACT CREATOR SUPERCLASS

class Dialog {
    createButton() { /* abstract method */ }
    render() {
        let okButton = createButton();
        okButton.onClick(closeDialog);
        okButton.render();
    }
}

// CONCRETE CREATOR SUBCLASS

class WindowsDialog extends Dialog {
    createButton = () => new WindowsButton();
}

class WebDialog extends Dialog {
    createButton = () => new HTMLButton();
}

//  PRODUCT INTERFACE 

interface Button {
    method onClick()
method render()
}

// CONCRETE PRODUCT IMPLEMENTATION 

class WindowsButton implements Button {
    render() { /* render to screen */ }
    onClick() { /* do something */ }
}

class HTMLButton implements Button {
    render() { /* render to screen */ }
    onClick() { /* do something */ }
}

// RUN CODE

let dialog;
let config = readApplicationConfigFile();

if (config.OS == 'Windows') {
    dialog = new WindowsDialog();
} else if (config.OS == 'Web') {
    dialog = new WebDialog();
} else {
    throw new Error('Error! Unknown operating system')
}

dialog.render();

