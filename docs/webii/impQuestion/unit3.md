## 1. what is java Servlet? Explain its lifecycle

### What is a Java Servlet?

A **Java Servlet** is a server-side Java program that handles HTTP requests and generates dynamic web content, such as HTML or JSON. It is part of Java EE (Enterprise Edition) and runs in a servlet container (like Apache Tomcat).

### Servlet Lifecycle

The lifecycle of a servlet is managed by the servlet container and consists of the following phases:

1. **Loading and Instantiation**:

   - The servlet container loads the servlet class and creates an instance of the servlet when a request is made for the first time (or when the container is restarted).

2. **Initialization (`init()` method)**:

   - The `init()` method is called once when the servlet is instantiated, and it is used to perform any initialization tasks (e.g., setting up resources like database connections).

   ```java
   public void init() {
       // Initialization code
   }
   ```

3. **Request Handling (`service()` method)**:

   - After initialization, the `service()` method is called for each client request. It processes the request and generates an appropriate response (usually by writing output to the response object).

   ```java
   public void service(HttpServletRequest request, HttpServletResponse response) {
       // Handle the request and response
   }
   ```

4. **Destruction (`destroy()` method)**:

   - The `destroy()` method is called before the servlet is unloaded from memory (e.g., when the server shuts down or the servlet is no longer needed). This is where resources should be released.

   ```java
   public void destroy() {
       // Cleanup code
   }
   ```

### Summary of the Servlet Lifecycle

1. **`init()`**: Initializes the servlet once when it's first loaded.
2. **`service()`**: Handles each client request.
3. **`destroy()`**: Cleans up when the servlet is destroyed.

The servlet lifecycle is managed by the servlet container, ensuring that servlets are created, serviced, and destroyed efficiently.

## 2. Explain servlet architecture and lifecycle with help of suitable diagram

### Servlet Architecture and Lifecycle

#### **Servlet Architecture**

Servlets run inside a servlet container (like Apache Tomcat). The architecture involves:

1. **Client (Web Browser)**: Sends HTTP requests to the server.
2. **Web Server/Servlet Container**: Receives the request and forwards it to the appropriate servlet. The servlet container manages the servlet lifecycle and handles multiple requests.
3. **Servlet**: The servlet processes the request, interacts with databases, performs business logic, and generates a response.
4. **Response**: The servlet sends the generated content (HTML, JSON, etc.) back to the client.

#### **Servlet Lifecycle**

The servlet lifecycle consists of four key steps:

1. **Loading and Instantiation**:

   - The servlet container loads the servlet class when a request is made or the server starts.

2. **Initialization (`init()` method)**:

   - Called once when the servlet is loaded. Initialization code (e.g., setting up resources) runs here.

3. **Request Handling (`service()` method)**:

   - For each client request, the servlet container calls the `service()` method. The servlet processes the request and generates a response.

4. **Destruction (`destroy()` method)**:
   - When the servlet is unloaded (server shutdown or servlet no longer needed), the `destroy()` method is called for cleanup (e.g., releasing resources).

### **Servlet Architecture Diagram**

```plaintext
  +--------------------+       +------------------------+       +-------------------+
  |   Client (Browser) | ----> |  Servlet Container      | ----> |  Servlet           |
  +--------------------+       +------------------------+       +-------------------+
                                      |        |
                                +-----+--------+-----+
                                |  HTTP Request      |
                                |  Dispatcher        |
                                +--------------------+
                                        |
                              +----------------------+
                              |   service() Method    |
                              +----------------------+
                                        |
                              +----------------------+
                              |  HTTP Response       |
                              +----------------------+
```

### **Servlet Lifecycle Diagram**

```plaintext
       +---------------------+
       |  1. Servlet Loaded   |        <---- Initial Load
       +---------------------+
                 |
                 v
       +---------------------+
       |  2. init() Method    |        <---- Initialization
       +---------------------+
                 |
                 v
       +---------------------+
       |  3. service() Method |        <---- Request Handling
       +---------------------+
                 |
                 v
       +---------------------+
       |  4. destroy() Method |        <---- Cleanup (Server Shutdown)
       +---------------------+
```

### Summary

