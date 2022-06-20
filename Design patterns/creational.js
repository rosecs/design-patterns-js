/*
Creational Patterns
-Control the creation process of an object
-Applicable to many languages
-Patterns explored: clasess, constructor, singleton, factory, and abstract factory
*/

//Class design pattern
/*
class Car {
    constructor(doors, engine, color) {
            this.doors;
            this.engine;
            this.color;
        
    }
}
*/
//Singleton Pattern
/*
let instance = null;

class Car {
    constructor(doors, engine, color) {
        if (!instance) {
            this.doors;
            this.engine;
            this.color;
        } else {
            return instance;
        }
    }
}
*/
//Constructor Pattern
/*
class SUV extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this.wheels = 4;
    }
}
*/

// Factory Pattern
class Car {
    constructor(doors, engine, color) {
        this.doors;
        this.engine;
        this.color;
    }
}

class carFactory {
    createCar(type) {
        switch (type) {
            case 'civic':
                return new Car(4, 'V8', 'red')
            case 'honda' :
                return new Car(4, 'V6', 'blblue')
        }
    }
}
//const civic = new Car(4, 'V6', 'gray');
//const cx5 = new SUV(4, 'V8', 'red');
//const civic = new Car(4, 'V8', 'red');
//const honda = new Car(4, 'V8', 'red');
const factory = new carFactory();
const myHonda = factory.createCar('honda');

//console.log(civc);
//console.log(honda);
console.log(myHonda);