## Animations in java

In Android, there are several types of animations that can be implemented to enhance the visual appeal and user experience of an application. The following are some of the commonly used types of animations in Android:

1. **Property Animations**: Property animations allow you to animate the properties of an object over a specified duration. You can animate various properties like translation, rotation, scaling, alpha, and more. Property animations provide flexibility and control over the animation process.

2. **View Animations**: View animations are a subset of property animations and are primarily used to animate the View objects in Android. They can animate properties like alpha (transparency), scale, rotation, and translation. View animations use the `Animation` class and XML files to define and control the animations.

3. **Drawable Animations**: Drawable animations involve animating the properties of a drawable resource, such as an image or a shape. Drawable animations are defined using XML files and can be applied to ImageViews or other drawable resources.

4. **Transition Animations**: Transition animations are used to animate the transition between two scenes or layouts. They are often used during activity transitions, fragment transitions, or shared element transitions. Transition animations allow you to animate changes in properties, such as visibility, position, size, and more.

5. **Frame-by-Frame Animations**: Frame-by-frame animations, also known as sprite animations, involve displaying a sequence of images in a rapid succession to create the illusion of motion. Each image is considered a frame, and these frames are displayed in a specified order to produce the animation effect.

6. **Animated Vector Drawables**: Animated Vector Drawables (AVDs) allow you to animate vector graphics in Android. AVDs are defined using XML files and can animate properties like path morphing, rotation, and alpha. They provide a scalable and resolution-independent way to create smooth and fluid animations.

7. **Physics-based Animations**: Android also provides support for physics-based animations through the Physics-based Animation API. These animations simulate real-world physics effects like gravity, friction, springs, and more. They can create natural and realistic animations based on physical principles.

The following sections will provide examples of some of these animations in Android.

1. **Property Animation - Alpha Animation**:
   This example demonstrates a fade-in animation by gradually increasing the alpha (transparency) of a view.

**i. Using ObjectAnimator**
You can animate properties like x, y, translationX, translationY, scaleX, scaleY, rotation, etc., using ObjectAnimator.

```java
ObjectAnimator animator = ObjectAnimator.ofFloat(view, "alpha", 0f, 1f);
animator.setDuration(1000);
animator.start();
```

**ii. Using ValueAnimator**
You can animate properties like x, y, translationX, translationY, scaleX, scaleY, rotation, etc., using ObjectAnimator.

```java
//fade in animation
ValueAnimator animator = ValueAnimator.ofFloat(0f, 1f);
animator.setDuration(1000);
animator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() {
    @Override
    public void onAnimationUpdate(ValueAnimator animation) {
        float alpha = (float) animation.getAnimatedValue();
        view.setAlpha(alpha);
    }
});
animator.start();

//change the height of a view
ValueAnimator animator = ValueAnimator.ofInt(view.getHeight(), 500);
animator.setDuration(300);
animator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() {
    @Override
    public void onAnimationUpdate(ValueAnimator animation) {
        int animatedValue = (int) animation.getAnimatedValue();
        view.getLayoutParams().height = animatedValue;
        view.requestLayout();
    }
});
animator.start();

```

2. **View Animation - Translate Animation**:
   This example moves a view horizontally across the screen.

```java
Animation animation = new TranslateAnimation(0, 500, 0, 0);
animation.setDuration(1000);
view.startAnimation(animation);
```

3. **Drawable Animation - Animation List**:
   This example shows how to create an animation list that cycles through a set of drawable resources.

Create an XML file named `animation_list.xml` in the `res/drawable` directory:

```xml
<animation-list xmlns:android="http://schemas.android.com/apk/res/android"
    android:oneshot="false">
    <item android:drawable="@drawable/animation_frame1" android:duration="100" />
    <item android:drawable="@drawable/animation_frame2" android:duration="100" />
    <item android:drawable="@drawable/animation_frame3" android:duration="100" />
    <!-- Add more frames as needed -->
</animation-list>
```

In your code, you can apply the animation list to an ImageView:

```java
ImageView imageView = findViewById(R.id.imageView);
AnimationDrawable animation = (AnimationDrawable) imageView.getDrawable();
animation.start();
```

4. **Transition Animation - Fade Transition**:
   This example demonstrates a fade transition between two views.

```java
Transition transition = new Fade();
transition.setDuration(1000);
TransitionManager.beginDelayedTransition(rootView, transition);

// Toggle visibility or replace views
view1.setVisibility(View.GONE);
view2.setVisibility(View.VISIBLE);
```

5. **Frame-by-Frame Animation**:
   This example shows how to play a frame-by-frame animation using a series of images.

Create an XML file named `animation_frame.xml` in the `res/drawable` directory:

```xml
<animation-list xmlns:android="http://schemas.android.com/apk/res/android"
    android:oneshot="false">
    <item android:drawable="@drawable/frame1" android:duration="100" />
    <item android:drawable="@drawable/frame2" android:duration="100" />
    <item android:drawable="@drawable/frame3" android:duration="100" />
    <!-- Add more frames as needed -->
</animation-list>
```

In your code, you can set the frame-by-frame animation to an ImageView:

```java
ImageView imageView = findViewById(R.id.imageView);
imageView.setBackgroundResource(R.drawable.animation_frame);
AnimationDrawable animation = (AnimationDrawable) imageView.getBackground();
//to start the animation use
animation.start();
//to stop the animation use
animation.stop();
```

These are just a few examples of animations in Android. There are many more types of animations and customization options available. You can explore the Android documentation and resources to learn more about animations and their implementation in Android applications.
