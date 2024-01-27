## 1. Describe processes, threads and broadcast Receiver class in android.

1. **Processes:**
In Android, a process is an isolated instance of an application running in the system. Each application typically runs in its own process to ensure security, stability, and resource management. A process has its own memory space and system resources, and it runs independently of other processes. By default, Android starts the main process for an application when it is launched. However, you can also configure additional processes for specific components or functionalities within the application.

Example:
```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.myapp">

    <application ...>

        <activity
            android:name=".MainActivity"
            android:process=":myprocess" >
            ...
        </activity>

    </application>

</manifest>
```

In this example, the MainActivity is configured to run in a separate process named "myprocess".

2. Threads:
A thread is a lightweight unit of execution within a process. In Android, multithreading is crucial to perform concurrent tasks without blocking the main UI thread, which would lead to unresponsive user interfaces. By creating and managing threads, you can execute time-consuming operations in the background, keeping the UI thread free to handle user interactions. Android provides several mechanisms for working with threads, including the Thread class, AsyncTask, and Handlers.
example 
```java
public class MyThread extends Thread {
    @Override
    public void run() {
        // Perform time-consuming operations here
        // This code will run on a separate thread
    }
}
// Creating and starting the thread
MyThread myThread = new MyThread();
myThread.start();
```
In this example, the `MyThread` class extends the `Thread` class and overrides the `run()` method. The time-consuming operations are performed in the `run()` method. Then, an instance of `MyThread` is created and started using the `start()` method.

3. BroadcastReceiver class:
The BroadcastReceiver class is a fundamental component in Android that allows the system or other applications to deliver events or messages to your application. It enables you to listen and respond to system-wide or application-specific broadcast intents. A broadcast intent is a message that can be sent by the system or other applications to signal specific events or actions, such as a low battery warning, device boot, network connectivity changes, or custom events defined by your application.
Example 
To use the BroadcastReceiver class, you typically create a subclass of BroadcastReceiver and override the `onReceive()` method. In this method, you define the logic to handle the received broadcast intent. 
```java
public class MyBroadcastReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        // Handle the received broadcast intent here
        // This code will be executed when the broadcast is received
    }
}
```

You can register your BroadcastReceiver dynamically at runtime or declare it in the AndroidManifest.xml file to automatically receive the specified broadcasts.
example of BroadcastReceiver dynamically at runtime
```java
MyBroadcastReceiver myReceiver = new MyBroadcastReceiver();
IntentFilter intentFilter = new IntentFilter();
intentFilter.addAction("com.example.myapp.MY_ACTION");
context.registerReceiver(myReceiver, intentFilter);
```
Example of declaring it in the AndroidManifest.xml file
```xml  
<receiver android:name=".MyBroadcastReceiver">
    <intent-filter>
        <action android:name="com.example.myapp.MY_ACTION" />
    </intent-filter>
</receiver>
```
It's important to note that starting from Android 10 (API level 29), there are limitations on receiving broadcasts in the background to improve privacy and security. Apps targeting Android 10 or higher have restrictions on receiving implicit broadcasts and need to use alternative approaches like foreground services or explicit broadcasts.



## 2. What is an alarm Manager? What are the types of alarms?

The AlarmManager is a system service that allows you to schedule and perform actions at specified times or intervals, even if your application is not currently running. It provides a way to schedule your application to execute code at a specific time or repeatedly after a certain interval.

The AlarmManager class provides several methods to set and manage alarms, including:

1. `set()` - Sets a one-time alarm that will trigger the specified PendingIntent at the specified time.
2. `setRepeating()` - Sets a repeating alarm that will trigger the specified PendingIntent at a specified interval, starting from the specified time.
3. `setExact()` - Sets a one-time alarm that will trigger the specified PendingIntent exactly at the specified time, without any inexactness.
4. `setExactAndAllowWhileIdle()` - Similar to `setExact()`, but allows the alarm to trigger even if the device is in low-power idle mode.
5. `setInexactRepeating()` - Sets a repeating alarm that will trigger the specified PendingIntent at a specified interval, but with inexact timing to optimize battery usage.

These are some of the commonly used methods of AlarmManager. Each method requires a PendingIntent, which encapsulates the action to be performed when the alarm triggers, such as starting a service, sending a broadcast, or launching an activity.

The AlarmManager supports different types of alarms, including:

1. RTC_WAKEUP - This alarm type uses the real-time clock (RTC) and wakes up the device to trigger the alarm. It ignores any sleep or low-power states of the device. Useful for time-sensitive alarms that need to wake up the device from sleep.

