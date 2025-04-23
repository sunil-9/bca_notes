# ADB (Android Debug Bridge)

ADB commands are incredibly useful for interacting with Android devices from a computer. These commands are powerful for debugging, testing, and managing Android devices efficiently from a command-line interface. Here are some common tasks you can perform using ADB commands:

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
