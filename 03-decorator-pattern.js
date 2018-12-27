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

// useful when:
// you want to make spin-offs of your components or wrap them with additional functioanlity
// where you can augment/block/return data as is from said components
// multiple decorators can wrap a component, each of which introducing completely different effects

// note: the decorator IS a component, but it also HAS a component


// Example

// in an object-oriented language, Shape and ShapeDecorators would be abstract classes 

// ======================= ABSTRACT COMPONENT / INTERFACE =======================
// pretend Shape is an abstract class (like an interface but with some pre-defined behaviour) -> could have also used an interface (if we had them in javascript) and then also defined isHide() on every shape 
class Shape {
    draw() {
        // overridden
    }
    resize() {
        // overridden
    }
    getDesc() {
        // overridden
    }
    isHide() {
        return false;
    }
}

class Circle extends Shape {
    draw() {
        return 'Drawing Circle';
    }
    resize() {
        return 'Resizing Circle';
    }
    getDesc() {
        return 'Circle';
    }
}

class Square extends Shape {
    draw() {
        return 'Drawing Square';
    }
    resize() {
        return 'Resizing Square';
    }
    getDesc() {
        return 'Square';
    }
}


class ShapeDecorator extends Shape {
    constructor(decoratedShape) {
        super();
        this.decoratedShape = decoratedShape;
    }
}

class BackgroundDecorator extends ShapeDecorator {
    constructor(decoratedShape, color) {

    }
}
















// links 
// https://www.dofactory.com/javascript/decorator-design-pattern
// https://dzone.com/articles/decorator-design-pattern-in-java