- **Servlet Container**: Manages the servlet lifecycle and handles requests.
- **Lifecycle Phases**: Load (`init()`), Request Handling (`service()`), Cleanup (`destroy()`).
- **Architecture**: Request flows from the client to the server, processed by the servlet, and the response is sent back to the client.

## 4. Write a JSP code to make database connectivity, select all from a table and display them in HTML table format (make your assumptions for table and database)

### JSP Code for Database Connectivity and Displaying Data in HTML Table

Let's assume the following:

- **Database Name**: `company`
- **Table Name**: `employees`
- **Table Columns**: `id`, `name`, `position`, `salary`

### Steps

1. **Set up the database connection** using JDBC.
2. **Execute the SQL query** to fetch all records from the `employees` table.
3. **Display the data** in an HTML table.

### **JSP Code (database.jsp)**

```jsp
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*, java.util.*" %>

<html>
<head>
    <title>Employee List</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px;
            text-align: left;
        }
    </style>
</head>
<body>

<h2>Employee List</h2>

<%
    // Database connection details
    String dbURL = "jdbc:mysql://localhost:3306/company";
    String dbUser = "root";
    String dbPassword = "password"; // Replace with actual password

    Connection conn = null;
    Statement stmt = null;
    ResultSet rs = null;

    try {
        // Step 1: Load the MySQL JDBC driver (if needed for older versions)
        Class.forName("com.mysql.cj.jdbc.Driver");

        // Step 2: Establish a connection
        conn = DriverManager.getConnection(dbURL, dbUser, dbPassword);

        // Step 3: Create a statement object
        stmt = conn.createStatement();

        // Step 4: Execute a query to select all employees
        String sql = "SELECT id, name, position, salary FROM employees";
        rs = stmt.executeQuery(sql);

        // Step 5: Display the result in an HTML table
        out.println("<table>");
        out.println("<tr><th>ID</th><th>Name</th><th>Position</th><th>Salary</th></tr>");
        while (rs.next()) {
            out.println("<tr>");
            out.println("<td>" + rs.getInt("id") + "</td>");
            out.println("<td>" + rs.getString("name") + "</td>");
            out.println("<td>" + rs.getString("position") + "</td>");
            out.println("<td>" + rs.getDouble("salary") + "</td>");
            out.println("</tr>");
        }
        out.println("</table>");

    } catch (Exception e) {
        e.printStackTrace();
        out.println("<p>Error occurred while fetching data.</p>");
    } finally {
        // Close resources
        try {
            if (rs != null) rs.close();
            if (stmt != null) stmt.close();
            if (conn != null) conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
%>

</body>
</html>
```

### Explanation

1. **JDBC Setup**: The code sets up the connection to the MySQL database `company` with the provided username and password.
2. **SQL Query**: The SQL query `SELECT id, name, position, salary FROM employees` fetches all data from the `employees` table.
3. **Result Display**: The `ResultSet` is iterated to display the results in an HTML table.
4. **Exception Handling**: Basic exception handling is implemented to capture any errors during database operations.
5. **Resource Cleanup**: The `finally` block ensures that all database resources (connections, statements, result sets) are closed.

### Sample Output

```html
+----+------------+------------+--------+ | ID | Name | Position | Salary |
+----+------------+------------+--------+ | 1 | John Doe | Manager | 50000 | | 2
| Jane Smith | Developer | 45000 | | 3 | Emily Lee | Designer | 40000 |
+----+------------+------------+--------+
```

## 5. Explain any two Java frameworks in detail

### 1. **Spring Framework**

**Overview**:  
The Spring Framework is a comprehensive, modular framework for building enterprise-level applications in Java. It provides a wide range of features, such as dependency injection, aspect-oriented programming, transaction management, and support for web applications, among others.

**Key Features**:

- **Dependency Injection (DI)**: Allows objects to be injected into a class, promoting loose coupling and easier testing.
- **Aspect-Oriented Programming (AOP)**: Separates cross-cutting concerns (like logging or security) from business logic.
- **Spring MVC**: A powerful, flexible framework for building web applications using the Model-View-Controller (MVC) pattern.
- **Spring Boot**: A sub-project that simplifies the creation of stand-alone, production-grade Spring applications with minimal setup.

**Use Cases**:

- Enterprise applications, microservices, RESTful APIs, and web applications.

**Example**:

```java
@Component
public class MyService {
    public void printMessage() {
        System.out.println("Hello from Spring!");
    }
}

@Configuration
@ComponentScan(basePackages = "com.example")
public class AppConfig {
}

public class MainApp {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        MyService service = context.getBean(MyService.class);
        service.printMessage();
        context.close();
    }
}
```

---

### 2. **Hibernate Framework**

**Overview**:  
Hibernate is an Object-Relational Mapping (ORM) framework for Java. It simplifies database interactions by mapping Java objects to database tables, eliminating the need for complex JDBC code.

**Key Features**:

- **Object-Relational Mapping (ORM)**: Converts Java objects to database records and vice versa, using annotations or XML configuration.
- **HQL (Hibernate Query Language)**: A powerful, database-independent query language similar to SQL, but operating on objects.
- **Lazy Loading**: Loads data only when it's required, improving performance by fetching related data on-demand.
- **Automatic Table Generation**: Automatically generates database tables based on entity classes.

**Use Cases**:

- Applications that require data persistence with relational databases, such as e-commerce platforms and content management systems.

**Example**:

```java
@Entity
@Table(name = "Employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "salary")
    private double salary;

    // Getters and Setters
}

public class HibernateExample {
    public static void main(String[] args) {
        SessionFactory factory = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(Employee.class).buildSessionFactory();
        Session session = factory.getCurrentSession();

        try {
            Employee employee = new Employee("John", "Doe", 50000);
            session.beginTransaction();
            session.save(employee);
            session.getTransaction().commit();
        } finally {
            factory.close();
        }
    }
}
```

---

### Summary

- **Spring Framework**: A comprehensive framework for building various types of Java applications, promoting loose coupling and modularity through Dependency Injection and AOP.
- **Hibernate Framework**: An ORM framework for simplifying database interactions by mapping Java objects to database tables, using HQL and providing automatic table generation.

## 6. What are JSP implicit objects? Describe any four JSP implicit objects

### JSP Implicit Objects

JSP implicit objects are pre-defined objects that the JSP container automatically makes available to JSP pages. These objects provide a way to interact with the HTTP request, session, and other resources without needing to explicitly declare them in the JSP code.

### Four JSP Implicit Objects

1. **`request`**:

   - **Type**: `javax.servlet.http.HttpServletRequest`
   - **Description**: The `request` object represents the HTTP request sent by the client (browser) to the server. It contains details such as request parameters, headers, cookies, and more.
   - **Common Uses**:
     - Get request parameters: `request.getParameter("paramName")`
     - Get request attributes: `request.getAttribute("attributeName")`
   - **Example**:

     ```jsp
     <p>Welcome, <%= request.getParameter("username") %></p>
     ```

2. **`response`**:

   - **Type**: `javax.servlet.http.HttpServletResponse`
   - **Description**: The `response` object is used to send a response from the server back to the client. It contains methods for setting response headers, cookies, and sending output data (e.g., HTML, JSON).
   - **Common Uses**:
     - Set response headers: `response.setHeader("Content-Type", "text/html")`
     - Write output to the client: `response.getWriter().write("Hello World!");`
   - **Example**:

     ```jsp
     <%
         response.setContentType("text/html");
     %>
     <p>Response sent with content type: <%= response.getContentType() %></p>
     ```

3. **`session`**:

   - **Type**: `javax.servlet.http.HttpSession`
   - **Description**: The `session` object represents the HTTP session. It allows storing data (like user login status) that persists across multiple requests from the same client.
   - **Common Uses**:
     - Get session attributes: `session.getAttribute("username")`
     - Set session attributes: `session.setAttribute("username", "JohnDoe")`
   - **Example**:

     ```jsp
     <p>User: <%= session.getAttribute("username") %></p>
     ```

4. **`out`**:

   - **Type**: `javax.servlet.jsp.JspWriter`
   - **Description**: The `out` object is used to send output (e.g., HTML, text) to the client. It provides methods like `write()` and `println()` to write data to the response.
   - **Common Uses**:
     - Write output to the response: `out.println("Hello World");`
   - **Example**:

     ```jsp
     <%
         out.println("Hello from JSP!");
     %>
     ```