2. RTC - This alarm type uses the real-time clock (RTC) but does not wake up the device. The alarm will be delivered to the application when the device is next awake. Useful for alarms that don't require immediate execution.

3. ELAPSED_REALTIME_WAKEUP - This alarm type uses the elapsed real-time clock and wakes up the device to trigger the alarm. It does not use the wall clock time and ignores sleep or low-power states. Useful for time-sensitive alarms that need to wake up the device from sleep.

4. ELAPSED_REALTIME - This alarm type uses the elapsed real-time clock and does not wake up the device. The alarm will be delivered to the application when the device is next awake. Useful for alarms that don't require immediate execution.

When setting an alarm, you need to specify the alarm type and provide the time or interval at which the alarm should trigger. The AlarmManager takes care of managing the alarms even if the device is rebooted, ensuring that the scheduled actions are still triggered as intended.


## 3. example of alarm manager using java 


```java
// Create an explicit intent for the AlarmReceiver class
Intent intent = new Intent(context, AlarmReceiver.class);
intent.setAction("com.example.myapp.ALARM_ACTION");

// Create a PendingIntent with a unique request code
PendingIntent pendingIntent = PendingIntent.getBroadcast(context, 0, intent, 0);

// Get an instance of AlarmManager
AlarmManager alarmManager = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);

// Get the current time and add 10 seconds to it
Calendar calendar = Calendar.getInstance();
calendar.add(Calendar.SECOND, 10);
long alarmTime = calendar.getTimeInMillis();

// Set a one-time alarm that will trigger the specified PendingIntent at the specified time
alarmManager.set(AlarmManager.RTC_WAKEUP, alarmTime, pendingIntent);
```

In this example, we create an explicit intent for the `AlarmReceiver` class, which will be triggered when the alarm goes off. We specify the action for the intent to identify it uniquely.

Then, we create a PendingIntent using the `getBroadcast()` method, which allows the system to execute the intent as a broadcast when the alarm triggers.

Next, we obtain an instance of the AlarmManager using the `getSystemService()` method, passing `ALARM_SERVICE` as the argument.

We set the time for the alarm by getting the current time and adding 10 seconds to it. You can customize the time according to your requirements.

Finally, we use the `set()` method of the AlarmManager to schedule a one-time alarm. We pass the alarm type (`AlarmManager.RTC_WAKEUP`), the alarm time, and the PendingIntent to be triggered.

Make sure to declare the `AlarmReceiver` class in your AndroidManifest.xml file:

```xml
<receiver android:name=".AlarmReceiver">
    <intent-filter>
        <action android:name="com.example.myapp.ALARM_ACTION" />
    </intent-filter>
</receiver>
```

In the `AlarmReceiver` class, you can implement the logic to be executed when the alarm goes off. For example:

```java
public class AlarmReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        // Perform the desired action when the alarm triggers
        Toast.makeText(context, "Alarm triggered!", Toast.LENGTH_SHORT).show();
    }
}
```

In this example, the `onReceive()` method of `AlarmReceiver` displays a toast message when the alarm is triggered.

Remember to handle any necessary permissions, such as the `WAKE_LOCK` permission, if required, in your AndroidManifest.xml file.

This example demonstrates how to schedule a one-time alarm using the AlarmManager. You can modify the code to set repeating alarms, use different alarm types, or perform different actions when the alarm triggers based on your specific needs.
    


## 4. What is Broad Cast Receiver Class? How is it used explain program ?
A BroadcastReceiver class in Android is a component that allows your application to listen for and respond to system-wide or application-specific broadcast intents. It acts as a receiver for broadcast messages sent by the system or other applications, enabling your app to react and perform actions based on those messages.

To use a BroadcastReceiver, you need to create a subclass of the BroadcastReceiver class and override the `onReceive()` method. This method gets called when a broadcast intent matching the registered intent filter is received. Inside the `onReceive()` method, you define the logic to handle the received broadcast intent.

Here's an example that demonstrates the usage of a BroadcastReceiver class:

1. Create the BroadcastReceiver subclass:
```java
public class MyBroadcastReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        // Handle the received broadcast intent here
        // Perform desired actions based on the broadcast
        // For example, display a toast message
        Toast.makeText(context, "Broadcast received!", Toast.LENGTH_SHORT).show();
    }
}
```

In this example, we create a subclass of BroadcastReceiver named `MyBroadcastReceiver` and override the `onReceive()` method. Inside the `onReceive()` method, we handle the received broadcast intent by displaying a toast message.

