To integrate the Google Mobile Ads SDK into an Android app using Java, you can follow the steps below:

1. Download the Google Mobile Ads SDK: Visit the Google Mobile Ads SDK download page (https://developers.google.com/admob/android/download) and download the latest version of the SDK.

2. Add the SDK to your project: Extract the downloaded SDK archive and copy the `google-play-services.jar` file into your project's `libs` directory. If the `libs` directory doesn't exist, create it.

3. Modify your app's `build.gradle` file: Open the `build.gradle` file for your app module and add the following dependencies:

```java
dependencies {
    implementation files('libs/google-play-services.jar')
    implementation 'com.google.android.gms:play-services-ads:20.4.0'
}
```

Make sure to replace `20.4.0` with the version of the SDK you downloaded.

4. Sync the Gradle files: Sync your project with Gradle by clicking the "Sync Now" button or running the Gradle sync command.

5. Set up your Ad Unit ID: In the AdMob console (https://apps.admob.com), create an Ad Unit ID for your app. This ID will be used to display ads in your app.

6. Add permissions and meta-data to your AndroidManifest.xml: Open your app's `AndroidManifest.xml` file and add the following permissions and meta-data:

```xml
<manifest>
    <!-- ... -->
    <uses-permission android:name="android.permission.INTERNET" />

    <application>
        <!-- ... -->
        <meta-data
            android:name="com.google.android.gms.ads.APPLICATION_ID"
            android:value="YOUR_ADMOB_APP_ID" />
    </application>
</manifest>
```

Replace `YOUR_ADMOB_APP_ID` with the App ID you obtained from the AdMob console.

7. Implement ads in your app: In your activity or fragment, you can start implementing ads by adding the necessary code to load and display ads. Here's a basic example:

```java
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdView;

public class MainActivity extends AppCompatActivity {
    private AdView adView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        adView = findViewById(R.id.adView);
        AdRequest adRequest = new AdRequest.Builder().build();
        adView.loadAd(adRequest);
    }

    @Override
    protected void onPause() {
        if (adView != null) {
            adView.pause();
        }
        super.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (adView != null) {
            adView.resume();
        }
    }

    @Override
    protected void onDestroy() {
        if (adView != null) {
            adView.destroy();
        }
        super.onDestroy();
    }
}
```

8. add the `AdView` to your layout: Open your app's layout file and add the `AdView` to your layout. Here's an example:

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:ads="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <!-- Your other layout elements -->

    <com.google.android.gms.ads.AdView
        android:id="@+id/adView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        ads:adSize="BANNER"
        ads:adUnitId="YOUR_AD_UNIT_ID"
        android:layout_alignParentBottom="true"
        android:layout_centerHorizontal="true" />
</RelativeLayout>
```

Replace `YOUR_AD_UNIT_ID` with the Ad Unit ID you obtained from the AdMob console. You can customize the layout properties and attributes of the `AdView` according to your app's requirements.

In this example, the `AdView` is positioned at the bottom center of the screen (`android:layout_alignParentBottom="true"` and `android:layout_centerHorizontal="true"`). You can adjust these attributes as needed.

That's it! You have now integrated the Google Mobile Ads SDK into your Android app using Java. Remember to follow Google's policies and guidelines when implementing ads in your app.