### Summary

- **`request`**: Used to get client request data.
- **`response`**: Used to send response data to the client.
- **`session`**: Used for storing session-related data.
- **`out`**: Used for outputting content to the client.

These implicit objects are available by default in every JSP page, making it easier to handle common tasks like retrieving client data, responding to requests, managing sessions, and outputting content.

## 7. Define JDBC. Write a JSP program using JDBC to display name, age, phone and address (in tabular fomat) of those customers who lives in "kshetrapur" and age is less than 30 years (make your own assumptions for table and database)

### **JDBC in JSP**

**JDBC (Java Database Connectivity)** is an API that allows Java applications to interact with relational databases. It provides methods for connecting to databases, executing SQL queries, and processing the results.

### Assumptions

- **Database Name**: `customerDB`
- **Table Name**: `customers`
- **Table Columns**: `id`, `name`, `age`, `phone`, `address`

### **JSP Program to Display Customers from "Kshetrapur" with Age Less than 30**

### **Steps**

1. **Set up the database connection** using JDBC.
2. **Write an SQL query** to select the customers who live in "Kshetrapur" and whose age is less than 30.
3. **Display the data** in a tabular format.

### **JSP Code (displayCustomers.jsp)**

```jsp
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*, java.util.*" %>

<html>
<head>
    <title>Customer List</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px;
            text-align: left;
        }
    </style>
</head>
<body>

<h2>Customers from Kshetrapur (Age < 30)</h2>

<%
    // Database connection details
    String dbURL = "jdbc:mysql://localhost:3306/customerDB";
    String dbUser = "root";
    String dbPassword = "password"; // Replace with actual password

    Connection conn = null;
    Statement stmt = null;
    ResultSet rs = null;

    try {
        // Step 1: Load MySQL JDBC driver
        Class.forName("com.mysql.cj.jdbc.Driver");

        // Step 2: Establish a connection to the database
        conn = DriverManager.getConnection(dbURL, dbUser, dbPassword);

        // Step 3: Create a statement object
        stmt = conn.createStatement();

        // Step 4: Execute an SQL query to fetch customers from Kshetrapur with age < 30
        String sql = "SELECT name, age, phone, address FROM customers WHERE address = 'Kshetrapur' AND age < 30";
        rs = stmt.executeQuery(sql);

        // Step 5: Display the result in a table
        out.println("<table>");
        out.println("<tr><th>Name</th><th>Age</th><th>Phone</th><th>Address</th></tr>");
        while (rs.next()) {
            out.println("<tr>");
            out.println("<td>" + rs.getString("name") + "</td>");
            out.println("<td>" + rs.getInt("age") + "</td>");
            out.println("<td>" + rs.getString("phone") + "</td>");
            out.println("<td>" + rs.getString("address") + "</td>");
            out.println("</tr>");
        }
        out.println("</table>");

    } catch (Exception e) {
        e.printStackTrace();
        out.println("<p>Error occurred while fetching data.</p>");
    } finally {
        // Step 6: Close resources
        try {
            if (rs != null) rs.close();
            if (stmt != null) stmt.close();
            if (conn != null) conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
%>

</body>
</html>
```

### **Explanation**

1. **Database Connection**: The code establishes a connection to the `customerDB` database using the `DriverManager` class.
2. **SQL Query**: The query retrieves customers from the `customers` table who:
   - Live in "Kshetrapur" (`WHERE address = 'Kshetrapur'`)
   - Have an age less than 30 (`AND age < 30`).
3. **Displaying Results**: The `ResultSet` is iterated over, and each customer's name, age, phone, and address are displayed in an HTML table.
4. **Error Handling**: Basic error handling is included for database connection and query execution.
5. **Resource Cleanup**: The `finally` block ensures that all resources (ResultSet, Statement, and Connection) are closed to avoid memory leaks.

### **Example Database Setup**

```sql
CREATE DATABASE customerDB;

USE customerDB;

CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    phone VARCHAR(15),
    address VARCHAR(255)
);

INSERT INTO customers (name, age, phone, address) VALUES
('John Doe', 25, '1234567890', 'Kshetrapur'),
('Jane Smith', 28, '9876543210', 'Kshetrapur'),
('Sam Brown', 32, '5555555555', 'Kshetrapur'),
('Emily White', 29, '6666666666', 'Kathmandu');
```

