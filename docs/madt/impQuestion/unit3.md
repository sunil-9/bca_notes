## 1. Explain android activity with example?

In Android, an activity is a core component of an application that represents a single screen with a user interface (UI). It serves as a container for UI elements such as buttons, text fields, and images, and handles user interactions and events. Activities are used to present different screens to the user, allowing them to navigate through different parts of the application.

Each activity in an Android application is implemented as a subclass of the Activity class. Activities have a lifecycle that defines their behavior and state as they are created, started, paused, resumed, stopped, and destroyed. The activity lifecycle is managed by the Android system, and developers can override specific methods to customize the behavior and respond to lifecycle events.

Activities have several important responsibilities:

1. **UI Presentation:** An activity is responsible for presenting the UI to the user. It defines the layout and arrangement of UI elements on the screen and handles user interactions such as button clicks or text input.

2. **Lifecycle Management:** Activities manage their own lifecycle, which includes methods for creation, starting, pausing, resuming, stopping, and destroying. Developers can override these methods to perform specific actions at each lifecycle stage, such as initializing resources, saving and restoring state, or releasing system resources.

3. **Inter-Activity Communication:** Activities can communicate with each other using intents. An intent is a message that allows activities to request actions from other activities or pass data between them. For example, one activity can start another activity to perform a specific task or provide data.

4. **Backstack Management:** The Android system maintains a backstack of activities that allows users to navigate backward through the screens they have visited. Activities can be added to the backstack, removed from it, or reordered to control the navigation flow.

5. **Result Handling:** Activities can start other activities for a result. For example, an activity can start a "pick contact" activity and receive the selected contact as a result. This mechanism allows activities to interact and exchange data with each other.

6. **Permissions:** Activities can require permissions to perform certain actions, such as accessing the internet or reading the user's contacts. Permissions are requested from the user at runtime and can be granted or denied by the user.

Here's an example of an activity with a layout file:

1. **activity_main.xml** (layout file):

```
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello, Android Activity!"
        android:textSize="24sp" />

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Click Me" />

</LinearLayout>
```

2. **MainActivity.java** (activity class):

```
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button button = findViewById(R.id.button);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MainActivity.this, "Button clicked", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
```

In this example, the `activity_main.xml` layout file defines a `LinearLayout` with a `TextView` and a `Button`. The `MainActivity` class extends `AppCompatActivity` and overrides the `onCreate()` method. In `onCreate()`, the layout is inflated using `setContentView(R.layout.activity_main)`. The `Button` is initialized using `findViewById(R.id.button)`, and an `OnClickListener` is set to display a toast message when the button is clicked.

This example demonstrates how an activity can use a layout file to define the UI elements and how the activity class can interact with those elements by referencing their IDs and setting event listeners.

## 2. Explain manifest file in android with example ?

The manifest file (AndroidManifest.xml) is an essential configuration file for an Android application.This file contains information of your package, including components of the application such as activities, services, broadcast receivers, content providers etc. It performs some other tasks also:

1. `<manifest>:` This is the root element of the manifest file. It contains attributes like package name and version code. 2.`<uses-permission>:` This tag is used to declare the permissions required by the application, such as accessing the internet, reading contacts, or using the camera.
2. `<application>:` This tag encapsulates the entire application and contains attributes and child elements related to the application.
3. `<activity>:` Represents an activity (screen) in your application. It defines the name of the activity, its launch mode, intent filters, and more.
4. ` <service>:` Declares a service component in your application, which runs in the background to perform tasks independently of any user interface.
5. `<receiver>:` Defines a broadcast receiver component in your application, which listens for system-wide or application-specific broadcast events.
6. `<provider>:` Declares a content provider component that allows your application to share data with other applications.
7. `<intent-filter>:` Specifies the type of intents that an activity, service, or receiver can respond to. It includes actions, categories, and data types.
8. `<meta-data>:` This tag allows you to attach metadata to various components in your application, providing additional information or configuration options.

an example of a simple Android manifest file:

```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.myapp">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:label="@string/app_name"
        android:icon="@drawable/app_icon">

        <activity
            android:name=".MainActivity"
            android:label="@string/main_activity_title">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

    </application>

</manifest>
```

In this example, the manifest file declares the package name, uses the INTERNET permission, and defines an application with an activity called MainActivity. The activity has an intent filter specifying that it should be launched when the application is started.

<!-- ## 4. What is the difference between Serializable and Parcelable ? Which is best approach in Android ?
**Serializable** is a standard Java interface. You simply mark a class Serializable by implementing the interface, and Java will automatically serialize it in certain situations. For example, if you try to serialize a Serializable object in a Bundle, it will be serialized automatically. The problem with Serializable is that reflection is used and it is a slow process. Also, it creates a lot of temporary objects and causes quite a bit of garbage collection. This is a slow process and should be avoided. -->

