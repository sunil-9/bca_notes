# User Management

# Manage user account in windows

To manage user accounts in Windows, you can use the built-in tools provided by the operating system. Here's a guide on how to do it:

1. **Open User Accounts Settings:**

   - Press `Windows Key + R` to open the Run dialog.
   - Type `control userpasswords2` and press Enter.
   - This will open the User Accounts window.

2. **Add a New User Account:**

   - In the User Accounts window, click on "Add...".
   - Follow the prompts to create a new user account.
   - You can set the user's name, password, and account type (Standard or Administrator).

3. **Modify an Existing User Account:**

   - In the User Accounts window, select the user account you want to modify.
   - Click on "Properties".
   - Here you can change the user's name, password, and account type.

4. **Delete a User Account:**

   - In the User Accounts window, select the user account you want to delete.
   - Click on "Delete...".
   - Follow the prompts to confirm the deletion.

5. **Change an Account Type:**

   - In the User Accounts window, select the user account whose type you want to change.
   - Click on "Properties".
   - Under the "Group Membership" tab, you can change the account type between Standard and Administrator.

6. **Command Line Management:**

   - You can also manage user accounts via the command line using `net user` commands. For example:
     - `net user username password /add` to add a new user.
     - `net user username /delete` to delete a user.
     - `net localgroup Administrators username /add` to add a user to the Administrators group.

7. **Local Users and Groups (for Professional and Enterprise editions):**
   - For more advanced user management, you can use the Local Users and Groups tool.
   - Press `Windows Key + R` to open the Run dialog.
   - Type `lusrmgr.msc` and press Enter.
   - This will open the Local Users and Groups management console where you can manage users and groups more extensively.

# Manage user account in windows

Managing user accounts in Linux can be done through various command-line tools and configuration files. Here's a basic guide on how to manage user accounts in Linux:

1. **Add a New User:**

   - You can add a new user using the `adduser` or `useradd` command:
     ```
     sudo adduser username
     ```
     This command will prompt you to set a password and provide additional information about the user.

2. **Delete a User:**

   - To delete a user, you can use the `userdel` command:
     ```
     sudo userdel username
     ```
     You can also use the `deluser` command, which removes the user's home directory and mail spool:
     ```
     sudo deluser --remove-home username
     ```

3. **Modify User Properties:**

   - You can modify user properties using the `usermod` command. For example, to change a user's primary group:
     ```
     sudo usermod -g newgroup username
     ```
     To change the username itself, you would need to use the `usermod` command along with `usermod -l newusername oldusername`.

4. **Change User Password:**

   - You can change a user's password using the `passwd` command:
     ```
     sudo passwd username
     ```
     This command will prompt you to enter the new password for the specified user.

5. **View User Information:**

   - To view information about a specific user, you can use the `id` command:
     ```
     id username
     ```
     This command will display the user's UID (User ID), GID (Group ID), and supplementary groups.

6. **Grant Sudo Privileges:**
   - To grant sudo privileges to a user, you can add the user to the `sudo` or `wheel` group. This allows them to execute commands with superuser privileges.
     ```
     sudo usermod -aG sudo username
     ```
     or
     ```
     sudo usermod -aG wheel username
     ```
     After adding the user to the `sudo` or `wheel` group, they will need to log out and log back in for the changes to take effect.
