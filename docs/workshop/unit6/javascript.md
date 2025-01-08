# JavaScript Basics

#### 1. **Variables**

Variables store data values. Use `let`, `const`, or `var` to declare them.

```javascript
let name = "John"; // Mutable variable
const age = 30; // Immutable variable
var city = "New York"; // Old-style variable
```

#### 2. **Data Types**

JavaScript has the following data types:

- **Primitive**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- **Reference**: `object`, `array`, `function`

```javascript
let str = "Hello"; // string
let num = 42; // number
let isHappy = true; // boolean
let nothing = null; // null
let notDefined; // undefined
let obj = { key: "value" }; // object
let arr = [1, 2, 3]; // array
```

#### 3. **Operators**

- **Arithmetic**: `+`, `-`, `*`, `/`, `%`
- **Comparison**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical**: `&&`, `||`, `!`

```javascript
console.log(10 + 5); // 15
console.log(10 === "10"); // false (strict equality)
```

#### 4. **Control Structures**

- **If-Else**

```javascript
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

- **Loops**

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

let i = 0;
while (i < 3) {
  console.log(i); // 0, 1, 2
  i++;
}
```

#### 5. **Functions**

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"
```

#### 6. **Events**

Interact with the DOM using events.

```javascript
document.querySelector("button").addEventListener("click", function () {
  alert("Button clicked!");
});
```

#### 7. **ES6+ Features**

- **Arrow Functions**

```javascript
const add = (a, b) => a + b;
console.log(add(3, 5)); // 8
```

- **Template Literals**

```javascript
const message = `Age: ${age}`;
console.log(message); // "Age: 30"
```

- **Destructuring**

```javascript
const user = { name: "John", age: 30 };
const { name, age } = user;
console.log(name); // "John"
```

- **Modules**

```javascript
// Export
export const greet = () => "Hello";
// Import
import { greet } from "./file.js";
```

#### 8. **Objects and Arrays**

- **Objects**

```javascript
const person = { firstName: "John", lastName: "Doe" };
console.log(person.firstName); // "John"
```

- **Arrays**

```javascript
const colors = ["red", "green", "blue"];
colors.push("yellow");
console.log(colors); // ["red", "green", "blue", "yellow"]
```

#### 9. **Promises and Async/Await**

Handle asynchronous operations.

```javascript
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
```

#### 10. **Classes**

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
const dog = new Animal("Dog");
dog.speak(); // "Dog makes a sound."
```
