# user interface classes

A user interface (UI) class represents the visual elements and layout of an app's user interface. It defines how different views and components are organized and interact with each other. The most commonly used UI class in Android is the `Activity` class, which represents a single screen with a user interface.

Example of a basic `Activity` class in Android:

## 1. Activity

_Mainactivity.java_

```java
import android.app.Activity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends Activity {
    private Button myButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Retrieve the reference to the button from the layout
        myButton = findViewById(R.id.my_button);

        // Set a click listener on the button
        myButton.setOnClickListener(view -> {
            // Perform an action when the button is clicked
            Toast.makeText(MainActivity.this, "Button Clicked", Toast.LENGTH_SHORT).show();
        });
    }
}
```

_activity_main.xml_

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <Button
        android:id="@+id/my_button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Click Me!"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

In this example, we have a `MainActivity` class that extends the `Activity` class. It represents the main screen of the app.

Inside the `onCreate` method, we perform the following tasks:

1. Call the superclass `onCreate` method using `super.onCreate(savedInstanceState)` to ensure the base class initialization is done.
2. Set the content view of the activity using `setContentView(R.layout.activity_main)`. This associates the layout file `activity_main.xml` with the `MainActivity` class.
3. Retrieve a reference to the button widget defined in the layout using `findViewById(R.id.my_button)`. The `R.id.my_button` is the unique identifier assigned to the button in the XML layout.
4. Set a click listener on the button using `myButton.setOnClickListener(...)`. Here, we use a lambda expression to define the behavior when the button is clicked.
5. Inside the click listener, we create a `Toast` message using `Toast.makeText(...)`. It displays a short-lived pop-up message saying "Button Clicked".
6. Finally, we call `show()` on the `Toast` object to display the message.

Remember to define the layout XML file (`activity_main.xml` in this example) to define the UI elements, such as buttons, text views, and layouts, and their properties.

This is just a basic example, and there are many other UI classes and concepts in Android development, such as fragments, custom views, and layouts. But the `Activity` class is a fundamental UI class that represents a screen in an Android app.

### 2. Fragment

Fragments represent reusable portions of a user interface within an `Activity`. They allow you to create flexible and modular UI components that can be combined and reused across different screens. Fragments have their lifecycle and can be added, removed, and replaced dynamically within an `Activity`.
for example:

_MyFragment.java_

```java
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.fragment.app.Fragment;

public class MyFragment extends Fragment {
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // Inflate the fragment layout
        View view = inflater.inflate(R.layout.fragment_layout, container, false);

        // Initialize and manipulate UI elements

        return view;
    }
}
```

\*fragment*layout.xml*

```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MyFragment">
    <TextView
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:text="@string/hello_blank_fragment" />

</FrameLayout>
```

### 3. DialogFragment

DialogFragments are specialized fragments that can be used to display dialog windows on top of an `Activity`. They provide a convenient way to present dialogs with custom layouts and behavior. for example:

```java
import android.app.Dialog;
import android.os.Bundle;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.fragment.app.DialogFragment;

public class MyDialogFragment extends DialogFragment {
    @NonNull
    @Override
    public Dialog onCreateDialog(Bundle savedInstanceState) {
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
        builder.setTitle("Dialog Title")
               .setMessage("Dialog Message")
               .setPositiveButton("OK", (dialog, which) -> {
                   // Perform action on OK button click
               })
               .setNegativeButton("Cancel", (dialog, which) -> {
                   // Perform action on Cancel button click
               });
        return builder.create();
    }
}
```

To use ths dialog fragment you can call it from an activity or another fragment like this:

```java
MyDialogFragment dialogFragment = new MyDialogFragment();
dialogFragment.show(getSupportFragmentManager(), "dialog");
```

### 4. View

- `Button`: Represents a clickable button.
- `TextView`: Displays text on the screen.
- `EditText`: Provides an interactive text input field.
- `ImageView`: Displays images on the screen.
- `CheckBox`: Represents a selectable option that can be checked or unchecked.
- `RadioButton`: Represents a selectable option within a group.
- `SeekBar`: Allows the user to select a value within a specified range.
- `ProgressBar`: Displays the progress of an ongoing operation.
- `Switch`: Represents a toggle switch that can be turned on or off.
- Many more specialized views for specific purposes.

Views are the basic building blocks of the UI, representing individual UI components such as buttons, text fields, or images. They are the visual elements that make up the user interface of an Android app.

### 5. ViewGroup

- `LinearLayout`: Arranges child views linearly either horizontally or vertically.
- `RelativeLayout`: Arranges child views relative to one another or to the parent.
- `FrameLayout`: Places child views on top of each other, with the last one added being the topmost.
- `ConstraintLayout`: Provides flexible positioning and sizing of views with constraints.
- `TableLayout`: Organizes child views in rows and columns.
- `GridLayout`: Places child views in a grid of specified rows and columns.
- `ScrollView`: Allows scrolling of child views when the content exceeds the available screen space.
- `CardView`: Provides a container for displaying content with a consistent appearance and elevation.
- Many more layout managers and containers for organizing and managing views.

ViewGroup classes can contain and manage multiple child views and determine their position, size, and interaction behavior within the layout.

### 6. Custom

You can create custom UI classes in Android by extending existing classes or implementing custom views. Example of creating a custom `Button` class:

```java
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.util.AttributeSet;
import androidx.appcompat.widget.AppCompatButton;

public class CustomButton extends AppCompatButton {
    private Paint paint;

    public CustomButton(Context context) {
        super(context);
        init();
    }

    public CustomButton(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    private void init() {
        paint = new Paint();
        paint.setColor(Color.RED);
        // Other customization options for the paint

        // Other initialization tasks
    }

    @Override
    protected void onDraw(Canvas canvas) {
        // Perform custom drawing operations here
        canvas.drawRect(0, 0, getWidth(), getHeight(), paint);

        // Let the superclass handle the default button drawing
        super.onDraw(canvas);
    }
}
```

If you want to add custom drawing like changing corner radius, background color, etc. to the button, you can create a custom button class by extending the `AppCompatButton` class and overriding the `onDraw` method.
for example to change corner radius of the button you can ulter the `onDraw` method like this:

```java
   @Override
    protected void onDraw(Canvas canvas) {
        // Create a rounded rectangle shape
        RectF rect = new RectF(0, 0, getWidth(), getHeight());
        canvas.drawRoundRect(rect, cornerRadius, cornerRadius, paint);

        // Let the superclass handle the default button drawing
        super.onDraw(canvas);
    }
```

In this example, we create a custom `Button` class called `CustomButton` by extending the `AppCompatButton` class. We override the `onDraw` method to perform custom drawing operations on the canvas.

Inside the `init` method, we initialize a `Paint` object and customize it as needed. In this example, we set the color to red.

In the `onDraw` method, we perform custom drawing operations using the `Canvas` object. Here, we draw a red rectangle that covers the entire button area using the `drawRect` method. After that, we call `super.onDraw(canvas)` to let the superclass handle the default button drawing, ensuring that the button text and other visual states are properly rendered.

Once you have created the custom `Button` class, you can use it in your layout XML files just like any other view:

```xml
<com.example.myapp.CustomButton
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Custom Button" />
```

By creating custom UI classes, you have full control over the appearance and behavior of the views, allowing you to create unique and personalized user interfaces for your Android app.
