# ADB (Android Debug Bridge)

ADB commands are incredibly useful for interacting with Android devices from a computer. These commands are powerful for debugging, testing, and managing Android devices efficiently from a command-line interface. Here are some common tasks you can perform using ADB commands:

To use ADB commands, you need to have the Android SDK installed on your computer. You can download it from the [Android Developer website](https://developer.android.com/studio).
You can also use the Android Studio IDE, which includes ADB as part of its installation. Then you need to select the device you want to target. If you have multiple devices connected, you need to specify which one you want to interact with.
You can do this by using the `-s` option followed by the device ID. The device ID is usually in the format of `emulator-5554` for emulators or a unique serial number for physical devices. use  `adb devices -l` command to get the list of connected devices with human-readable names.

---

### ✅ **Solution: Specify the device**

1. **Check connected devices:**

```bash
adb devices
```

You'll get something like:

```
List of devices attached
emulator-5554 device
R3CT70ABC123 device
```

2. **Target a specific device using `-s` flag:**

```bash
adb -s emulator-5554 install app/hello_world.apk
```

or

```bash
adb -s R3CT70ABC123 install app/hello_world.apk
```

1. **Install and uninstall apps**: `adb install path/to/app.apk` to install an APK, `adb uninstall package.name` to uninstall an app.

2. **Manage files**: `adb push` to copy files from your computer to the device, `adb pull` to copy files from the device to your computer.

3. **Access shell**: `adb shell` to open a remote shell on the device to execute commands directly.

4. **Capture screenshots**: `adb shell screencap` to capture a screenshot and save it to your computer.

5. **Record screen**: `adb shell screenrecord` to record the screen and save it as a video on your computer.

6. **Access logs**: `adb logcat` to view the device logs in real-time.

7. **Reboot**: `adb reboot` to reboot the device.

8. **Backup and restore**: `adb backup` and `adb restore` to backup and restore device data.

9. **Access system information**: `adb shell dumpsys` to retrieve detailed system information.

10. **Simulate input**: `adb shell input` to simulate various types of input events like taps and key presses.

lets explore some of the examples of ADB commands in detail:

````markdown
# ADB Command Examples

---

## ✅ Install and Uninstall Apps

**Install an APK:**

```bash
adb install C:/Users/sunil/Downloads/app.apk
```
````

**Uninstall an app:**

```bash
adb uninstall com.example.app
```

---

## ✅ Manage Files Between PC and Android

**Copy a file from PC to device:**

```bash
adb push C:/Users/sunil/Desktop/test.txt /sdcard/test.txt
```

**Copy a file from device to PC:**

```bash
adb pull /sdcard/test.txt C:/Users/sunil/Desktop/test.txt
```

---

## ✅ Access Device Shell

**Open a terminal shell on the Android device:**

```bash
adb shell
```

---

## ✅ Capture Screenshots

**Take a screenshot and save it on the device:**

```bash
adb shell screencap /sdcard/screen.png
```

**Then pull it to your computer:**

```bash
adb pull /sdcard/screen.png
```

---

## ✅ Record Screen

**Start screen recording (10 seconds example):**

```bash
adb shell screenrecord --time-limit 10 /sdcard/demo.mp4
```

**Pull the video to your PC:**

```bash
adb pull /sdcard/demo.mp4
```

---

## ✅ View Logs in Real-Time

```bash
adb logcat
```

**Filter by tag (e.g., for logs related to "ActivityManager"):**

```bash
adb logcat | grep ActivityManager
```

---

## ✅ Reboot Device

```bash
adb reboot
```

---

## ✅ Backup and Restore Data

**Create a full backup (apps + data):**

```bash
adb backup -apk -shared -all -f backup.ab
```

**Restore from backup:**

```bash
adb restore backup.ab
```

---

## ✅ Access System Info

**Get detailed info about device services:**

```bash
adb shell dumpsys
```

**Example: Battery status**

```bash
adb shell dumpsys battery
```

---

## ✅ Simulate User Input

**Tap on screen (x=100, y=200):**

```bash
adb shell input tap 100 200
```

**Swipe (from x=100,y=500 to x=300,y=500):**

```bash
adb shell input swipe 100 500 300 500
```

**Type text:**

```bash
adb shell input text "HelloWorld"
```

**Press hardware key (e.g., Home button):**

```bash
adb shell input keyevent 3  # KEYCODE_HOME
```

---

Lets explore some of the more advanced tasks you can perform using ADB commands:

---

### **1. Make a Call (Dialer opens, user must tap Call)**

```bash
adb shell am start -a android.intent.action.CALL -d tel:+1234567890
```

Or to open the dialer with the number filled in (but not auto-dial):

```bash
adb shell am start -a android.intent.action.DIAL -d tel:+1234567890
```

---

### **2. Send an SMS (opens messaging app)**

```bash
adb shell am start -a android.intent.action.SENDTO -d sms:+1234567890 --es sms_body "Hello!" --ez exit_on_sent true
```

You cannot directly send an SMS without user interaction unless the app is installed as a system app or the device is rooted.

---

### **3. Open Any Application**

Use the package name:

```bash
adb shell monkey -p com.package.name -c android.intent.category.LAUNCHER 1
```

---

### **4. See Call Logs**

Requires **root**. Example (requires `content` command):

```bash
adb shell content query --uri content://call_log/calls
```

---

### **5. See SMS**

Also requires **root** or the app to be a system app:

```bash
adb shell content query --uri content://sms
```

---

### **6. See Saved Wi-Fi Passwords**

Only possible with **root access**:

```bash
adb shell cat /data/misc/wifi/WifiConfigStore.xml
```

Or on newer Android:

```bash
adb shell cat /data/misc/apexdata/com.android.wifi/WifiConfigStore.xml
```
