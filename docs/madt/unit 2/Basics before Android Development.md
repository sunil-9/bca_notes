**Basics of Programming using Java**

_1.1 Variables, Data Types, Operators:_ In Java, variables are used to
store data. Data types specify the kind of value a variable can hold,
such as integers, floating-point numbers, or characters. Operators are
used to perform operations on variables.

Example Code:

```js {7} title="VariablesExample.java"
    public class VariablesExample {
        public static void main(String[] args) {
            int num1 = 10;
            double num2 = 5.5;
            char letter = 'A';

            int sum = num1 + (int) num2; // Casting double to int
            System.out.println("Sum: " + sum);
            System.out.println("Letter: " + letter);
        }
    }
```

Output:

> Sum: 15
> Letter: A

_1.2 Control Structures: if, else, switch and loops:_ Control structures
allow you to control the flow of your program. Conditional statements
like "if" and "else" help make decisions, while loops allow you to
repeat a block of code.

Example Code:
```js  {5-9,11-13,16,18} title="ControlStructuresExample.java
    public class ControlStructuresExample {
        public static void main(String[] args) {
            int age = 18;

            if (age >= 18) {
                System.out.println("You are an adult.");
            } else {
                System.out.println("You are a minor.");
            }

            for (int i = 1; i <= 5; i++) {
                System.out.println("Iteration " + i);
            }
    int dayOfWeek = 3;

            switch (dayOfWeek) {
                case 1:
                    System.out.println("It's Monday.");
                    break;
                case 2:
                    System.out.println("It's Tuesday.");
                    break;
                case 3:
                    System.out.println("It's Wednesday.");
                    break;
                case 4:
                    System.out.println("It's Thursday.");
                    break;
                case 5:
                    System.out.println("It's Friday.");
                    break;
                case 6:
                    System.out.println("It's Saturday.");
                    break;
                case 7:
                    System.out.println("It's Sunday.");
                    break;
                default:
                    System.out.println("Invalid day of the week.");
                    break;
            }
        }
    }
```

Output:

> You are an adult.
> Iteration 1
> Iteration 2
> Iteration 3
> Iteration 4
> Iteration 5
> It's Wednesday.

_1.3 Functions and Object-Oriented Concepts:_ Functions are reusable
blocks of code that can be called multiple times. Object-oriented
concepts involve creating classes and objects to organize and structure
your code.

Example Code:

```js {4-6,14} title="OOPExample.java"
    class Circle {
        double radius;

        double calculateArea() {
            return Math.PI * radius * radius;
        }
    }

    public class OOPExample {
        public static void main(String[] args) {
            Circle myCircle = new Circle();
            myCircle.radius = 5.0;

            double area = myCircle.calculateArea();
            System.out.println("Area: " + area);
        }
    }
```

Output:

> Area: 78.53981633974483

_1.4 Polymorphism and Inheritance:_ Polymorphism allows objects of
different classes to be treated as objects of a common superclass.
Inheritance enables a class to inherit properties and behaviors from
another class.

Example Code:

```js {2-16} title="PolymorphismExample.java"
    class Shape {
        void draw() {
            System.out.println("Drawing a shape");
        }
    }

    class Circle extends Shape {
        void draw() {
            System.out.println("Drawing a circle");
        }
    }

    class Square extends Shape {
        void draw() {
            System.out.println("Drawing a square");
        }
    }

    public class PolymorphismExample {
        public static void main(String[] args) {
            Shape[] shapes = { new Circle(), new Square() };
            for (Shape shape : shapes) {
                shape.draw();
            }
        }
    }
```

Output:

> Drawing a circle
> Drawing a square

_1.5 Encapsulation:_ Encapsulation refers to the practice of hiding
internal details of an object and providing a controlled interface to
interact with it.

Example Code:

```js {2-21} title="EncapsulationExample.java"
    class Student {
        private String name;
        private int age;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            if (age > 0) {
                this.age = age;
            }
        }
    }

    public class EncapsulationExample {
        public static void main(String[] args) {
            Student student = new Student();
            student.setName("Alice");
            student.setAge(-20); // This won't change the age due to validation in the setter

            System.out.println("Name: " + student.getName());
            System.out.println("Age: " + student.getAge());
        }
    }
```

Output:

> Name: Alice
> Age: 0

1.6 Static Classes and Functions:\_ Static members belong to the class
rather than instances of the class. Static methods and variables can be
accessed without creating an instance of the class.

Example Code:

```js {2-4} title="StaticExample.java"
    class MathUtils {
        static int add(int a, int b) {
            return a + b;
        }
    }

    public class StaticExample {
        public static void main(String[] args) {
            int sum = MathUtils.add(5, 3);
            System.out.println("Sum: " + sum);
        }
    }
```

Output:

> Sum: 8

**Section 2: Introduction to Version Control: Git and GitHub**

2.1 Introduction to Git and GitHub:\_ Version control helps track
changes to your code over time. Git is a widely used version control
system, and GitHub is a platform that hosts repositories and enables
collaboration.

2.1 Setting Up Git and GitHub for Version Control:\_ Before we delve
into more advanced programming concepts, let's ensure you have the tools
to manage your code effectively using version control. Follow these
steps to set up Git and connect it with GitHub on your Windows PC:

a. **Download and Install Git:**

    I.  Visit the official Git website at
        https://git-scm.com/download/win.
    II. Download the installer for Windows.
    III. Run the installer and follow the installation instructions.

b. **Configure Git:** Open the command prompt or Git Bash (included
with Git installation) and configure your identity by running the
following commands. Replace "Your Name" and "your.email@example.com"
with your actual name and email.

>     git config --global user.name "Your Name"
>     git config --global user.email your.email@example.com

c. **Generate SSH Key:** To securely connect with GitHub, you can use
SSH keys. Generate a new SSH key using the following command:

>     ssh-keygen -t ed25519 -C "your.email@example.com"

d. Press Enter to save the key in the default location
(`~/.ssh/id_ed25519`) and create a passphrase for added security if
desired.

e. **Add SSH Key to GitHub:**

    I.  Copy your public SSH key to the clipboard:

    II. clip < ~/.ssh/id_ed25519.pub

    III. Visit your GitHub account settings
         (https://github.com/settings/keys).

    IV. Click on "New SSH Key" and paste the copied key.

f. **Test the Connection:** To verify that everything is set up
correctly, run the following command in Git Bash or the command
prompt:

>     ssh -T git@github.com

g. You should see a message confirming your connection to GitHub.

h. **Creating a Repository on GitHub:**

    a.  Log in to your GitHub account.
    b.  Click the "+" button in the top-right corner and select "New
        Repository."
    c.  Give your repository a name, choose settings as needed, and
        click "Create repository."

i. **Pushing Code to GitHub:** Once you've made changes to your code,
you can push it to your GitHub repository using commands like:

>     git add .
>     git commit -m "Add initial code"
>     git remote add origin "repository URL"
>     git push -u origin main

_2.2 Basic Git Commands:_

- `git init`: Initialize a new Git repository.

- ` git ``add <filename>`: Stage changes for commit.

- `git commit -m "Commit message"`: Commit staged changes.

- `git status`: View the status of your repository.

- `git log`: View commit history.

**Conclusion:** This workshop has provided you with a solid foundation
in Java programming and introduced you to version control using Git and
GitHub. These skills are essential as you embark on your journey into
Android app development.
