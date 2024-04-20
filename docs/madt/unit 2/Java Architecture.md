# Java Architecture

Java Architecture is a collection of components, i.e., JVM, JRE, and JDK. It integrates the process of interpretation and compilation. It defines all the processes involved in creating a Java program. Java Architecture explains each and every step of how a program is compiled and executed.

![Java Architecture](/img/android/java-architecture.png)

Java Architecture can be explained by using the following steps:

> There is a process of compilation and interpretation in Java.
> Java compiler converts the Java code into byte code.
> After that, the JVM converts the byte code into machine code.
> The machine code is then executed by the machine.

Let's explore the terminology and concepts associated with Java architecture:

1. **Compilation in Java**:

   - Java combines compilation and interpretation. The Java compiler compiles the source code into bytecode.
   - At runtime, the Java Virtual Machine (JVM) converts this bytecode into machine code specific to the underlying hardware.

2. **Java Virtual Machine (JVM)**:

   - JVM provides an environment for running Java programs.
   - It converts bytecode into machine code, which is executed by the host machine.
   - JVM is unique for each platform, but it interprets the same bytecode universally, making Java platform-independent.

3. **Java Runtime Environment (JRE)**:

   - JRE contains JVM, class libraries, and supporting components.
   - During runtime, bytecode is loaded, verified, and interpreted by JVM.

4. **Class Loader**:

   - Loads all required class files for program execution.
   - Ensures security by separating classes obtained through the network from locally available classes.

5. **Bytecode Verifier**:

   - Verifies bytecode for security issues and compliance with JVM specifications.
   - Checks for unauthorized memory access, stack overflows, and illegal data conversions.

6. **Just-in-Time (JIT) Compiler**:

   - Optimizes bytecode execution by compiling frequently executed code segments into native machine code.
   - Improves performance by caching compiled code for reuse.

7. **Garbage Collection**:

   - Manages memory by reclaiming unused objects.
   - Automatically destroys objects when they are no longer referenced, freeing up memory resources.

8. **Java Classes and Objects**:

   - Objects encapsulate data and behavior, following the principles of object-oriented programming (OOP).
   - Objects have state (data) and behavior (methods).
   - Objects are instances of classes, which define their structure and behavior.
   - Classes contain fields (variables) and methods (procedures), defining the state and behavior of objects.

9. **Class-based Programming**:

   - Java follows a class-based programming model, where objects are instances of classes.
   - Classes define the blueprint for creating objects with specific attributes and behaviors.
   - Methods in classes define the behavior of objects, while fields define their state.

10. **Platform Independence**:
    - Java achieves platform independence by compiling code into bytecode, which is interpreted by JVM.
    - JVM converts bytecode into machine code specific to the underlying platform, enabling Java programs to run on any platform without modification.

## Components of Java Architecture

The Java architecture includes the three main components:

> Java Virtual Machine (JVM)
> Java Runtime Environment (JRE)
> Java Development Kit (JDK)

### Java Virtual Machine

The main feature of Java is WORA. WORA stands for Write Once Run Anywhere. The feature states that we can write our code once and use it anywhere or on any operating system. Our Java program can run any of the platforms only because of the Java Virtual Machine. It is a Java platform component that gives us an environment to execute java programs. JVM's main task is to convert byte code into machine code.

### JVM Architecture

![Java Architecture](/img/android/java-architecture2.png)

**ClassLoader:** ClassLoader is a subsystem used to load class files. ClassLoader first loads the Java code whenever we run it.

**Class Method Area:** In the memory, there is an area where the class data is stored during the code's execution. Class method area holds the information of static variables, static methods, static blocks, and instance methods.

**Heap:** The heap area is a part of the JVM memory and is created when the JVM starts up. Its size cannot be static because it increase or decrease during the application runs.

**Stack:** It is also referred to as thread stack. It is created for a single execution thread. The thread uses this area to store the elements like the partial result, local variable, data used for calling method and returns etc.

**Native Stack:** It contains the information of all the native methods used in our application.

**Execution Engine:** It is the central part of the JVM. Its main task is to execute the byte code and execute the Java classes. The execution engine has three main components used for executing Java classes.

**Interpreter:** It converts the byte code into native code and executes. It sequentially executes the code. The interpreter interprets continuously and even the same method multiple times. This reduces the performance of the system, and to solve this, the JIT compiler is introduced.

**JIT Compiler:** JIT compiler is introduced to remove the drawback of the interpreter. It increases the speed of execution and improves performance.

**Garbage Collector:** The garbage collector is used to manage the memory, and it is a program written in Java. It works in two phases, i.e., Mark and Sweep. Mark is an area where the garbage collector identifies the used and unused chunks of memory. The Sweep removes the identified object from the Mark

**Java Native Interface**
Java Native Interface works as a mediator between Java method calls and native libraries.

## Java Runtime Environment

![Java Architecture](/img/android/java-architecture2.png)

Java Run-time Environment (JRE) is the part of the Java Development Kit (JDK). It is a freely available software distribution which has Java Class Library, specific tools, and a stand-alone JVM. It is the most common environment available on devices to run java programs. The source Java code gets compiled and converted to Java bytecode. If you wish to run this bytecode on any platform, you require JRE. The JRE loads classes, verify access to memory, and retrieves the system resources. JRE acts as a layer on the top of the operating system.
