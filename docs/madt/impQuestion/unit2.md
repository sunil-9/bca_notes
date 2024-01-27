## 1. Difference between abstract class concrete class and interface class with example java?

In Java, abstract classes, concrete classes, and interfaces are different constructs used for defining classes and their behavior. Here's an explanation of each along with an example:

#### Abstract Class:

<!-- An abstract class is a class that cannot be instantiated on its own and serves as a blueprint for other classes.
It can contain both abstract and non-abstract methods.
Abstract methods are declared without an implementation and must be implemented by any non-abstract subclass.
It can also have regular methods with implementations.
Abstract classes are useful when you want to provide a common interface for a group of related classes. -->

An abstract class is a class that cannot be instantiated on its own and serves as a blueprint for other classes. It can contain both abstract and non-abstract methods. Abstract methods are declared without an implementation and must be implemented by any non-abstract subclass. It can also have regular methods with implementations. Abstract classes are useful when you want to provide a common interface for a group of related classes.

#### Example:

```
abstract class Animal {
    public abstract String makeSound();

    public void sleep() {
        System.out.println("Zzz");
    }
}

public class Main {
    public static void main(String[] args) {
       Animal animal = new Animal() {
            @Override
            String makeSound() {
                return "Woof";
            }
        };
        animal.makeSound();
        animal.sleep();
    }
}
```

#### Output:

```
Woof
Zzz
```

#### Concrete Class:

A concrete class is a regular class that can be instantiated directly. It can have both abstract and non-abstract methods, but all the abstract methods defined in its parent abstract class must be implemented. Concrete classes provide the actual implementation of the methods defined in their parent classes. They are used to create objects that have specific behavior and attributes.

#### Example:

```
abstract class Vehicle {
    public abstract void start();
}

class Car extends Vehicle {
    public void start() {
        System.out.println("Car started");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle vehicle = new Car();
        vehicle.start();
    }
}

```

#### Output:

```
Car started

```

#### Interface

An interface is a collection of abstract methods that defines a contract for classes to adhere to. It cannot be instantiated directly; instead, classes implement interfaces to provide their own implementation of the interface methods. An interface can contain constant fields (public static final) and default methods (with implementations) since Java 8. It is useful when you want to enforce certain behavior across unrelated classes.

#### Example:

```
interface Shape {
    void draw();
}

class Circle implements Shape {
    public void draw() {
        System.out.println("Drawing a circle");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape shape = new Circle();
        shape.draw();
    }
}


```

#### Output:

```
Drawing a circle
```

In summary, abstract classes provide a common interface and may have implemented methods, concrete classes are regular classes that provide the actual implementation, and interfaces define contracts for classes to implement.

## 2. Differentiate between class and object ? write a class , instantiate it and explain

**Class:**
A class is a blueprint or template that defines the structure and behavior of objects. It specifies the attributes (variables) and methods (functions) that objects of that class will have. It acts as a blueprint for creating multiple instances (objects) with similar characteristics.A class can be considered as a user-defined data type.

**Object:**
An object is an instance of a class. It represents a specific occurrence of the class, with its own set of attribute values and can perform actions defined by the class's methods. Objects are created using the new keyword, which allocates memory for the object and calls the class's constructor to initialize it. Each object has its own unique state and behavior, while still adhering to the structure and behavior defined by the class.

```
// Class definition
public class Car {
    private String make;
    private String model;
    private int year;

    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public void startEngine() {
        System.out.println("The engine is now running.");
    }

    public void stopEngine() {
        System.out.println("The engine has been stopped.");
    }
}

// Object instantiation and usage
public class Main {
    public static void main(String[] args) {
        // Creating an object (instance) of the Car class
        Car myCar = new Car("Toyota", "Camry", 2022);

        // Accessing object attributes
        System.out.println("Make: " + myCar.make);
        System.out.println("Model: " + myCar.model);
        System.out.println("Year: " + myCar.year);

        // Calling object methods
        myCar.startEngine();
        myCar.stopEngine();
    }
}
```

we define a class called `Car` with private attributes (`make`, `model`, and `year`) and public methods (`startEngine` and `stopEngine`). We then create an object `myCar` by instantiating the `Car` class using the `new` keyword and passing the required arguments to the constructor. Finally, we access the object's attributes and call its methods using the object reference(`myCar`).

## 3. Write example of Hierarchical Inheritance.

In Hierarchical Inheritance, one class serves as a superclass (base class) for more than one subclass. In the below image, class A serves as a base class for the derived classes B, C, and D.

![Hierarchical-Inheritance-in-Java](./images/Hierarchical-Inheritance-in-Java.jpg)

```
// Java program to illustrate the
// concept of Hierarchical inheritance

class A {
	public void print_A() { System.out.println("Class A"); }
}

class B extends A {
	public void print_B() { System.out.println("Class B"); }
}

class C extends A {
	public void print_C() { System.out.println("Class C"); }
}

class D extends A {
	public void print_D() { System.out.println("Class D"); }
}

// Driver Class
public class Test {
	public static void main(String[] args)
	{
		B obj_B = new B();
		obj_B.print_A();
		obj_B.print_B();

		C obj_C = new C();
		obj_C.print_A();
		obj_C.print_C();

		D obj_D = new D();
		obj_D.print_A();
		obj_D.print_D();
	}
}
```

## 4. Write example of Polymorphism in java both runtime and compile time and explain usign example.

**Compile-time polymorphism**, also known as method overloading, occurs when there are multiple methods with the same name but different parameter lists in the same class. The appropriate method is determined by the compiler based on the arguments provided during the method call.
for example:

```
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();

        int result1 = calculator.add(5, 10);           // Calls the int add(int a, int b) method
        double result2 = calculator.add(2.5, 3.7);     // Calls the double add(double a, double b) method

        System.out.println("Result 1: " + result1);    // Output: Result 1: 15
        System.out.println("Result 2: " + result2);    // Output: Result 2: 6.2
    }
}
```
In the given example, the Calculator class has two add methods—one that takes two integers and another that takes two doubles. The appropriate method is called based on the arguments passed during the method call at compile time. The compiler resolves the method call to the correct version, and the output depends on the method chosen.

**Runtime polymorphism**, also known as method overriding, occurs when a subclass overrides a method of its superclass. The appropriate method is determined at runtime based on the actual object type.

example:

```
public class Shape {
    public void draw() {
        System.out.println("Drawing a shape");
    }
}

public class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
}

public class Rectangle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a rectangle");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape shape1 = new Circle();
        Shape shape2 = new Rectangle();
        
        shape1.draw();    // Output: Drawing a circle
        shape2.draw();    // Output: Drawing a rectangle
    }
}
```
In the given example, the Shape class is the superclass, and the Circle and Rectangle classes are subclasses that override the draw method. At runtime, the objects shape1 and shape2 are declared as Shape but assigned instances of Circle and Rectangle, respectively. When the draw method is called, the appropriate version of the method is determined based on the actual object type. This is known as dynamic method dispatch, and it allows different behavior based on the specific object being referred to.