## 3. what do you mean by default and launcher activity? explain the primary forms of intent with an example

In Android development, the terms "default activity" and "launcher activity" refer to specific aspects of an Android app.

1. **Default Activity:** The default activity is the entry point or starting point of an Android app. When the app is launched, the default activity is the first screen that appears to the user. It is specified in the AndroidManifest.xml file using an intent filter with the "android.intent.action.MAIN" action and "android.intent.category.LAUNCHER" category. Only one activity can be designated as the default activity in an app.

2. **Launcher Activity:** The launcher activity is the activity that is displayed as an app icon on the user's device home screen or app drawer. It represents the main interface of the app and is typically the default activity. When the user taps on the app icon, the launcher activity is launched, and the app starts running. It provides the initial user interaction and navigation to other activities within the app.

Intents in Android are objects that facilitate communication between components of an app or between different apps. They are used to trigger specific actions or transfer data. Here are the primary forms of intents:

1. **Explicit Intents:** Explicit intents are used when you want to explicitly specify the target component (activity, service, broadcast receiver) to receive the intent. You provide the component's class name or package name and class name to create an explicit intent.
   For example:

```
Intent explicitIntent = new Intent(MainActivity.this, SecondActivity.class);
startActivity(explicitIntent);
```

In this example, an explicit intent is created to navigate from the MainActivity to the SecondActivity. 2. **Implicit Intents:** Implicit intents are used when you want to indicate a general action and allow the system to determine the appropriate component to handle the intent based on its intent filters. For example, if you want to share some text from your app, you can create an implicit intent with the action "ACTION_SEND" and let the user choose the desired app for sharing:

```
Intent implicitIntent = new Intent(Intent.ACTION_SEND);
implicitIntent.setType("text/plain");
implicitIntent.putExtra(Intent.EXTRA_TEXT, "Hello, this is some text to share.");
startActivity(Intent.createChooser(implicitIntent, "Share via"));
```

In this example, an implicit intent is created to share text, and the system will display a chooser dialog to let the user select an app to handle the sharing.

These are the primary forms of intents in Android, allowing you to perform a variety of actions and communication between components in your app or with external apps.

## 4. Expalin fragment and its lifecycle with diagram and example

A fragment is a modular section of an activity that represents a portion of the user interface and has its own lifecycle. Fragments allow you to build flexible and reusable UI components within an activity.

```
                    onAttach()
                        |
                        v
                    onCreate()
                        |
                        v
                  onCreateView()
                        |
                        v
                 onViewCreated()
                        |
                        v
                 onActivityCreated()
                        |
                        v
                   onStart()
                        |
                        v
                   onResume()
                        |
                        v
                    onPause()
                        |
                        v
                     onStop()
                        |
                        v
                  onDestroyView()
                        |
                        v
                   onDestroy()
                        |
                        v
                    onDetach()
```

The diagram above shows the lifecycle of a fragment. The following table describes the lifecycle methods of a fragment:

| Method              | Description                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| onAttach()          | Called when the fragment is associated with its host activity.                                                     |
| onCreate()          | Called to do initial creation of the fragment.                                                                     |
| onCreateView()      | Called to create the view hierarchy associated with the fragment.                                                  |
| onViewCreated()     | Called immediately after onCreateView() has returned, but before any saved state has been restored in to the view. |
| onActivityCreated() | Called when the activity's onCreate() method has returned.                                                         |
| onStart()           | Called when the fragment is visible to the user.                                                                   |
| onResume()          | Called when the fragment is visible to the user and actively running.                                              |
| onPause()           | Called when the fragment is no longer resumed.                                                                     |
| onStop()            | Called when the fragment is no longer visible to the user.                                                         |
| onDestroyView()     | Called when the view hierarchy associated with the fragment is being removed.                                      |
| onDestroy()         | Called when the fragment is no longer in use.                                                                      |
| onDetach()          | Called when the fragment is no longer attached to its activity.                                                    |

For Example:

***MyFragment.java***
```
public class MyFragment extends Fragment {

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_layout, container, false);

        // Initialize and modify UI components
        Button button = view.findViewById(R.id.button);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Perform some action when the button is clicked
                Toast.makeText(getActivity(), "Button clicked!", Toast.LENGTH_SHORT).show();
            }
        });

        return view;
    }

    // Other lifecycle methods can be overridden as per your requirements
    // For example: onCreate(), onViewCreated(), etc.
}
```
***fragment_layout.xml***
```
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello Fragment!"
        android:textSize="18sp"
        android:layout_gravity="center_horizontal"
        android:layout_marginTop="16dp"
        android:layout_marginBottom="16dp" />

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Click Me"
        android:layout_gravity="center_horizontal"
        android:layout_marginTop="16dp" />

</LinearLayout>
```

## 5. explain android project stucture.