### **Sample Output**

```html
+----------------+-----+--------------+------------+ | Name | Age | Phone |
Address | +----------------+-----+--------------+------------+ | John Doe | 25 |
1234567890 | Kshetrapur | | Jane Smith | 28 | 9876543210 | Kshetrapur |
+----------------+-----+--------------+------------+
```

## 8. Explain Java database connectivity with suitable example

### **Java Database Connectivity (JDBC)**

**JDBC (Java Database Connectivity)** is an API that allows Java applications to interact with relational databases. It provides methods for connecting to databases, executing SQL queries, and processing the results. JDBC abstracts the database interaction, enabling Java applications to work with any database that supports JDBC.

### **JDBC Steps**

1. **Load the JDBC Driver**: The driver is responsible for establishing a connection between Java and the database.
2. **Establish a Connection**: Using `DriverManager` or `DataSource` to establish a connection to the database.
3. **Create a Statement**: A `Statement` object is used to execute SQL queries.
4. **Execute SQL Query**: Execute a query or update to interact with the database.
5. **Process the Result**: Handle the data returned by the query.
6. **Close Resources**: Close `Connection`, `Statement`, and `ResultSet` objects to avoid memory leaks.

### **Example: Connecting to MySQL Database using JDBC**

**Assumptions**:

- **Database**: `employeeDB`
- **Table**: `employees`
- **Table Columns**: `id`, `name`, `age`, `salary`

### **Steps**

1. **JDBC Driver Setup**: Ensure you have the MySQL JDBC driver (`mysql-connector-java`) in the classpath.

2. **JDBC Code**: Example of connecting to MySQL and fetching data from the `employees` table.

