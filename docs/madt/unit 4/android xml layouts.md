XML layouts in Android are used to define the structure and appearance of user interfaces in Android applications. They allow developers to create and organize UI elements such as views, widgets, and containers. Here's an overview of the commonly used XML layout files in Android, along with examples:

1. **Relative Layouts**:
   Relative layouts are used to position UI elements relative to each other or to the parent view.

   Example (`activity_main.xml`):

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <!-- UI elements go here -->

</RelativeLayout>
```

2. **Linear Layouts**:
   Linear layouts are used to organize UI elements in a single row or column. They are commonly used for creating forms and lists.

   Example (`fragment_profile.xml`):

   ```xml
   <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
       android:layout_width="match_parent"
       android:layout_height="match_parent"
       android:orientation="vertical">

       <!-- UI elements go here -->

   </LinearLayout>
   ```

**Layout Parameters:**
Layout parameters are used to define how a view should be positioned and sized within its parent view group or layout.

Example (`RelativeLayout` with layout parameters):

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <Button
        android:id="@+id/myButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Click Me"
        android:layout_alignParentTop="true"
        android:layout_centerHorizontal="true" />

</RelativeLayout>
```

3. **Constraint Layout:**
   Constraint Layout allows you to create complex and flexible UI designs by defining relationships (constraints) between views. It helps in building responsive and adaptive layouts.

   Example (`ConstraintLayout`):

   ```xml
   <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
       android:layout_width="match_parent"
       android:layout_height="match_parent">

       <Button
           android:id="@+id/button1"
           android:layout_width="wrap_content"
           android:layout_height="wrap_content"
           android:text="Button 1"
           app:layout_constraintTop_toTopOf="parent"
           app:layout_constraintStart_toStartOf="parent"
           app:layout_constraintEnd_toEndOf="parent" />

       <Button
           android:id="@+id/button2"
           android:layout_width="wrap_content"
           android:layout_height="wrap_content"
           android:text="Button 2"
           app:layout_constraintTop_toBottomOf="@id/button1"
           app:layout_constraintStart_toStartOf="parent"
           app:layout_constraintEnd_toEndOf="parent" />

   </androidx.constraintlayout.widget.ConstraintLayout>
   ```

4. **FrameLayout**:
   FrameLayout is a simple layout that allows views to be stacked on top of each other. It is commonly used when only one child view needs to be visible at a time.

   Example (`FrameLayout`):

   ```xml
   <FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
       android:layout_width="match_parent"
       android:layout_height="match_parent">

       <ImageView
           android:id="@+id/imageView"
           android:layout_width="match_parent"
           android:layout_height="match_parent"
           android:src="@drawable/image" />

       <ProgressBar
           android:id="@+id/progressBar"
           android:layout_width="wrap_content"
           android:layout_height="wrap_content"
           android:layout_gravity="center" />

   </FrameLayout>
   ```

5. **TableLayout**:
   TableLayout arranges its children in rows and columns, similar to an HTML table. It can be useful for creating grid-like structures.

   Example (`TableLayout`):

```xml
<TableLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TableRow>
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_margin="5dp"
            android:text="Name" />
        <EditText
            android:layout_width="match_parent"
            android:hint="Enter your name"
            android:layout_height="wrap_content" />
    </TableRow>

    <TableRow>
        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_margin="5dp"
            android:text="Email" />
        <EditText
            android:layout_width="match_parent"
            android:hint="Enter your email"
            android:layout_height="wrap_content" />
    </TableRow>
</TableLayout>
```
