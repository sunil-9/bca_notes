# DOM Manipulation Basics

DOM (Document Object Model) is a tree-like structure representing the content of an HTML document. JavaScript can be used to manipulate the DOM dynamically.

---

## DOM Basics

### **1. Accessing DOM Elements**

- **By ID**

```javascript
const element = document.getElementById("myElement");
console.log(element);
```

- **By Class Name**

```javascript
const elements = document.getElementsByClassName("myClass");
console.log(elements[0]);
```

- **By Tag Name**

```javascript
const elements = document.getElementsByTagName("div");
console.log(elements[0]);
```

- **Using Query Selector**

```javascript
const element = document.querySelector(".myClass"); // Selects the first match
const elements = document.querySelectorAll(".myClass"); // Selects all matches
console.log(elements);
```

---

### **2. Modifying Element Content**

- **Inner Text**

```javascript
const element = document.getElementById("myElement");
element.innerText = "Hello World!";
```

- **Inner HTML**

```javascript
element.innerHTML = "<strong>Hello World!</strong>";
```

---

### **3. Changing Attributes**

- **Get/Set Attributes**

```javascript
element.setAttribute("src", "image.jpg"); // Set an attribute
console.log(element.getAttribute("src")); // Get an attribute
```

- **Direct Attribute Manipulation**

```javascript
element.id = "newId";
element.href = "https://example.com";
```

---

### **4. Changing Styles**

```javascript
const element = document.getElementById("myElement");
element.style.color = "red";
element.style.backgroundColor = "yellow";
```

---

### **5. Adding/Removing Classes**

- **Add Class**

```javascript
element.classList.add("newClass");
```

- **Remove Class**

```javascript
element.classList.remove("oldClass");
```

- **Toggle Class**

```javascript
element.classList.toggle("hidden");
```

- **Check Class**

```javascript
console.log(element.classList.contains("myClass")); // true/false
```

---

### **6. Creating and Appending Elements**

- **Create Element**

```javascript
const newDiv = document.createElement("div");
newDiv.innerText = "I am a new div!";
```

- **Append to Parent**

```javascript
document.body.appendChild(newDiv);
```

- **Insert Before**

```javascript
const referenceNode = document.getElementById("reference");
document.body.insertBefore(newDiv, referenceNode);
```

---

### **7. Removing Elements**

```javascript
const element = document.getElementById("myElement");
element.remove();
```

---

### **8. Event Handling**

- **Add Event Listener**

```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  alert("Button clicked!");
});
```

- **Inline Event**

```html
<button onclick="alert('Button clicked!')">Click Me</button>
```

- **Remove Event Listener**

```javascript
const handleClick = () => console.log("Clicked!");
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```

---

### **9. Traversing DOM**

- **Parent Node**

```javascript
console.log(element.parentNode);
```

- **Child Nodes**

```javascript
console.log(element.childNodes); // Includes text nodes
console.log(element.children); // Only element nodes
```

- **Next/Previous Sibling**

```javascript
console.log(element.nextSibling); // Includes text nodes
console.log(element.nextElementSibling); // Only element nodes
```

---

### **10. Common Use Cases**

- **Toggle Visibility**

```javascript
element.style.display = element.style.display === "none" ? "block" : "none";
```

- **Change Content Dynamically**

```javascript
const updateContent = () => {
  element.innerHTML = "Updated Content!";
};
button.addEventListener("click", updateContent);
```

- **Form Handling**

```javascript
const input = document.getElementById("myInput");
console.log(input.value); // Get input value
input.value = "New Value"; // Set input value
```
