### Introduction to Android VM and Runtime

#### Dalvik

Dalvik is a process virtual machine (VM) utilized in Google's Android operating system to execute applications designed for Android. Here's an overview of Dalvik:

- **Functionality:** Integral part of the Android software stack used on mobile devices such as smartphones, tablets, smart TVs, and wearables.
- **Execution:** Executes applications written in Java, compiled to bytecode for the Java virtual machine, then translated to Dalvik bytecode stored in .dex and .odex files.
- **Architecture:** Uses a register-based architecture instead of stack machines, requiring fewer and more complex virtual machine instructions.
- **Optimizations:** Slimmed down to use less space, modified constant pool, and employs a 16-bit instruction set for local variables, improving interpreter speed.
- **JIT Compilation:** Android 2.2 introduced trace-based just-in-time (JIT) compilation, optimizing application execution by dynamically compiling frequently executed bytecode segments into native machine code.

#### ART (Android Runtime)

ART is an application runtime environment used in the Android operating system, replacing Dalvik. Here's an overview of ART:

- **Functionality:** Performs transformation of application bytecode into native instructions executed by the device's runtime environment.
- **Compatibility:** Compatible with apps developed for Dalvik, but some techniques may not work.
- **Compilation:** Introduces ahead-of-time (AOT) compilation, compiling entire applications into native machine code upon installation.
- **Benefits:** Improves overall execution efficiency, reduces power consumption, enhances memory allocation and garbage collection mechanisms, and provides better debugging and profiling features.
- **Architecture:** Uses the same input bytecode as Dalvik supplied through standard .dex files, replacing .odex files with ELF executables for improved performance.
- **Adoption:** Introduced as a technology preview in Android 4.4 "KitKat" and fully replaced Dalvik in Android 5.0 "Lollipop".
- **Major Features:** Ahead-of-time (AOT) compilation, improved garbage collection, development and debugging improvements.

![Architecture of Dalvik and ART](/img/android/dalvik-and-art.png)

|DALVIK VIRTUAL MACHINE                                                                   |ANDROID RUN TIME                                                                                                                          |
|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
|Faster Booting time                                                                      |Rebooting is significantly longer                                                                                                         |
|Cache builds up overtime                                                                 |The cache is built during the first boot                                                                                                  |
|Occupies less space due to JIT                                                           |Consumes a lot of storage space internally due to AOT                                                                                     |
|Works best for small storage devices                                                     |Works best for Large storage devices                                                                                                      |
|Longer app loading time                                                                  |Extremely Faster and smoother Faster and app loading time and lower processor usage                                                       |
|Uses JIT compiler(JIT: Just-In-Time) Thereby resulting in lower storage space consumption|Uses AOT compiler(Ahead-Of-Time) thereby compiling apps when installed                                                                    |
|Application lagging due to garbage collector pauses and JIT                              |Reduced application lagging and better user experience                                                                                    |
|App installation time is comparatively lower as the compilation is performed later       |App installation time is longer as compilation is done during installation                                                                |
|DVM converts bytecode every time you launch a specific app.                              |ART converts it just once at the time of app installation. That makes CPU execution easier. Improved battery life due to faster execution.|
|It is slower than ART.                                                                   |It is faster.                                                                                                                             |
|It does not provide optimized battery life as it consumes more power.                    |It provides optimized battery performance as it consumes less power.                                                                      |
|While considering Booting, then this device is fast.                                     |It lags in term of booting.                                                                                                               |

#### Comparison of JIT and AOT Compilation



| Aspect                 | Just-In-Time (JIT) Compilation                          | Ahead-Of-Time (AOT) Compilation                        |
|------------------------|----------------------------------------------------------|--------------------------------------------------------|
| Timing of Compilation | Compiled at runtime, just before execution               | Compiled before execution, typically during installation or build time |
| Execution Speed        | Initial execution might be slower due to compilation overhead, but optimized code can lead to faster execution over time | Faster startup times as code is already compiled, but may lack runtime optimizations |
| Memory Usage           | Typically lower memory footprint as only frequently executed code is compiled | Higher memory usage as entire codebase is compiled upfront |
| Portability            | Code can adapt to specific hardware and runtime environment, enhancing portability | Code is optimized for a specific platform during compilation, potentially reducing portability |
| Dynamic Optimization   | Enables dynamic optimization based on runtime data       | Optimizations are static and determined at compilation time |
| Platform Independence | Allows for platform-independent code execution            | May result in platform-specific binaries                    |


## ADB Command Line Interface

The `adb` (Android Debug Bridge) command-line tool provides various functionalities for interacting with Android devices and emulators. Here's a brief overview of some frequently used `adb` commands:

1. **`adb devices`**: Lists the installed devices and emulators.

2. **`adb pull <source> <destination>`**: Copies a file or directory from the emulator or device to your local machine.

3. **`adb install <path_to_APK>`**: Installs an APK file on the emulator or device.

4. **`adb install -r <path_to_APK>`**: Updates the already installed app with the specified APK file.

5. **`adb uninstall <package_name>`**: Uninstalls the app with the given package name from the emulator or device.

6. **`adb shell`**: Opens a shell on the device or emulator, allowing you to execute commands directly on the device.

7. **`ls`**: Lists files and directories on the device or emulator when used within the `adb shell`.

8. **`logcat`**: Displays the system's log buffers, which can be helpful for debugging purposes.

9. **`reboot`**: Reboots the device or emulator.

For example, to uninstall an Android application using `adb`, you would use the following command:

```bash
adb uninstall com.example.package_name
```

> <p color="red">Note: default adb location of android studio is `%LOCALAPPDATA%\Android\sdk\platform-tools`</p>


Replace `com.example.package_name` with the root package name of the app you want to uninstall.


