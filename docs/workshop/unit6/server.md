# Server

A server is a computer program or device that provides functionality for other programs or devices, known as clients. Servers can serve data to clients, manage network resources, or perform other tasks. Here's a basic overview of how to install and configure a server:

1. **Choose a Server Software**: Decide on the type of server software you need based on your requirements. Common types include web servers (like Apache or Nginx), file servers (like Samba or FTP servers), and application servers (like Tomcat or JBoss).

2. **Select a Server Hardware**: Choose hardware that meets the requirements of your chosen server software. This includes CPU, RAM, storage, and network interfaces.

3. **Install the Server Operating System**: Install a server operating system on your hardware. Popular choices include Windows Server, Linux distributions like Ubuntu Server, CentOS, or Red Hat Enterprise Linux.

4. **Install the Server Software**: Follow the installation instructions for your chosen server software. This typically involves downloading the software package and running an installer.

5. **Configure the Server**: After installation, configure the server software to meet your specific requirements. This may include setting up security settings, configuring network settings, and defining user access permissions.

6. **Test the Server**: Before deploying the server into a production environment, it's important to test its functionality to ensure it meets your requirements.

7. **Deploy the Server**: Once the server is tested and configured, deploy it into your production environment. Monitor its performance and make any necessary adjustments.

8. **Maintain the Server**: Regularly update the server software and operating system to protect against security vulnerabilities. Monitor server performance and make adjustments as necessary to ensure optimal performance.

## Docker

Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. It was first released in 2013 and is developed by Docker, Inc.

### Install docker in windows

To install Docker on Windows, you can use Docker Desktop, which provides an easy way to set up Docker on Windows 10 and Windows 11. Here's how you can install Docker Desktop:

1. **Download Docker Desktop**: Go to the Docker Hub website at [hub.docker.com](https://hub.docker.com) and download the Docker Desktop installer for Windows.

2. **Install Docker Desktop**: Run the installer you downloaded. Follow the on-screen instructions to install Docker Desktop on your Windows machine.

3. **Enable WSL 2**: Docker Desktop requires Windows Subsystem for Linux 2 (WSL 2) to be enabled. You can enable WSL 2 by following the instructions provided by Microsoft: [WSL 2 Installation Guide for Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install)

4. **Configure Docker Desktop**: After installation, Docker Desktop may require some configuration. You can configure settings such as resource allocation (CPU, memory, etc.) through the Docker Desktop settings.

5. **Start Docker Desktop**: Once Docker Desktop is installed and configured, you can start it from the Start menu.

6. **Verify Installation**: Open a terminal (e.g., Command Prompt or PowerShell) and type `docker --version` to verify that Docker is installed correctly. You can also run `docker run hello-world` to verify that Docker can run containers.

## XAMPP

XAMPP is a free and open-source cross-platform web server solution stack package developed by Apache Friends, consisting mainly of the Apache HTTP Server, MariaDB database, and interpreters for scripts written in the PHP and Perl programming languages. It is designed to be easy to install and use, and it allows developers to quickly set up a local web server environment for testing and development purposes.

Here's how you can install XAMPP on Windows:

1. **Download XAMPP**: Go to the Apache Friends website at [https://www.apachefriends.org/index.html](https://www.apachefriends.org/index.html) and download the XAMPP installer for Windows.

2. **Run the Installer**: Double-click the downloaded installer file to run it. You may be prompted by Windows to confirm that you want to run the installer.

3. **Choose Components**: During the installation process, you will be asked to select which components of XAMPP you want to install. By default, Apache, MySQL, PHP, and phpMyAdmin are selected. You can choose to install additional components if needed.

4. **Select Installation Folder**: Choose the folder where you want to install XAMPP. The default location is usually `C:\xampp`.

5. **Complete the Installation**: Follow the on-screen instructions to complete the installation process. Once the installation is complete, you can launch the XAMPP Control Panel to start and manage the Apache and MySQL services.

6. **Start Apache and MySQL**: In the XAMPP Control Panel, click on the "Start" buttons next to Apache and MySQL to start the web server and database server, respectively.

7. **Access Localhost**: Open a web browser and navigate to `http://localhost` to access the XAMPP dashboard. From here, you can manage your web server, database, and other components.

## WHM and cPanel

WHM (Web Host Manager) and cPanel are software packages that provide a graphical interface and automation tools for managing web hosting servers and websites. WHM is used for server administration tasks, such as creating hosting accounts, managing server resources, and configuring security settings. cPanel, on the other hand, is used by website owners to manage their individual hosting accounts, including creating email accounts, managing files, and installing applications.

Here's a brief overview of each:

1. **WHM (Web Host Manager)**:

   - WHM is a web-based tool provided by hosting companies to manage the server.
   - It allows you to create and manage multiple cPanel accounts on the server.
   - You can configure server-wide settings, such as security policies, DNS settings, and software installations.
   - WHM provides tools for monitoring server performance and managing server backups.
   - WHM is typically used by hosting resellers, web developers, and system administrators.

2. **cPanel**:
   - cPanel is a web-based control panel used by website owners to manage their hosting accounts.
   - It provides an intuitive interface for tasks such as creating email accounts, managing domains, and uploading files.
   - cPanel includes tools for installing and managing web applications, such as content management systems (e.g., WordPress, Joomla) and e-commerce platforms (e.g., Magento, WooCommerce).
   - cPanel also offers features like website statistics, security settings, and backup management.
   - cPanel is designed to make it easy for non-technical users to manage their websites and hosting accounts.

To install WHM and cPanel, you typically need to purchase a license from cPanel, Inc. or a hosting provider that offers cPanel-based hosting. The installation process usually involves downloading an installation script and running it on your server. Detailed installation instructions can be found on the cPanel documentation website or provided by your hosting provider.

## How to create cpanel account in whm

To create a cPanel account in WHM (Web Host Manager), follow these steps:

1. **Login to WHM**: Access WHM by browsing to `https://your-server-ip:2087` (replace `your-server-ip` with your server's IP address) and log in with your WHM username and password.

2. **Navigate to Account Functions**: In WHM, search for "Account Functions" in the search bar or locate it under the "Account Functions" section on the left-hand side menu.

3. **Click on Create a New Account**: Under "Account Functions," click on "Create a New Account."

4. **Fill in Account Information**:

   - Domain Information: Enter the domain name for the new cPanel account (e.g., `example.com`).
   - Username: Enter a username for the cPanel account.
   - Password: Enter a secure password for the cPanel account or use the "Password Generator" for a strong password.
   - Email: Enter the email address associated with the cPanel account.
   - Package: Select a package for the cPanel account (optional, if you have predefined packages).

5. **Configure Settings**:

   - Choose the options for DNS settings, mail routing, and cPanel theme.
   - You can also select additional options such as enabling DKIM and SPF if needed.

6. **Set Resource Limits**:

   - Specify the resource limits for the cPanel account, such as disk space and bandwidth.
   - You can also set other limits like email accounts, databases, and FTP accounts.

7. **Click Create**: Once you have filled in all the required information, click on the "Create" button to create the cPanel account.

8. **Verify Account Creation**: After the account is created, you will see a confirmation message. You can then log in to the cPanel account using the username and password you specified.