```java
import java.sql.*;

public class JdbcExample {
    public static void main(String[] args) {
        // Database connection details
        String url = "jdbc:mysql://localhost:3306/employeeDB";
        String user = "root";
        String password = "password"; // Replace with your actual password

        Connection connection = null;
        Statement statement = null;
        ResultSet resultSet = null;

        try {
            // Step 1: Load the JDBC driver (MySQL)
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Step 2: Establish the connection
            connection = DriverManager.getConnection(url, user, password);

            // Step 3: Create a statement object to execute SQL
            statement = connection.createStatement();

            // Step 4: Execute the SQL query
            String sql = "SELECT * FROM employees WHERE age < 30";
            resultSet = statement.executeQuery(sql);

            // Step 5: Process the result set
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                int age = resultSet.getInt("age");
                double salary = resultSet.getDouble("salary");

                // Display the data
                System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age + ", Salary: " + salary);
            }

        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            // Step 6: Close resources
            try {
                if (resultSet != null) resultSet.close();
                if (statement != null) statement.close();
                if (connection != null) connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### **Explanation**

1. **Loading the JDBC Driver**:

   ```java
   Class.forName("com.mysql.cj.jdbc.Driver");
   ```

   The `Class.forName` method loads the MySQL JDBC driver so that the Java application can interact with the MySQL database.

2. **Establishing the Connection**:

   ```java
   connection = DriverManager.getConnection(url, user, password);
   ```

   The `DriverManager.getConnection` method establishes a connection to the specified database using the provided URL, username, and password.

3. **Executing the SQL Query**:

   ```java
   resultSet = statement.executeQuery(sql);
   ```

   The SQL query is executed using `executeQuery()` (for SELECT statements). The result is returned as a `ResultSet` object.

4. **Processing the Result**:

   ```java
   while (resultSet.next()) {
       int id = resultSet.getInt("id");
       String name = resultSet.getString("name");
       int age = resultSet.getInt("age");
       double salary = resultSet.getDouble("salary");
       System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age + ", Salary: " + salary);
   }
   ```

   The `resultSet.next()` method moves to the next row of the result set, allowing you to retrieve column data using `getInt`, `getString`, etc.

5. **Closing Resources**:
   In the `finally` block, we close the `ResultSet`, `Statement`, and `Connection` to ensure proper resource management and prevent memory leaks.

### **Output**

```
ID: 1, Name: John Doe, Age: 28, Salary: 50000.0
ID: 2, Name: Jane Smith, Age: 25, Salary: 55000.0
```

## 9. Explain the JSP/servlet Directory Structure. Write down the steps to write JSP/servlet Program with example

### **JSP/Servlet Directory Structure**

In a typical **JSP/Servlet** web application, the directory structure is essential for organizing the components like HTML, Java classes, JSP files, and libraries. Here's a general structure:

```
project_name/
├── build/
├── lib/               # Contains external JAR files (e.g., JDBC driver, servlet API)
├── webapp/
│   ├── WEB-INF/
│   │   ├── classes/    # Contains compiled Java classes (servlets)
│   │   ├── lib/        # Contains project-specific JAR files
│   │   ├── web.xml     # Deployment descriptor for servlet configuration
│   ├── index.jsp       # Example JSP file (can be other JSP files)
│   ├── images/         # Images used by the web application
│   └── css/            # CSS files used by the web pages
└── src/                # Contains Java source code for servlets and other Java classes
```

### **Explanation of the Directory Structure**

1. **`webapp/`**: Contains all web application resources.

   - **`WEB-INF/`**: Contains configuration files and classes.
     - **`web.xml`**: Deployment descriptor that maps servlets to URLs.
     - **`classes/`**: Contains compiled Java classes (servlets, utility classes).
     - **`lib/`**: Contains JAR files (libraries needed for the project).
   - **`index.jsp`**: The main JSP file.
   - **`images/`, `css/`**: Static resources like images, stylesheets, and scripts.

2. **`lib/`**: External libraries (e.g., JDBC driver, servlet API).

3. **`src/`**: Contains Java source files for servlets and utility classes.

---

### **Steps to Write a JSP/Servlet Program**

#### **Step 1: Set Up the Environment**

- Install a Java Development Kit (JDK).
- Set up a web server like **Apache Tomcat**.
- Create a new project directory.

#### **Step 2: Write the Servlet Code**

**Example**: A servlet to display a simple "Hello, World!" message.

```java
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>Hello, World!</h1>");
        out.println("</body></html>");
    }
}
```

#### **Step 3: Write the JSP Code**

**Example**: A JSP page to display "Hello, World!" from the servlet.

```jsp
<%@ page contentType="text/html; charset=ISO-8859-1"%>
<html>
<head>
    <title>Hello JSP</title>
</head>
<body>
    <h1>Hello from JSP!</h1>
    <a href="HelloServlet">Go to Servlet</a>
</body>
</html>
```

#### **Step 4: Configure the `web.xml` (Deployment Descriptor)**

In **`WEB-INF/web.xml`**, define the servlet and URL mapping.

```xml
<web-app>
    <servlet>
        <servlet-name>HelloServlet</servlet-name>
        <servlet-class>HelloServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>HelloServlet</servlet-name>
        <url-pattern>/HelloServlet</url-pattern>
    </servlet-mapping>
