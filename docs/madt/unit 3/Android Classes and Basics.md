# Android Classes and Basics

## Setting Up an Android Virtual Device (AVD)
- Open the AVD Manager dialog via Window → Android Virtual Device Manager and press the New button.
- Enter the values similar to the following screenshot.
- Afterwards press the OK button.

## Creating an Android App
- To create a new Android project select `File → New → Other → Android → Android Project` or `File → New → Android Application Project` from the menu.
- Fill up the data similar to below screen shot.
- Press the Next button and ensure that you have selected to create a launcher icon and an activity.
- On the wizard page for the launcher icon, create a nice looking icon.
- Press the Next button and select on the next page the Blank Activity template.
- Press the Next button.
- Start your Android application on the emulator. To build, install and run your application the Android Application, select your project, right click on it, and select `Run-As → Android Application`.
- This starts application on the AVD. The started application is a simple Hello, world application.

## Android Manifests File
- Every application must have an `AndroidManifest.xml` file.
- The manifest file presents essential information about your app to the Android system.

## The Activity Class
- An activity is a window that contains the user interface of the application.
- It is an application component that provides a screen with which users can interact in order to do something.
- Creating an activity:
  ```java
  package com.example.Activity101;
  import android.app.Activity;
  import android.os.Bundle;
  import com.example.Activity101.R;
  public class MainActivity extends Activity {
      @Override 
      public void onCreate(Bundle savedInstanceState) {
          super.onCreate(savedInstanceState);
          setContentView(R.layout.main);
      }
  }
  ```

## Activity Life Cycle
- Activities transition through states such as onCreate(), onStart(), onResume(), onPause(), onStop(), onRestart(), and onDestroy().

## Default and Launcher Activities
- The activity which is created by default while making our Android project is known as default activity.
- The activity via which we launch our application is known as launcher activity.

## Activity Stack (Task and Back Stack)
- An application usually contains multiple activities.
- Activities are managed in a stack (back stack).
- Activities transition between states based on user interactions and system events.

## Intents
- Intent is an abstract description of an operation to be performed.
- It can be used to launch activities, broadcast intents, and start services.

## Permissions
- Permissions restrict access to certain features or data on the device.
- Permissions are declared in the AndroidManifest.xml file.

### Examples of Permissions
- ACCOUNT_MANAGER
- BATTERY_STATS
- BLUETOOTH
- CAMERA
- CALL_PHONE
- DEVICE_POWER
- FLASHLIGHT
- INTERNET
- READ_CALENDAR
- READ_CONTACTS
- READ_SMS
- REBOOT
- RECEIVE_MMS
- RECEIVE_SMS
- RECORD_AUDIO
- SEND_SMS
- SET_ALARM
- SET_WALLPAPER
- VIBRATE
- WRITE_CALENDAR
- WRITE_CONTACTS
- WRITE_SMS etc.

