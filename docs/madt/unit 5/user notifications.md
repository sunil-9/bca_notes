To display a user notification in Android using Java, you can use the NotificationCompat.Builder class from the Android Support Library. Here's an example of how you can create and display a simple notification:

```java
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.os.Build;
import android.support.v4.app.NotificationCompat;

public class NotificationHelper {
    private static final String CHANNEL_ID = "my_channel_id";
    private static final String CHANNEL_NAME = "My Channel";
    private static final String CHANNEL_DESCRIPTION = "This is my notification channel";

    public static void showNotification(Context context, String title, String message) {
        // Create a notification manager
        NotificationManager notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);

        // Create a notification channel (required for Android Oreo and above)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(CHANNEL_ID, CHANNEL_NAME, NotificationManager.IMPORTANCE_DEFAULT);
            channel.setDescription(CHANNEL_DESCRIPTION);
            notificationManager.createNotificationChannel(channel);
        }

        // Build the notification
        NotificationCompat.Builder builder = new NotificationCompat.Builder(context, CHANNEL_ID)
                .setSmallIcon(R.drawable.notification_icon)
                .setContentTitle(title)
                .setContentText(message)
                .setPriority(NotificationCompat.PRIORITY_DEFAULT)
                .setAutoCancel(true);

        // Display the notification
        notificationManager.notify(0, builder.build());
    }
}
```

In your activity or service, you can call the `showNotification` method to display the notification:

```java
String title = "New Message";
String message = "You have a new message!";
NotificationHelper.showNotification(this, title, message);
```

Make sure to replace `R.drawable.notification_icon` with the appropriate icon resource for your notification.

Remember to also include the necessary permissions in your AndroidManifest.xml file:

```xml
<uses-permission android:name="android.permission.VIBRATE" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.WAKE_LOCK" />
```

Additionally, If you want to access permission for do not disturb mode, Yoy need to request notification policy access permission on Android 8.0 (API level 26) and above, you can use the `NotificationManagerCompat` class from the Android Support Library. Here's an example of how you can request the permission:

```java
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import androidx.core.app.NotificationManagerCompat;

public class NotificationPermissionHelper {
    public static void requestNotificationPolicyAccess(Context context) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            // Check if the app has notification policy access
            NotificationManager notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
            if (!notificationManager.isNotificationPolicyAccessGranted()) {
                // Open the system settings screen for notification policy access
                Intent intent = new Intent(Settings.ACTION_NOTIFICATION_POLICY_ACCESS_SETTINGS);
                context.startActivity(intent);
            }
        }
    }
}
```

You can call the `requestNotificationPolicyAccess` method from your activity or fragment to open the system settings screen where the user can grant the notification policy access permission:

```java
NotificationPermissionHelper.requestNotificationPolicyAccess(this);
```

When the `Settings.ACTION_NOTIFICATION_POLICY_ACCESS_SETTINGS` intent is started, it will open the settings screen where the user can enable the notification policy access for your app.

**PendingIntent**

A `PendingIntent` is a token that represents a future operation. It allows you to perform an action at a later time on behalf of your application, even if your application is not currently running. In the context of notifications, `PendingIntent` is commonly used to define an action to be triggered when the user interacts with a notification.

`PendingIntent` encapsulates an `Intent` along with information about the operation to be performed, such as the target component (activity, service, broadcast receiver) and optional flags. When the `PendingIntent` is invoked, the system carries out the operation specified by the encapsulated `Intent`.

Here's a breakdown of the important aspects of `PendingIntent`:

1. **Creation**: You create a `PendingIntent` by using one of the factory methods available in the `PendingIntent` class, such as `getActivity()`, `getService()`, or `getBroadcast()`, depending on the desired target component.

2. **Intent**: The `Intent` passed to the `PendingIntent` constructor defines the operation that will be performed when the `PendingIntent` is triggered. It includes information such as the target component, extras, action, and data.

3. **Flags**: `PendingIntent` supports different flags that modify its behavior, such as `FLAG_UPDATE_CURRENT`, `FLAG_CANCEL_CURRENT`, or `FLAG_ONE_SHOT`. These flags determine how the system handles subsequent invocations of the `PendingIntent`.

4. **Target Component**: The target component specifies the activity, service, or broadcast receiver that should handle the intent. It is defined by the `Intent` passed to the `PendingIntent` constructor.

5. **Execution**: The `PendingIntent` is typically set as an action for an event, such as a button click or a notification interaction. When the event occurs, the `PendingIntent` is invoked, and the system carries out the operation specified in the encapsulated `Intent`.

6. **Context**: The `Context` parameter passed to the `PendingIntent` factory method is used to create the `PendingIntent` and allows the system to associate it with your application.

In the context of notifications, when a user interacts with a notification, such as tapping on it, the `PendingIntent` associated with that action is triggered, and the specified operation is performed. For example, the `PendingIntent` can be used to launch an activity, start a service, or send a broadcast.

By using `PendingIntent`, you can defer and delegate actions to be performed later, even if your application is not running or the user is not actively using it. It provides a way to perform background tasks or handle user interactions with your application beyond the immediate context.

for Example:

