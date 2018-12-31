
// Example

// in an object-oriented language, Shape and ShapeDecorator would be abstract classes or interfaces 
// abstract classes are like interfaces, but allow predefined behaviour 
// abstract classes are never instantiated 


// ======================= ABSTRACT COMPONENT / INTERFACE =======================
// pretend this is an abstract class 
class Shape {
    getDesc() {
        // abstract method (must be specified in subclass)
    }
    resize() {
        // abstract method (must be specified in subclass)
    }
    isHide() {
        return false;
    }
}

// ======================= CONCRETE COMPONENTS =======================
class Circle extends Shape {
    getDesc() {
        return 'Circle'
    }
    resize() {
        return 'increasing shape size'
    }
}

class Square extends Shape {
    getDesc() {
        return 'Square';
    }
    resize() {
        return 'decreasing shape size'
    }
}

class Triangle extends Shape {
    getDesc() {
        return 'Triangle';
    }
    resize() {
        return 'decreasing shape size'
    }
}

// ======================= ABSTRACT DECORATOR  =======================
// this is a slightly different variation from the one showed in HFDP, i think this one makes more sense as the HF example didnt actually do anything (chris confirmed this)
// if you want to use an interface instead of an abstract class here, then each ShapeDecorator would need a constructor setting this.decoratedShape = decoratedShape
// pretend this is an abstract class
class ShapeDecorator extends Shape {
    constructor(decoratedShape) {
        super();
        this.decoratedShape = decoratedShape;
    }
}

// ======================= CONCRETE DECORATORS =======================
class BackgroundColorDecorator extends ShapeDecorator {
    constructor(decoratedShape, backgroundColor) {
        super(decoratedShape);
        this.backgroundColor = backgroundColor;
    }
    // augments behaviour 
    getDesc() {
        return this.decoratedShape.getDesc() + ', backgroundColor: ' + this.backgroundColor;
    }
    // with this pattern, you need to specify all method on every decorators even if your just returning a behaviour as is 
    // (you dont want to traverse the prototype chain, you want to use the behaviour of whatever it is your wrapping)
    // returns wrapped behaviour 
    resize() {
        return this.decoratedShape.resize();
    }
    // returns wrapped behaviour 
    isHide() {
        return this.decoratedShape.isHide();
    }
}

class BorderRadiusDecorator extends ShapeDecorator {
    constructor(decoratedShape, borderRadius) {
        super(decoratedShape);
        this.borderRadius = borderRadius;
    }
    // augments behaviour 
    getDesc() {
        return this.decoratedShape.getDesc() + ', borderRadius: ' + this.borderRadius;
    }
    // returns wrapped behaviour 
    resize() {
        return this.decoratedShape.resize();
    }
    // returns wrapped behaviour 
    isHide() {
        return this.decoratedShape.isHide();
    }
}

class FixedSizeDecorator extends ShapeDecorator {
    constructor(decoratedShape) {
        super(decoratedShape);
    }
    // returns wrapped behaviour 
    getDesc() {
        return this.decoratedShape.getDesc();
    }
    // blocks behaviour 
    resize() {
        return 'this_shape_is_unresizable';
    }
    // returns wrapped behaviour 
    isHide() {
        return this.decoratedShape.isHide();
    }
    // introduces functionality
    // not sure if this is a good idea as it only works when this decorator is the outermost one
    // makeResizeable() {
    //     this.resize = function() {return this.decoratedShape.resize()}
    // }
}



var roundedBlueCircle = new BorderRadiusDecorator(new BackgroundColorDecorator(new Circle(), 'blue'), '5px');
console.group('[roundedBlueCircle]')
console.log(roundedBlueCircle.getDesc());
console.log(roundedBlueCircle.isHide());
console.log(roundedBlueCircle.resize());
console.groupEnd('[roundedBlueCircle]');

var redFixedSquare;
redFixedSquare = new Square();
redFixedSquare = new FixedSizeDecorator(redFixedSquare);
redFixedSquare = new BackgroundColorDecorator(redFixedSquare, 'red');
console.group('[redFixedSquare]')
console.log(redFixedSquare.getDesc());
console.log(redFixedSquare.isHide());
console.log(redFixedSquare.resize());
console.groupEnd('[redFixedSquare]')


