// DEFINITION
// Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing
//  for extending functionality.

// The Decorator pattern extends (decorates) an object’s behavior dynamically. The ability to add new behavior at runtime
// is accomplished by a Decorator object which ‘wraps itself’ around the original object. Multiple decorators can add or 
// override functionality to the original object.

// An example of a decorator is security management where business objects are given additional access to privileged 
// information depending on the privileges of the authenticated user. For example, an HR manager gets to work with an
//  employee object that has appended (i.e. is decorated with) the employee's salary record so that salary information
//  can be viewed.

// Decorators provide flexibility to statically typed languages by allowing runtime changes as opposed to inheritance
//  which takes place at compile time. JavaScript, however, is a dynamic language and the ability to extend an object
//  at runtime is baked into the language itself.

// For this reason, the Decorator pattern is less relevant to JavaScript developers. In JavaScript the Extend and 
// Mixin patterns subsume the Decorator pattern.

// ***** useful when: *****
// you want to make spin-offs of your components or wrap them with additional functioanlity
// where you can return, augment, or even block component behaviour
// multiple decorators can wrap a component, each of which introducing completely different effects

// note: the decorator IS a component, but it also HAS a component


// Example

// in an object-oriented language, Shape and ShapeDecorators would be abstract classes or interfaces 
// abstract classes are like interfaces, but allow predefined behaviour 
// abstract classes are never instantiated 


// ======================= ABSTRACT COMPONENT / INTERFACE =======================
// pretend this is an abstract class 
class Shape {
    getDesc() {
        // overridden
    }
    resize() {
        // overridden 
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
// these can vary wildly in how they wrap components
// they can return, augment, or even block component behaviour
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
roundedBlueCircle.getDesc();
roundedBlueCircle.isHide();
roundedBlueCircle.resize();

var redFixedSquare = new BackgroundColorDecorator(new FixedSizeDecorator(new Square()), 'red');
redFixedSquare.getDesc();
redFixedSquare.isHide();
redFixedSquare.resize();

















// links 
// https://www.dofactory.com/javascript/decorator-design-pattern
// https://dzone.com/articles/decorator-design-pattern-in-java
