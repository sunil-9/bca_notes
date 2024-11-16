## 1. Write the syntax and example of while,do while,foreach,for loop in php

### While Loop

The while loop executes a block of code as long as the specified condition is true.
**Syntax:**

```php
while (condition) {
  code to be executed;
}
```

**Example:**

```php
<?php
$x = 1;
while($x <= 5) {
  echo "The number is: $x <br>";
  $x++;
}
?>
```

In the above example, the loop will run as long as the value of `$x` is less than or equal to 5. The value of `$x` is incremented by 1 in each iteration.
**output:**

```
The number is: 1
The number is: 2
The number is: 3
The number is: 4
The number is: 5
```

### Do While Loop

The do...while loop will always execute the block of code once, it will then check the condition, and repeat the loop while the specified condition is true.
**Syntax:**

```php
do {
  code to be executed;
} while (condition);
```

**Example:**

```php
<?php
$x = 1;
do {
  echo "The number is: $x <br>";
  $x++;
} while ($x <= 5);
?>
```

In the above example, the loop will run at least once, even if the condition is false. The value of `$x` is incremented by 1 in each iteration.
**output:**

```
The number is: 1
The number is: 2
The number is: 3
The number is: 4
The number is: 5
```

### For Loop

The for loop is used when you know in advance how many times the script should run.
**Syntax:**

```php
for (init; condition; increment) {
  code to be executed;
}
```

**Example:**

```php
<?php
for ($x = 0; $x <= 10; $x++) {
  echo "The number is: $x <br>";
}
?>
```

In the above example, the loop will run from 0 to 10, incrementing the value of `$x` by 1 in each iteration.
**output:**

```
The number is: 0
The number is: 1
The number is: 2
The number is: 3
The number is: 4
The number is: 5
The number is: 6
The number is: 7
The number is: 8
The number is: 9
The number is: 10
```

### Foreach Loop

The foreach loop works only on arrays, and is used to loop through each key/value pair in an array.
**Syntax:**

```php
foreach ($array as $value) {
  code to be executed;
}
```

**Example:**

```php
<?php
$colors = array("red", "green", "blue", "yellow");
foreach ($colors as $value) {
  echo "$value <br>";
}
?>
```

In the above example, the loop will iterate through each value in the `$colors` array and print it.
**output:**

```
red
green
blue
yellow
```

## 2. Explain different types of Array in PHP

In PHP, arrays are used to store multiple values in a single variable. There are several types of arrays in PHP, each with its own characteristics and use cases:

### 1. Indexed Array

An indexed array stores values with numeric keys, starting from 0. It is the simplest form of an array in PHP.
**Syntax:**

```php
$array = array(value1, value2, value3, ...);
```

**Example:**

```php
$colors = array("red", "green", "blue");
// Accessing elements
echo $colors[0]; // Output: red
```

In the above example, `$colors` is an indexed array containing three color values. Each value is accessed using its numeric index.

### 2. Associative Array

An associative array stores key-value pairs, where each key is associated with a specific value. Keys can be strings or integers.
**Syntax:**

```php
$array = array(key1 => value1, key2 => value2, ...);
```

**Example:**

```php
$person = array("name" => "John", "age" => 30, "city" => "New York");
// Accessing elements
echo $person["name"]; // Output: John
echo $person["age"]; // Output: 30
```

In the above example, `$person` is an associative array containing information about a person. Each key-value pair represents a specific attribute of the person.

### 3. Multidimensional Array

A multidimensional array is an array that contains one or more arrays as its elements. It can be used to store complex data structures.
**Syntax:**

```php
$array = array(array(value1, value2, ...), array(value1, value2, ...), ...);
```

**Example:**

```php
$students = array(
    array("name" => "Alice", "age" => 20),
    array("name" => "Bob", "age" => 22)
);
// Accessing elements
echo $students[0]["name"]; // Output: Alice
echo $students[1]["age"]; // Output: 22
```

In the above example, `$students` is a multidimensional array containing information about two students. Each student is represented as an associative array within the main array.

## 3. Explain uses of methods with suitable for methods with retum type method with parameters

In PHP, methods (also known as functions) are blocks of code that can be defined and called to perform specific tasks. Methods can have parameters, return values, and return types to enhance their functionality and flexibility.