2. Register the BroadcastReceiver dynamically:
```java
// Create an instance of the BroadcastReceiver
MyBroadcastReceiver myReceiver = new MyBroadcastReceiver();

// Create an IntentFilter and specify the desired broadcast action(s)
IntentFilter intentFilter = new IntentFilter();
intentFilter.addAction("com.example.myapp.MY_ACTION");

// Register the receiver with the intent filter
context.registerReceiver(myReceiver, intentFilter);
```

In this step, we create an instance of `MyBroadcastReceiver`. We also create an IntentFilter and add the desired broadcast action(s) using `addAction()`. This specifies the type of broadcast intents the receiver should listen to.

Finally, we register the receiver by calling `registerReceiver()` on the context, passing the receiver instance and the intent filter.

3. Unregister the BroadcastReceiver:
```java
context.unregisterReceiver(myReceiver);
```

To prevent memory leaks and unnecessary execution, it's important to unregister the BroadcastReceiver when it's no longer needed. This should be done, for example, in `onPause()` or `onDestroy()` of an activity, or when your application no longer requires the receiver.

That's it! With this example, you have created a BroadcastReceiver class, registered it dynamically with the desired intent filter, and implemented the logic to handle the received broadcast intent. Remember to declare the BroadcastReceiver class in your AndroidManifest.xml file as well.

This allows your application to receive and respond to broadcast intents, enabling communication and event-driven behavior between different components or even between different applications.

## 5. Write an application that demonstrates how to perform operations using Asyntask on a background thread.


1. Create a new Android project in Android Studio and add the following code to the MainActivity.java file:

**MainActivity.java**
```java
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private Button startButton;
    private ProgressBar progressBar;
    private TextView statusText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        startButton = findViewById(R.id.start_button);
        progressBar = findViewById(R.id.progress_bar);
        statusText = findViewById(R.id.status_text);

        startButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Start the AsyncTask when the button is clicked
                MyAsyncTask task = new MyAsyncTask();
                task.execute();
            }
        });
    }

    private class MyAsyncTask extends AsyncTask<Void, Integer, String> {

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
            // Perform initialization tasks before the background operation starts
            progressBar.setVisibility(View.VISIBLE);
            statusText.setText("Task started...");
        }

        @Override
        protected String doInBackground(Void... voids) {
            // Perform the background operation here
            for (int i = 0; i <= 10; i++) {
                // Simulate a time-consuming operation
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

                // Update the progress
                publishProgress(i);
            }
            return "Task completed!";
        }

        @Override
        protected void onProgressUpdate(Integer... values) {
            super.onProgressUpdate(values);
            // Update the UI with the current progress
            progressBar.setProgress(values[0]);
            statusText.setText("Progress: " + values[0] + "/10");
        }

        @Override
        protected void onPostExecute(String result) {
            super.onPostExecute(result);
            // Perform any final tasks after the background operation is completed
            progressBar.setVisibility(View.INVISIBLE);
            statusText.setText(result);
            Log.d("AsyncTask", result);
        }
    }
}
```

2. Open the activity_main.xml file and add the following code:

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="16dp"
    tools:context=".MainActivity">

    <Button
        android:id="@+id/start_button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Start Task"
        android:layout_centerInParent="true"/>

    <ProgressBar
        android:id="@+id/progress_bar"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@id/start_button"
        android:layout_marginTop="16dp"
        android:visibility="invisible"/>

    <TextView
        android:id="@+id/status_text"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@id/progress_bar"
        android:layout_marginTop="16dp"
        android:textAlignment="center"/>
</RelativeLayout>
```

In this example, we have a simple layout containing a Button, ProgressBar

, and TextView. When the button is clicked, the `MyAsyncTask` class is executed, which extends `AsyncTask` and performs a time-consuming operation in the background. The progress is updated, and the final result is displayed in the TextView.

The `onPreExecute()` method is called before the background operation starts, where you can perform initialization tasks. `doInBackground()` is responsible for the actual background operation. `onProgressUpdate()` is called to update the UI with the current progress. Finally, `onPostExecute()` is executed after the background operation completes, allowing you to perform any final tasks.

Make sure to add the necessary imports and declare the MainActivity in the AndroidManifest.xml file.

When you run the application, clicking the "Start Task" button will initiate the background operation, and the progress will be displayed in the ProgressBar. Once the task is completed, the final result will be shown in the TextView.

This demonstrates how to use `AsyncTask` to perform operations on a background thread while updating the UI based on the progress and result of the background task.