</web-app>
```

#### **Step 5: Compile the Servlet**

- Compile the `HelloServlet.java` and place the `.class` file inside the `WEB-INF/classes/` directory.

```bash
javac HelloServlet.java
```

#### **Step 6: Deploy the Application**

- Copy all the source files, including `.jsp`, `.class`, and `web.xml`, to the appropriate directories.
- Deploy the project to the **webapps** directory of your **Tomcat** server.

#### **Step 7: Run the Application**

- Start your **Tomcat** server.
- Access the JSP page through a browser by visiting:

  ```
  http://localhost:8080/project_name/index.jsp
  ```

- To test the servlet, visit:

  ```
  http://localhost:8080/project_name/HelloServlet
  ```

---

### **Steps to Write a JSP/Servlet Program in Detail**

1. **Create the Servlet Class**:

   - Extend `HttpServlet` and override methods like `doGet()` or `doPost()` to handle client requests.

2. **Write the JSP Page**:

   - Create `.jsp` files to handle the presentation of dynamic content. JSP files can include Java code using `<% %>`, `<%= %>`, or JSP tags like `<jsp:include>`.

3. **Configure the Servlet in `web.xml`**:

   - Define the servlet and map it to a URL pattern in the `web.xml` configuration file under `WEB-INF`.

4. **Compile the Servlet**:

   - Use the Java compiler to compile the servlet and place the `.class` files in the `WEB-INF/classes/` folder.

5. **Deploy the Application**:

   - Copy the project files into the correct structure and deploy it to the Tomcat `webapps` folder.

6. **Test the Application**:
   - Access the servlet and JSP page via the browser to ensure everything is working.

## 10. What are cookies? How cookies differ from sessions? Write a code to implement session using servlet

### **What are Cookies?**

**Cookies** are small pieces of data stored by the web browser on the client's machine. They are used to store information such as user preferences, session data, and authentication details. Cookies are sent to the server with every request, allowing the server to remember the user across different sessions.

### **Cookies vs Sessions**

| Feature              | **Cookies**                                                   | **Sessions**                                                                   |
| -------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Storage Location** | Stored on the client-side (browser).                          | Stored on the server-side.                                                     |
| **Data Capacity**    | Limited (usually 4KB).                                        | Can store more data, depending on server configuration.                        |
| **Security**         | Less secure, as they are stored on the client-side.           | More secure, as data is stored on the server.                                  |
| **Expiry**           | Can be set to expire after a certain time.                    | Data expires when the session ends (typically when the browser is closed).     |
| **Use**              | Used for persisting user preferences or tracking information. | Used for maintaining user state and sensitive information (like login status). |

---

### **Session in Servlet**

A **session** is a way to store user-specific data on the server side. Each session is identified by a unique session ID, which is usually stored in a cookie on the client's side. Sessions are typically used for managing user login and other dynamic data during the user interaction.

### **Code to Implement Session in Servlet**

Here’s an example of how to use **sessions** in a Servlet to store and retrieve user-specific data.

#### **Step 1: Create the Servlet to Handle Session**

```java
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class SessionExampleServlet extends HttpServlet {

    // Handling GET request
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Create or retrieve the session object
        HttpSession session = request.getSession(true);

        // Set an attribute in the session
        String userName = request.getParameter("username");
        if (userName != null) {
            session.setAttribute("username", userName);  // Store the username in the session
        }

        // Send response to the client
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Retrieve the session data and display it
        String sessionUser = (String) session.getAttribute("username");

        out.println("<html><body>");
        if (sessionUser != null) {
            out.println("<h3>Welcome, " + sessionUser + "!</h3>");
        } else {
            out.println("<h3>No user logged in.</h3>");
        }
        out.println("</body></html>");
    }
}
```

#### **Step 2: Add to `web.xml` for Servlet Mapping**

In **`WEB-INF/web.xml`**, map the servlet to a URL.

```xml
<web-app>
    <servlet>
        <servlet-name>SessionExampleServlet</servlet-name>
        <servlet-class>SessionExampleServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>SessionExampleServlet</servlet-name>
        <url-pattern>/sessionExample</url-pattern>
    </servlet-mapping>
</web-app>
```

#### **Step 3: Use the Servlet**

- To access the servlet and use the session, enter the following URL in your browser:

  ```
  http://localhost:8080/your_project_name/sessionExample?username=JohnDoe
  ```

- The servlet will store the username in the session and display a welcome message with the stored value.

---

### **Explanation of Code:**

1. **Getting or Creating a Session**:

   ```java
   HttpSession session = request.getSession(true);
   ```

   - This line checks if there is an existing session for the client. If no session exists, it creates a new one.

2. **Setting Session Attributes**:

   ```java
   session.setAttribute("username", userName);
   ```

   - This stores the username in the session. It will be available for the user during the session duration.

3. **Getting Session Data**:

   ```java
   String sessionUser = (String) session.getAttribute("username");
   ```

   - This retrieves the username stored in the session and displays it.

4. **Sending Response**:
   - The servlet sends an HTML response back to the client, either displaying the stored username or a message if no user is logged in.

---

### **Session Expiry**

- Sessions typically expire when the browser is closed or after a specified timeout period (e.g., 30 minutes of inactivity). This can be controlled via the `setMaxInactiveInterval(int seconds)` method on the `HttpSession` object:

  ```java
  session.setMaxInactiveInterval(600); // 10 minutes
  ```