### 1. Method with Parameters

A method with parameters allows you to pass values to the method when calling it, enabling the method to perform operations on those values.
**Syntax:**

```php
function methodName($param1, $param2, ...) {
  // code to be executed
}
```

**Example:**

```php
function add($num1, $num2) {
  return $num1 + $num2;
}
echo add(5, 3); // Output: 8
```

In the above example, the `add` method takes two parameters (`$num1` and `$num2`) and returns their sum when called with specific values.

## 4. Explain file handling in PHP with suitable example for reading, writing and appending data

File handling in PHP allows you to read, write, and manipulate files on the server or local machine. PHP provides several functions for file handling operations, such as reading, writing, and appending data to files.

### Reading Data from a File

To read data from a file in PHP, you can use the `fopen`, `fread`, and `fclose` functions.
**Example:**

```php
$file = fopen("data.txt", "r") or die("Unable to open file!");
$data = fread($file, filesize("data.txt"));
fclose($file);
echo $data;
```

In the above example, the `fopen` function opens the file `data.txt` in read mode, `fread` reads the contents of the file, and `fclose` closes the file after reading. The file contents are then displayed using `echo`.

### Writing Data to a File

To write data to a file in PHP, you can use the `fopen`, `fwrite`, and `fclose` functions.
**Example:**

```php
$file = fopen("data.txt", "w") or die("Unable to open file!");
$txt = "Hello, World!";
fwrite($file, $txt);
fclose($file);
```

In the above example, the `fopen` function opens the file `data.txt` in write mode, `fwrite` writes the string "Hello, World!" to the file, and `fclose` closes the file after writing.

### Appending Data to a File

To append data to a file in PHP, you can use the `fopen`, `fwrite`, and `fclose` functions with the append mode.

**Example:**

```php
$file = fopen("data.txt", "a") or die("Unable to open file!");
$txt = "New data to append!";
fwrite($file, $txt);
fclose($file);
```

In the above example, the `fopen` function opens the file `data.txt` in append mode, `fwrite` appends the string "New data to append!" to the file, and `fclose` closes the file after appending.

## 5. Write a PHP code to validate a form having controls Email, Password and Retype Password. Also insert these data into a table in a database.(HTML form is must)

    ```html
    <!DOCTYPE html>
    <html>
    <head>
    <title>Form Validation and Database Insertion</title>
    </head>
    <body>
    <h2>Registration Form</h2>
    <form action="insert.php" method="post">
      Email: <input type="email" name="email"><br><br>
      Password: <input type="password" name="password"><br><br>
      Retype Password: <input type="password" name="retype_password"><br><br>
      <input type="submit" value="Submit">
    </form>
    </body>
    </html>
    ```

    ```php
    <?php
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "myDB";
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }
    $email = $_POST['email'];
    if ($email.indexOf('@') === -1 || $email.indexOf('.') === -1) {
      echo "Invalid email format!";
    }
    $password = $_POST['password'];
    $retype_password = $_POST['retype_password'];
    if ($password != $retype_password) {
      echo "Passwords do not match!";
    } else {
      $sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";
      if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
    }
    $conn->close();
    ?>
    ```

## 6. What is user defined function. write a PHP code to calculate factorial of given number using recursive function?(Create HTML form to input the number given by the user)

A user-defined function in PHP is a block of code that performs a specific task and can be defined by the programmer for reuse throughout the program.

**Example:**

```php
<!DOCTYPE html>
<html>
<head>
<title>Factorial Calculator</title>
</head>
<body>
<h2>Factorial Calculator</h2>
<form action="factorial.php" method="post">
  Enter a number: <input type="number" name="number"><br><br>
  <input type="submit" value="Calculate Factorial">
</form>
</body>
</html>
```

```php title="factorial.php"
<?php
function factorial($n) {
  if ($n <= 1) {
    return 1;
  } else {
    return $n * factorial($n - 1);
  }
}
$number = $_POST['number'];
echo "Factorial of $number is: " . factorial($number);
?>
```

In the above example, the user enters a number in the HTML form, which is then passed to the PHP script. The `factorial` function calculates the factorial of the given number using recursion and displays the result.

