# Fragments

A fragment represents a behavior or a portion of user interface in an activity. Multiple fragments can be combined in a single activity to build a multi-pane UI and reuse a fragment in multiple activities. A fragment must always be embedded in an activity, and the fragment's lifecycle is directly affected by the host activity's lifecycle.

## Life Cycle of Fragment

To create a fragment, you must create a subclass of Fragment. The Fragment class has callback methods similar to an Activity, such as `onCreate()`, `onStart()`, `onPause()`, and `onStop()`.

Usually, you should implement at least the following lifecycle methods:

- `onCreate()`: Called when creating the fragment.
- `onCreateView()`: Called when it's time to draw the fragment's user interface.
- `onPause()`: Called when the user is leaving the fragment.

Additional callback methods to handle various stages of the fragment lifecycle include:

- `onAttach()`: Called when the fragment has been associated with the activity.
- `onActivityCreated()`: Called when the activity's `onCreate()` method has returned.
- `onDestroyView()`: Called when the view hierarchy associated with the fragment is being removed.
- `onDetach()`: Called when the fragment is being disassociated from the activity.

## Activity vs Fragment

| Activity         | Fragment                                              |
|------------------|-------------------------------------------------------|
| A window with which the user interacts with.                        | A part of an activity, which contributes its own UI to that Activity.                         |
| May contain zero or multiple number of fragments.         | Can be reused in multiple activities, acting like a reusable component in activities.        |
| Can exist without any fragment in it.                                    | Must live inside the activity and be a part of it.                          |
| Needs to be declared in "AndroidManifest.xml".               | Not needed to be declared in "AndroidManifest.xml".                |
| Cannot have nested activities.                                               | Can have nested fragments.                                                         |

## Multiple Screen Sizes and Orientation Interfaces

For supporting multiple screen sizes and orientation, the following terms must be considered:

### Screen size

Actual physical size, measured as the screen's diagonal. Android groups all actual screen sizes into four generalized sizes: small, normal, large, and extra-large.

### Screen density

The quantity of pixels within a physical area of the screen, usually referred to as dpi (dots per inch). Android groups all actual screen densities into six generalized densities: low, medium, high, extra-high, extra-extra-high, and extra-extra-extra-high.

### Orientation

The orientation of the screen from the user's point of view, either landscape or portrait.

### Resolution

The total number of physical pixels on a screen. Applications should be concerned only with screen size and density, as specified by the generalized size and density groups.

### Density-independent pixel (dp)

A virtual pixel unit used when defining UI layout, to express layout dimensions or position in a density-independent way. The conversion of dp units to screen pixels is based on the actual density of the screen in use.




In Android development using Java, fragments are a fundamental component of the user interface. Fragments have their own lifecycle, which consists of a series of callback methods that are invoked by the Android system at different stages of the fragment's existence. Here's an overview of the basic fragment lifecycle in Android:

### onAttach():
This method is called when the fragment is associated with its parent activity. It is typically used to initialize the fragment and obtain references to the activity.

### onCreate(): 
In this method, the fragment is initialized. You can perform any necessary setup tasks, such as initializing variables or loading data.

### onCreateView(): 
Here, you inflate the fragment's layout and return the root view. This method is where you set up the user interface of the fragment.

### onActivityCreated():
This callback indicates that the parent activity's onCreate() method has completed. You can use this method to interact with the activity and its views.

### onStart():
The fragment becomes visible to the user. You can start animations or perform other visual adjustments in this method.

### onResume():
The fragment is now actively interacting with the user. It is in the foreground and receives user input. This is where you should initialize components that need to actively update or listen for user interactions.

### onPause():
The fragment is no longer in the foreground, and another fragment or activity is taking focus. You should pause ongoing tasks, such as animations or background computations.

### onStop():
The fragment is no longer visible to the user. This is a good place to clean up resources or stop background tasks.

### onDestroyView():
The view hierarchy associated with the fragment is being removed. This is the appropriate place to clean up any references to views or resources.

### onDestroy():
The fragment is being destroyed. Perform any final cleanup here.

### onDetach():
The fragment is no longer associated with its parent activity. Clean up any references to the activity or other fragments in this method.

Here's an example that demonstrates the basic usage of fragment lifecycle methods in Android:

```Java title="fragment.java"

public class MyFragment extends Fragment {
  
    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
        // Perform initialization tasks when fragment is attached to activity
    }
  
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Initialize fragment, set up variables, or load data
    }
  
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_layout, container, false);
        // Inflate the fragment's layout and initialize UI components
        return rootView;
    }
  
    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        // Access the parent activity and its views, perform interaction tasks
    }
  
    @Override
    public void onStart() {
        super.onStart();
        // Fragment becomes visible, start animations or visual adjustments
    }
  
    @Override
    public void onResume() {
        super.onResume();
        // Fragment is in the foreground, initialize components that need updates or user interactions
    }
  
    @Override
    public void onPause() {
        super.onPause();
        // Pause ongoing tasks, such as animations or background computations
    }
  
    @Override
    public void onStop() {
        super.onStop();
        // Fragment is no longer visible, clean up resources or stop background tasks
    }
  
    @Override
    public void onDestroyView() {
        super.onDestroyView();
        // Clean up references to views or resources
    }
}

```

### Fragments vs Activity
Activities and fragments are both components used in Android development to build user interfaces, but they serve different purposes and have distinct characteristics. Here's a comparison between activities and fragments:

### Functionality: 
An activity represents a single screen with a user interface. It manages the lifecycle of the screen and handles user interactions. Activities can contain multiple fragments, allowing for a more modular and flexible UI design. Fragments, on the other hand, are reusable UI components within an activity. They have their own lifecycle and can be added, removed, or replaced dynamically within an activity.

### UI Hierarchy: 
An activity has its own layout hierarchy defined in an XML file, which represents the entire screen content. In contrast, a fragment also has its own layout hierarchy, but it represents a portion of the screen content and can be combined with other fragments to form a complete UI. Fragments allow for more modular UI design and better support for different screen sizes and orientations.

### Lifecycle:
Both activities and fragments have their own lifecycle methods. However, activities have a broader lifecycle, including methods like onCreate(), onStart(), onResume(), onPause(), onStop(), and onDestroy(). Fragments have a similar set of lifecycle methods, but they also have additional methods such as onAttach(), onCreateView(), onActivityCreated(), onDestroyView(), and onDetach(). Fragments are closely tied to their parent activity's lifecycle and can respond to changes in the activity's lifecycle.

### Communication: 
Activities can communicate with each other through explicit intents, passing data between them. Fragments, on the other hand, are typically used within an activity and can communicate with their parent activity through interfaces or shared view models. Fragments can also communicate with each other directly if they are hosted by the same activity.

### Reusability: 
Fragments promote reusability since they can be added to multiple activities or reused within the same activity. This allows for modular design and reduces code duplication. Activities are generally less reusable and represent distinct screens or application flows.

### Backstack: 
Activities have a back stack managed by the system, which allows users to navigate back through previously opened activities. Fragments can also have their own back stack managed within an activity, allowing for navigation between different fragments within the same activity.

In summary, activities represent screens and manage the overall application flow, while fragments are reusable UI components that can be combined to create dynamic and flexible interfaces within activities. Fragments provide a modular approach to UI design and better support for different screen sizes and orientations.
