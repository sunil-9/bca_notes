# OS installation

# BIOS setting, firmware types, BOOT configuration

Configuring the BIOS (Basic Input/Output System) settings and understanding firmware types are crucial aspects of managing a computer's hardware. Below are explanations of BIOS settings, firmware types, and BOOT configuration:

### BIOS Settings:

1. **Accessing the BIOS/UEFI:**
   - To access the BIOS or UEFI settings, restart your computer and press a specific key during the startup process. Common keys include Del, Esc, F2, F10, or F12. The exact key may vary depending on your computer's manufacturer.

2. **Firmware Types:**
   - **BIOS (Basic Input/Output System):**
     - Traditional firmware used in older systems.
     - Limited in terms of functionality and modern features.
   - **UEFI (Unified Extensible Firmware Interface):**
     - Modern replacement for BIOS.
     - Supports 64-bit architecture, secure boot, and provides a graphical interface.
     - Allows for faster boot times and improved hardware support.

3. **BOOT Configuration:**
   - **Boot Order:**
     - Specifies the sequence in which the computer checks different devices for the operating system.
     - Configure the boot order to prioritize the device from which you want to boot, such as the hard drive, SSD, DVD-ROM, or USB drive.

   - **Secure Boot:**
     - A UEFI feature that ensures the system boots with only trusted, signed operating system loaders and drivers.
     - Prevents the loading of unauthorized or malicious components during the boot process.

   - **Legacy/UEFI Mode:**
     - Choose between Legacy and UEFI boot modes.
     - UEFI mode is recommended for modern systems, as it supports newer features and technologies.

   - **Boot from Network:**
     - Enable or disable the ability to boot from a network, useful in enterprise environments.

   - **Fast Boot:**
     - Accelerates the boot process by skipping certain checks during startup.
     - May cause issues with accessing the BIOS/UEFI settings, so be cautious when using it.

   - **Boot Override:**
     - Temporarily overrides the boot order to allow booting from a different device without changing the default settings.

   - **Hard Drive Priorities:**
     - In some BIOS/UEFI interfaces, you can specify the priority of different hard drives if you have multiple storage devices.

### Precautions:

1. **Write Down Current Settings:**
   - Before making changes, document your current BIOS settings, or take pictures, so you can revert if needed.

2. **Read the Manual:**
   - Refer to your motherboard or system manual for specific instructions and details regarding BIOS/UEFI settings.

3. **Update BIOS/UEFI with Caution:**
   - BIOS updates can improve system stability and compatibility. However, updating carries some risk. Follow manufacturer instructions closely, and do not interrupt the process.

4. **Secure Boot Considerations:**
   - When installing or changing the operating system, ensure compatibility with Secure Boot. Some Linux distributions may require specific configurations.

5. **Password Protection:**
   - Consider setting a BIOS/UEFI password to prevent unauthorized access and changes to settings.

6. **Manufacturer Recommendations:**
   - Follow any specific recommendations or best practices provided by your computer or motherboard manufacturer.

# Hard disc partitioning

Partitioning a hard drive involves dividing it into multiple logical storage units. Each partition is treated as a separate drive by the operating system. Proper partitioning is essential for organizing data, installing operating systems, and managing storage effectively. Below are the general steps for hard disk partitioning:

### Using Windows Disk Management:

**1. Open Disk Management:**
   - Press `Win + X` and choose "Disk Management" from the menu.

**2. Locate the Disk:**
   - Find the disk you want to partition in the lower section of the Disk Management window.

**3. Shrink Existing Partition:**
   - To create a new partition, right-click on an existing partition, usually the C: drive, and choose "Shrink Volume."
   - Enter the amount of space to shrink, which will become unallocated space.

**4. Create New Partition:**
   - Right-click on the unallocated space and select "New Simple Volume."
   - Follow the wizard, specifying the size and assigning a drive letter or mount point.

**5. Format the Partition:**
   - After creating the partition, right-click on it and choose "Format" to make it usable. Choose the file system (usually NTFS) and allocation unit size.

**6. Assign a Drive Letter:**
   - Assign a drive letter to the new partition, making it accessible in File Explorer.

### Using Command Prompt (Diskpart):

**1. Open Command Prompt:**
   - Press `Win + X` and choose "Command Prompt (Admin)" or "PowerShell (Admin)."

**2. Launch Diskpart:**
   - Type `diskpart` and press Enter.

**3. List Disks:**
   - Type `list disk` to display a list of available disks.

**4. Select Disk:**
   - Type `select disk X` (replace X with the disk number you want to partition).

