1. **Class Methods and Instances**:
   - Data encapsulation is achieved in a class by declaring variables, known as instance variables, and methods.
   - Class variables are global to the class and its instances, useful for maintaining global states.
   - Methods operate on instances of classes, facilitating communication between objects.

2. **Inheritance**:
   - Inheritance allows defining a class in terms of another class, facilitating code reuse and organization.
   - Subclasses inherit variables and methods from superclasses, extending functionality as needed.

3. **Types of Inheritance**:

- Single Inheritance: In single inheritance, a class inherits properties and methods from only one parent class. The child class extends the parent class and can override its methods or add new methods.


- Multi-level Inheritance: In multi-level inheritance, a class extends another class that has already extended a parent class. This creates a hierarchical structure of classes, where each class inherits properties and methods from its immediate parent class and all the parent classes above it.


- Hierarchical Inheritance: In hierarchical inheritance, multiple child classes inherit properties and methods from a single-parent class. This creates a tree-like structure of classes, where the parent class is at the top and the child classes are at the bottom.


- Multiple Inheritance (through interfaces): Java does not support multiple inheritance of classes, but it does support multiple inheritance through interfaces. An interface is a collection of abstract methods that a class can implement. A class can implement multiple interfaces and inherit their methods.

4. **Polymorphism**:
   - Polymorphism allows objects of different types to be treated as objects of a common superclass.
   - Compile-time polymorphism involves function overloading and operator overloading.
   - Run-time polymorphism involves dynamic method binding, typically achieved through virtual functions.

5. **Interfaces and Abstract Classes**:
   - Interfaces define a contract for classes, specifying methods without implementation details.
   - Classes implementing an interface provide concrete implementations for the interface methods.
   - Abstract classes contain one or more abstract methods and cannot be instantiated; subclasses must provide implementations for abstract methods.

6. **Android Fundamentals**:
   - Creating an Android app involves defining an Android Virtual Device (AVD) using the AVD Manager.
   - The AVD configuration includes specifying device details such as name, device type, target platform, and system image.

These concepts are fundamental to understanding OOP principles and developing Android applications. Understanding them is crucial for building robust, maintainable, and scalable software solutions.

---

// Parent class
class Animal {
    String name; // Instance variable

    // Constructor
    Animal(String name) {
        this.name = name;
    }

    // Method (to be overridden)
    void speak() {
        System.out.println("Animal makes a sound");
    }
}

// Child class Dog inheriting Animal
class Dog extends Animal {
    String breed; // Additional instance variable

    // Constructor
    Dog(String name, String breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }

    // Overriding speak method
    @Override
    void speak() {
        System.out.println(name + " says Woof!");
    }
}

// Child class Cat inheriting Animal
class Cat extends Animal {
    String color; // Additional instance variable

    // Constructor
    Cat(String name, String color) {
        super(name); // Call parent constructor
        this.color = color;
    }

    // Overriding speak method
    @Override
    void speak() {
        System.out.println(name + " says Meow!");
    }
}

// Main class
public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy", "Labrador");
        Cat myCat = new Cat("Whiskers", "Grey");

        myDog.speak();  // Output: Buddy says Woof!
        myCat.speak();  // Output: Whiskers says Meow!
    }
}

---