```java
    Intent intent = new Intent(context, MainActivity.class);
    intent.putExtra("data", message);
    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK |
    Intent.FLAG_ACTIVITY_CLEAR_TASK);
    PendingIntent pendingIntent = PendingIntent.getActivity(context, 0, intent,
    PendingIntent.FLAG_UPDATE_CURRENT);
```

and to use this pending intent in notification:

```java
     NotificationCompat.Builder builder = new NotificationCompat.Builder(context, CHANNEL_ID)
                .setSmallIcon(R.drawable.ic_notification)
                .setContentTitle(title)
                .setContentText(message)
                .setPriority(NotificationCompat.PRIORITY_DEFAULT)
                // Set the intent that will fire when the user taps the notification
                .setContentIntent(pendingIntent)
                .setAutoCancel(true);
```

**Notification Actions**

A notification action is an action that can be triggered when the user interacts with a notification. It is typically displayed as a button on the notification. When the user taps on the button, the action is triggered, and the specified operation is performed.

Notification actions are defined using the `addAction()` method of the `NotificationCompat.Builder` class. The `addAction()` method takes three parameters:

1. **Icon**: The icon to be displayed for the action. It is typically displayed as a button on the notification.
2. **Title**: The title of the action. It is typically displayed as a button on the notification.
3. **PendingIntent**: The `PendingIntent` to be triggered when the user taps on the action. It defines the operation that will be performed when the action is triggered.

**(Optional)**

4. **Flags**: The flags that modify the behavior of the `PendingIntent`. It is optional and defaults to `FLAG_UPDATE_CURRENT`.
5. **Extras**: The extras to be included in the `PendingIntent`. It is optional and defaults to `null`.
6. **Remote Inputs**: The remote inputs to be included in the `PendingIntent`. It is optional and defaults to `null`.
7. **Allow Generated Replacements**: Whether to allow the system to generate a replacement `PendingIntent` if the original `PendingIntent` has been canceled. It is optional and defaults to `false`.
8. **Semantic Action**: The semantic action associated with the action. It is optional and defaults to `SEMANTIC_ACTION_NONE`.
9. **Contextual**: Whether the action is contextual. It is optional and defaults to `false`.
10. **Shows User Interface**: Whether the action shows a user interface. It is optional and defaults to `true`.
11. **Show On Keyguard**: Whether the action is shown on the keyguard. It is optional and defaults to `false`.
12. **Authentication Required**: Whether the action requires authentication. It is optional and defaults to `false`.
13. **Allow During Setup**: Whether the action is allowed during setup. It is optional and defaults to `false`.
14. **Allow Generated Contextual**: Whether the action is allowed to be generated as a contextual action. It is optional and defaults to `false`.

Here's an example of how you can define a notification action:

```java
NotificationCompat.Builder builder = new NotificationCompat.Builder(this, CHANNEL_ID)
        .setSmallIcon(R.drawable.ic_notification)
        .setContentTitle("Notification Title")
        .setContentText("Notification Text")
        .setPriority(NotificationCompat.PRIORITY_DEFAULT)
        // Set the intent that will fire when the user taps the Action button
        .addAction(R.drawable.ic_action, "Action", pendingIntent);
```

So, here is the complete code for creating a Notification helper with action:

```java
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Build;

import androidx.core.app.NotificationCompat;

import com.example.unit5.MainActivity;
import com.example.unit5.NotifyActivity;
import com.example.unit5.R;

public class NotificationHelper {
    private static final String CHANNEL_ID = "my_channel_id";
    private static final String CHANNEL_NAME = "My Channel";
    private static final String CHANNEL_DESCRIPTION = "This is my notification channel";
    private static final int ACTION_REQUEST_CODE = 1;
    public static void showNotification(Context context, String title, String message) {
        // Create a notification manager
        NotificationManager notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);

        // Create a notification channel (required for Android Oreo and above)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(CHANNEL_ID, CHANNEL_NAME, NotificationManager.IMPORTANCE_DEFAULT);
            channel.setDescription(CHANNEL_DESCRIPTION);
            notificationManager.createNotificationChannel(channel);
        }
        // Create an intent for the activity to open
        Intent intent = new Intent(context, MainActivity.class);
        intent.putExtra("data", message);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
        PendingIntent pendingIntent = PendingIntent.getActivity(context, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT);

        Intent customIntent = new Intent(context, NotifyActivity.class);
        customIntent.putExtra("action_data", "Custom Action Data"); // Pass any data required for the custom action
        PendingIntent customPendingIntent = PendingIntent.getActivity(context, ACTION_REQUEST_CODE, customIntent, PendingIntent.FLAG_UPDATE_CURRENT);

        // Build the notification
        NotificationCompat.Builder builder = new NotificationCompat.Builder(context, CHANNEL_ID)
                .setSmallIcon(R.drawable.ic_notification)
                .setContentTitle(title)
                .setContentText(message)
                .setPriority(NotificationCompat.PRIORITY_DEFAULT)
                .setContentIntent(pendingIntent)
                .addAction(R.drawable.ic_notifications_edit, "Notify Activity", customPendingIntent)
                .setAutoCancel(true);

        // Display the notification
        notificationManager.notify(0, builder.build());
    }
}
```
