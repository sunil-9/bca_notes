In Android Development, the BroadcastReceiver class is a fundamental component that enables communication between different parts of an application or between different applications on an Android device. It allows the application to listen for and respond to broadcast messages sent by the system or other applications. This class is primarily used to handle events or notifications in an asynchronous manner.

Use Case:
The BroadcastReceiver class is commonly used in scenarios where an application needs to respond to system events, such as when the device boots up, the network connectivity changes, the battery level changes, an SMS message is received, or a notification is posted. By registering a BroadcastReceiver, the application can be notified of these events and perform specific actions in response.

Example:
Let's consider an example where you want to build an application that responds to incoming SMS messages. 
***step1:*** create a class that extends the BroadcastReceiver class and override its `onReceive()` method. This method will be called whenever an SMS message is received by the device.
**SMSReceiver.java**
```java
public class SMSReceiver extends BroadcastReceiver {
    private static final String TAG = "SMSReceiver";
    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent.getAction().equals(Telephony.Sms.Intents.SMS_RECEIVED_ACTION)) {
            // Retrieve the SMS message from the intent
            Bundle bundle = intent.getExtras();
            if (bundle != null) {
                Object[] pdus = (Object[]) bundle.get("pdus");
                if (pdus != null) {
                    // Process each SMS message
                    for (Object pdu : pdus) {
                        SmsMessage sms = SmsMessage.createFromPdu((byte[]) pdu);
                        String message = sms.getMessageBody();
                        String sender = sms.getOriginatingAddress();

                        // Perform your desired actions with the received SMS
                        // For example, you can display a notification or save the message to a database
                        displayNotification(context, sender, message);
                    }
                }
            }
        }
    }

    private void displayNotification(Context context, String sender, String message) {
        // Code to display a notification to the user
        // You can use the NotificationCompat.Builder class to build and show a notification
        Log.d(TAG, "displayNotification: "+sender+" "+message);
        Toast.makeText(context, ""+message, Toast.LENGTH_SHORT).show();
    }
}
```
**step2:**
To use the `SMSReceiver` class, you need to register it either dynamically or statically in your AndroidManifest.xml file. Here's an example of registering the receiver dynamically:

```java
// Inside your activity or service
SMSReceiver smsReceiver = new SMSReceiver();
IntentFilter intentFilter = new IntentFilter(Telephony.Sms.Intents.SMS_RECEIVED_ACTION);
registerReceiver(smsReceiver, intentFilter);
```

Once the receiver is registered, whenever an SMS message is received by the device, the `onReceive()` method of `SMSReceiver` will be invoked. You can then perform your desired actions, such as displaying a notification, processing the message, or updating the UI.

**step3:**
You also need the permission to read user incomming sms messages. To request permissions at runtime in an Android application, you need to follow these steps:

A. Declare the permissions in the AndroidManifest.xml file, as mentioned in the previous response.

```xml
<uses-permission android:name="android.permission.RECEIVE_SMS" />
```

B. Check if the required permissions are granted or not before performing any actions that require those permissions. You can use the `checkSelfPermission()` method to check the status of a permission. For example:

   ```java
   if (ContextCompat.checkSelfPermission(this, Manifest.permission.RECEIVE_SMS)
           != PackageManager.PERMISSION_GRANTED) {
       // Permission is not granted, request it
       ActivityCompat.requestPermissions(this,
               new String[]{Manifest.permission.RECEIVE_SMS},
               MY_PERMISSIONS_REQUEST_RECEIVE_SMS);
   } else {
       // Permission is already granted, proceed with your code
       // ...
   }
   ```

C. Implement the `onRequestPermissionsResult()` method in your activity to handle the permission request result:

```java
   @Override
   public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
       if (requestCode == MY_PERMISSIONS_REQUEST_RECEIVE_SMS) {
           if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
               // Permission granted, proceed with your code
               // ...
           } else {
               // Permission denied, handle accordingly (e.g., show an explanation or disable functionality)
               // ...
           }
       }
   }
```

 When you call `requestPermissions()`, the system will display a dialog to the user asking for permission. The user can choose to grant or deny the permission. Once the user responds to the permission request, the `onRequestPermissionsResult()` method will be called with the result. You can handle the result based on whether the permission was granted or denied.

Remember to replace `MY_PERMISSIONS_REQUEST_RECEIVE_SMS` with your desired request code. This code is used to identify the specific permission request in the `onRequestPermissionsResult()` method.

**step4:**
Remember to unregister the receiver when you no longer need to listen for SMS messages:

```java
// Inside your activity or service
unregisterReceiver(smsReceiver);
```

This is just one example of how the BroadcastReceiver class can be used in Android Java. It allows you to listen for a wide range of system or application events and respond to them accordingly.