## 7. Write a PHP code to insert student's detail (name, phone no, gender, email id, address) into a table (make your own assumptions for database name). (HTML form is must)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Student Registration Form</title>
  </head>
  <body>
    <h2>Student Registration Form</h2>
    <form action="insert_student.php" method="post">
      Name: <input type="text" name="name" /><br /><br />
      Phone No: <input type="text" name="phone" /><br /><br />
      gender: <input type="text" name="gender" /><br /><br />
      Email ID: <input type="email" name="email" /><br /><br />
      Address: <input type="text" name="address" /><br /><br />
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$name = $_POST['name'];
$phone = $_POST['phone'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$address = $_POST['address'];
$sql = "INSERT INTO students (name, phone, gender, email, address) VALUES ('$name', '$phone', '$gender', '$email', '$address')";
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
```

In the above example, the user enters the student's details in the HTML form, which are then passed to the PHP script. The script inserts the student's details into a table in the database.

## 8. Write a PHP script for a web application to retrieve all the data from following server

```

web Server Name: 'Apache Server'
Web Server Access Path: '<http://localhost>'
MySQL Server Access Path: '<http://localhost>'
DB User Name: 'root'
DB Password: 'myKey'
Database Name: 'Hospital'
Table Name: 'Doctor'
Attribute names: 'Sno, Name, Address, Age'

```

```php
<?php
$servername = "localhost";
$username = "root";
$password = "myKey";
$dbname = "Hospital";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM Doctor";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "Sno: " . $row["Sno"]. " - Name: " . $row["Name"]. " - Address: " . $row["Address"]. " - Age: " . $row["Age"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>
```

## 9. What are different protocols used in intemet? Explain in details URL encoding and HTML encoding with reference to PHP

### Internet Protocols

1. **HTTP/HTTPS**: Protocol for transferring web pages. HTTPS is the secure version.
2. **FTP**: Used for transferring files between systems.
3. **SMTP**: Protocol for sending emails.
4. **IMAP/POP3**: Protocols for receiving emails.
5. **DNS**: Resolves domain names to IP addresses.
6. **TCP/IP**: Core suite for communication across networks.
7. **WebSocket**: Enables real-time communication over a persistent connection.
8. **UDP**: Connectionless protocol, often used in video streaming and online games.

---

### URL Encoding (in PHP)

URL encoding converts special characters into a format that can be safely transmitted in a URL. It replaces non-alphanumeric characters with percent-encoded values.

**Example (PHP)**:

```php
$encoded = urlencode("Hello World!"); // "Hello+World%21"
```

### HTML Encoding (in PHP)

HTML encoding converts characters into their HTML entities to prevent issues with special characters like `<`, `>`, and `&` in HTML.

**Example (PHP)**:

```php
$encoded = htmlentities("<div>Hello & Welcome!</div>"); // "&lt;div&gt;Hello &amp; Welcome!&lt;/div&gt;"
```

## 10. What is session? Write a PHP session to illustrate the use of session?

### What is a Session?

A **session** is a way to store user-specific information on the server, which can be accessed across multiple pages during a user's visit to a website. It helps maintain state in a stateless HTTP environment, unlike cookies, which store data on the client side.

### PHP Session Example

Here’s how to start and use sessions in PHP:

1. **Starting a Session**:

```php
// Start the session
session_start();
```

2. **Setting Session Variables**:

```php
// Set session variables
$_SESSION["username"] = "JohnDoe";
$_SESSION["user_id"] = 123;
```

3. **Accessing Session Variables**:

```php
// Access session variables
echo "Username: " . $_SESSION["username"];  // Outputs: JohnDoe
```

4. **Destroying a Session**:

```php
// Destroy session
session_destroy();
```

### Full Example

**Page 1 (set_session.php)**:

```php
<?php
// Start the session
session_start();

// Set session variables
$_SESSION["username"] = "JohnDoe";
$_SESSION["user_id"] = 123;

echo "Session variables are set.";
?>
```

**Page 2 (get_session.php)**:

```php
<?php
// Start the session
session_start();

// Access session variables
echo "Username: " . $_SESSION["username"];  // Outputs: JohnDoe
echo "User ID: " . $_SESSION["user_id"];    // Outputs: 123
?>
```

In this example, the session data persists across different pages until the session is destroyed. It allows you to store and retrieve user-specific information during a user's visit to the website.
