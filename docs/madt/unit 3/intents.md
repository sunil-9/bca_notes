# Intents

In Android, an Intent is a messaging object used to request an action from another app component. Intents facilitate communication between different components, such as activities, services, and broadcast receivers. They can be used for launching activities, starting services, and delivering broadcasts.

Intents can be classified into two types: **Explicit Intents** and **Implicit Intents**.

## Explicit Intents

Explicit Intents are used to start a specific component within the same app. They are used to launch activities, services, or broadcast receivers within the app. Explicit Intents are created by specifying the target component's class name or package name.

Here's an example of an explicit intent that starts a new activity:

```java
Intent intent = new Intent(this, SecondActivity.class);
startActivity(intent);
```

In this example, the `Intent` constructor takes the current context and the target activity's class name as arguments. The `startActivity` method is then called to launch the `SecondActivity`.

## Implicit Intents

Here are a few examples of implicit :

1. **Open a Web Page**
2. **Dial a Phone Number**
3. **Send an Email**
4. **Open a Map Location**
5. **Share Text**

Let's write the complete Java code snippets for each example.

```java
// File: MainActivity.java
package com.example.implicitintents;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button openWebPageButton = findViewById(R.id.button_open_webpage);
        openWebPageButton.setOnClickListener(v -> openWebPage("http://www.example.com"));

        Button dialPhoneNumberButton = findViewById(R.id.button_dial_phone);
        dialPhoneNumberButton.setOnClickListener(v -> dialPhoneNumber("1234567890"));

        Button sendEmailButton = findViewById(R.id.button_send_email);
        sendEmailButton.setOnClickListener(v -> sendEmail("example@example.com", "Subject", "Email Body"));

        Button openMapLocationButton = findViewById(R.id.button_open_map);
        openMapLocationButton.setOnClickListener(v -> openMapLocation("geo:0,0?q=1600+Amphitheatre+Parkway,+Mountain+View,+California"));

        Button shareTextButton = findViewById(R.id.button_share_text);
        shareTextButton.setOnClickListener(v -> shareText("This is the text to share."));
    }

    private void openWebPage(String url) {
        Uri webpage = Uri.parse(url);
        Intent intent = new Intent(Intent.ACTION_VIEW, webpage);
        if (intent.resolveActivity(getPackageManager()) != null) {
            startActivity(intent);
        }
    }

    private void dialPhoneNumber(String phoneNumber) {
        Uri phoneUri = Uri.parse("tel:" + phoneNumber);
        Intent intent = new Intent(Intent.ACTION_DIAL, phoneUri);
        if (intent.resolveActivity(getPackageManager()) != null) {
            startActivity(intent);
        }
    }

    private void sendEmail(String emailAddress, String subject, String body) {
        Intent intent = new Intent(Intent.ACTION_SENDTO);
        intent.setData(Uri.parse("mailto:" + emailAddress));
        intent.putExtra(Intent.EXTRA_SUBJECT, subject);
        intent.putExtra(Intent.EXTRA_TEXT, body);
        if (intent.resolveActivity(getPackageManager()) != null) {
            startActivity(intent);
        }
    }

    private void openMapLocation(String geoLocation) {
        Uri geoUri = Uri.parse(geoLocation);
        Intent intent = new Intent(Intent.ACTION_VIEW, geoUri);
        if (intent.resolveActivity(getPackageManager()) != null) {
            startActivity(intent);
        }
    }

    private void shareText(String text) {
        Intent intent = new Intent(Intent.ACTION_SEND);
        intent.setType("text/plain");
        intent.putExtra(Intent.EXTRA_TEXT, text);
        if (intent.resolveActivity(getPackageManager()) != null) {
            startActivity(intent);
        }
    }
}
```

In the above code:

- **Open a Web Page**: This uses `Intent.ACTION_VIEW` with a URI to open a web page in a browser.
- **Dial a Phone Number**: This uses `Intent.ACTION_DIAL` with a URI to open the dialer with a phone number.
- **Send an Email**: This uses `Intent.ACTION_SENDTO` with a `mailto:` URI to open an email client.
- **Open a Map Location**: This uses `Intent.ACTION_VIEW` with a geo URI to open a map application.
- **Share Text**: This uses `Intent.ACTION_SEND` to share text with other applications that can handle text sharing.

Each of these actions checks if there's an activity that can handle the intent before starting it using `resolveActivity(getPackageManager())`.

**Next steps:**
**a.** Add unit tests to ensure each intent is created correctly.
**b.** Expand the functionality to handle edge cases or additional parameters (e.g., multiple recipients for email).