**5. Create Partition:**
   - Type `create partition primary size=XXXX` (replace XXXX with the size in megabytes).

**6. Format the Partition:**
   - Type `format fs=ntfs quick` to format the partition quickly with NTFS.

**7. Assign a Drive Letter:**
   - Type `assign letter=X` (replace X with the desired drive letter).

**8. Exit Diskpart:**
   - Type `exit` to leave the Diskpart utility.

### Using Third-Party Software:

Alternatively, you can use third-party partitioning tools like EaseUS Partition Master, MiniTool Partition Wizard, or GParted for more advanced partitioning tasks, such as resizing, merging, or converting partitions.

### Tips and Considerations:

- **Backup Data:**
  - Before making changes, especially if resizing or deleting partitions, back up important data to prevent data loss.

- **System Partition:**
  - Be cautious when modifying the system partition (usually C: drive). Resizing or deleting it may affect the operating system.

- **File System:**
  - NTFS is the most commonly used file system for Windows. Choose the appropriate file system based on your needs.

- **Primary and Logical Partitions:**
  - On an MBR disk, you can have up to four primary partitions or three primary partitions and one extended partition with multiple logical partitions inside.

- **UEFI/GPT:**
  - If your system uses UEFI, consider using the GPT partition style for better compatibility and support for larger disks.


# Creating bootable USB drive
Creating a bootable USB drive is a common and useful process, especially when installing or repairing an operating system. Here are the general steps to make a bootable USB drive:

## Requirements:

1. A USB flash drive with sufficient storage capacity (at least 8GB is recommended).
2. A computer with internet access.
3. An ISO file of the operating system you want to install or use.

## Steps to Create a Bootable USB Drive:

#### Using Windows:

**1. Download Rufus:**
   - Download and install Rufus, a free and open-source tool for creating bootable USB drives: [Rufus Official Website](https://rufus.ie/).

**2. Insert USB Drive:**
   - Insert your USB flash drive into a USB port on your computer.

**3. Open Rufus:**
   - Run Rufus. You might need administrator privileges.

**4. Configure Rufus:**
   - In Rufus, select your USB drive under "Device."
   - Under "Boot selection," click on "Select" and choose the ISO file of the operating system.

**5. Partition Scheme and File System:**
   - Choose the appropriate partition scheme (usually GPT for UEFI or MBR for BIOS) and file system (NTFS or FAT32).

**6. Start the Process:**
   - Click on "Start" to begin the process. Rufus will display a warning that all data on the USB drive will be destroyed. Ensure you've backed up any important data from the USB drive.

**7. Create Bootable USB:**
   - Rufus will format the USB drive and copy the contents of the ISO file, making it bootable. The process may take some time.

**8. Completion:**
   - Once Rufus indicates that the process is complete, you can close the program.

#### Using BalenaEtcher:

**1. Download BalenaEtcher:**
   - Download and install BalenaEtcher: [BalenaEtcher Official Website](https://www.balena.io/etcher/).

**2. Insert USB Drive:**
   - Insert your USB flash drive into a USB port on your computer.

**3. Open BalenaEtcher:**
   - Run BalenaEtcher.

**4. Select Image:**
   - Click on "Flash from file" and select the ISO file of the operating system.

**5. Select Target:**
   - Choose your USB drive under "Select target."

**6. Flash:**
   - Click on "Flash" to begin the process. BalenaEtcher will format the USB drive and write the contents of the ISO file.

**7. Completion:**
   - Once the process is complete, BalenaEtcher will display a success message.

### Notes:

- **Backup Data:**
  - Creating a bootable USB drive will erase all data on the USB drive. Ensure you've backed up any important files.

- **BIOS/UEFI:**
  - The partition scheme (GPT or MBR) and file system (NTFS or FAT32) depend on whether your system uses UEFI or BIOS. Check your system specifications or consult your motherboard manual.

- **Secure Boot:**
  - If installing Windows in UEFI mode, you may need to disable Secure Boot in the BIOS/UEFI settings.


# Laptop/Desktop OS Installation Windows

Installing the Windows operating system on a laptop or desktop involves several steps. Here are the general steps for installing Windows:

**Requirements:**
- A Windows installation USB/DVD.
- A valid Windows product key.
- Backup of important data (if needed).

**For both Desktop and Laptop:**

**1. Prepare Installation Media:**
   - Download the Windows ISO file from the official Microsoft website and create a bootable USB drive using a tool like Rufus or the Media Creation Tool.

**2. BIOS/UEFI Settings:**
   - Access the BIOS or UEFI settings on your computer by pressing a specific key during startup (common keys include F2, F10, or Del).
   - Set the boot priority to USB or DVD, depending on your installation media.

**3. Start the Installation:**
   - Insert the bootable USB/DVD into the appropriate port.
   - Restart the computer and boot from the installation media.

**4. Windows Setup:**
   - The Windows setup will begin. Choose your language, time format, and keyboard input.

**5. Install Now:**
   - Click "Install Now" to begin the installation process.

**6. Enter Product Key:**
   - Enter your valid Windows product key when prompted.

**7. License Terms:**
   - Read and accept the license terms.

**8. Choose Installation Type:**
   - Select the installation type:
      - **Upgrade:** If you're upgrading from an older version of Windows.
      - **Custom:** For a clean installation. Choose the drive where you want to install Windows.

**9. Partitioning:**
   - If doing a custom installation, create, delete, and format partitions as needed. Follow on-screen instructions.

**10. Installing Windows:**
    - The installation process will begin, and your computer will restart several times.

**11. Set Up:**
    - After installation, follow on-screen prompts to personalize your settings, create user accounts, and choose privacy options.

**12. Install Drivers:**
    - Install drivers for your hardware components, such as graphics, sound, and network drivers. Use the drivers provided by your computer or hardware manufacturer.

**13. Windows Updates:**
    - Check for and install Windows updates to ensure your system is up to date.

**14. Install Software:**
    - Install additional software and applications as needed.

**15. Activate Windows:**
    - Activate Windows online using your product key.

**16. Security Software:**
    - Install antivirus and other security software for protection.

**17. Restore Data:**
    - Restore your backed-up data if you made a backup earlier.

**18. Customize Settings:**
    - Customize additional settings according to your preferences.



# Laptop/Desktop OS Installation Linux

Installing Linux alongside an existing operating system (dual-booting) on a laptop or desktop involves a few steps. Here, I'll provide a general guide for installing Linux alongside Windows, assuming you already have Windows installed. The specific steps may vary depending on the Linux distribution you choose.

### Prerequisites:

1. **Backup Your Data:**
   - Before proceeding, back up important data to prevent any accidental data loss.

2. **Create a Linux Bootable USB:**
   - Download the ISO file of the Linux distribution you want to install (e.g., Ubuntu, Fedora).
   - Create a bootable USB drive using tools like Rufus, BalenaEtcher, or UNetbootin.

### Dual Boot Installation Steps:

#### 1. Boot from the Linux USB Drive:

   - Insert the bootable USB drive into a USB port.
   - Restart your computer and enter the BIOS/UEFI settings (usually by pressing a key like F2, Del, or Esc during startup).
   - Set the USB drive as the first boot device.
   - Save changes and exit to boot from the USB drive.

#### 2. Start the Linux Installation:

   - Once booted from the USB, you will see the Linux distribution's live environment.
   - Select the option to install Linux.

#### 3. Choose Installation Type:

   - During the installation process, you will be prompted to choose the installation type.
   - Select "Install alongside Windows" or a similar option.

#### 4. Allocate Disk Space:

   - Choose the amount of disk space you want to allocate to Linux. The installer will typically suggest a partition size, but you can adjust it according to your needs.

#### 5. Create Partitions:

   - The installer will create partitions for Linux. It often includes a root partition ("/") and, optionally, a swap partition.
   - Confirm the changes, and the installer will proceed with the installation.

#### 6. Select Location and Keyboard Layout:

   - Choose your timezone and keyboard layout.

#### 7. User Account Setup:

   - Create a user account and set a password.

#### 8. Grub Boot Loader:

   - The installer will install the Grub boot loader, which allows you to choose between Linux and Windows at startup.

#### 9. Complete Installation:

   - Allow the installation process to complete.
   - Once done, restart your computer, and you should see the Grub menu with options for both Linux and Windows.

### Notes and Tips:

- **Grub Boot Loader:**
  - Grub will allow you to choose the operating system at startup. If it doesn't appear, you may need to configure the boot order in the BIOS/UEFI settings.

- **Backup Important Data:**
  - Before partitioning, ensure you have a backup of important data.

- **Secure Boot:**
  - If you face boot issues, check your system's UEFI settings. Disabling Secure Boot may be necessary for some Linux distributions.

- **Linux Distribution Specifics:**
  - Some Linux distributions may have unique installation steps or tools. Refer to the documentation of the specific distribution you're installing.

