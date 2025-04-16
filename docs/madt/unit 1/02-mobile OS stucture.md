# Structure of Mobile Operating Systems

A mobile OS serves as a software platform upon which application programs run on mobile devices such as PDAs, cellular phones, and smartphones. Here's an overview of the structure of mobile operating systems:

![mobile architecture](/img/android/architecture.jpg)

The main components of android architecture are following:-

- Applications
- Application Framework
- Android Runtime
- Platform Libraries
- Linux Kernel

## Applications Layer

Applications stays the top layer of the Android architecture. It includes pre-installed applications like home, contacts, camera, gallery, etc., as well as third-party applications downloaded from the Play Store, such as chat applications and games. These applications run within the Android runtime, utilizing classes and services provided by the application framework.

## Application Framework

The Application Framework provides essential classes for creating Android applications. It offers a generic abstraction for hardware access and aids in managing the user interface with application resources. Various services provided by the Application Framework include:

- Activity Manager
- Notification Manager
- View System
- Package Manager

These services facilitate the development of applications according to specific requirements.

## Application Runtime

The Android Runtime environment is a crucial component of Android architecture. It consists of core libraries and the Dalvik virtual machine (DVM), serving as the foundation for the application framework and empowering applications through core libraries. Key features include:

- Dalvik Virtual Machine (DVM): Optimized for Android, it efficiently runs multiple instances and relies on the Linux kernel for threading and memory management.
- Core Libraries: Enable the implementation of Android applications using standard programming languages like Java or Kotlin.

## Platform Libraries

Platform Libraries encompass various C/C++ core libraries and Java-based libraries essential for Android development. These include:

- Media Library: Supports playing and recording audio and video formats.
- Surface Manager: Manages access to the display subsystem.
- SGL and OpenGL: APIs for 2D and 3D computer graphics.
- SQLite: Provides database support.
- FreeType: Supports fonts.
- WebKit: Renders web content and simplifies page loading.
- SSL (Secure Sockets Layer): Ensures secure communication between a web server and a browser.

## Linux Kernel

The Linux Kernel forms the heart of the Android architecture. It manages device drivers (display, camera, Bluetooth, audio, memory, etc.) required during runtime and serves as an abstraction layer between device hardware and other components of the Android architecture. Key features include:

- Security: Handles security between applications and the system.
- Memory Management: Efficiently manages memory, facilitating app development.
- Process Management: Manages processes and resource allocation.
- Network Stack: Handles network communication effectively.
- Driver Model: Ensures proper functioning of applications on devices by integrating drivers into the Linux build.

#### Introduction to Development Environment

- **Native Apps:**
  - Installed directly onto a device from its associated app store.
  - Platform-dependent, designed for specific operating systems.
  - **Pros:**
    - Better performance
    - Easier development with platform SDKs
    - Better distribution and monetization through app stores
  - **Cons:**
    - Increased development time and costs
    - Higher maintenance costs
    - App store content restrictions and fees
- **HTML5 Apps:**
  - Delivered through an HTML5-enabled browser.
  - Platform-independent, accessible via any web browser.
  - **Pros:**
    - Platform independence
    - Easier updates and faster development
    - Cheaper development costs
    - No content restrictions or app store fees
  - **Cons:**
    - Poorer performance, especially with heavy graphics
    - Device fragmentation within web browsers
    - Technical limitations and limited monetization opportunities
- **Hybrid Apps:**
  - hybrid mobile apps combine elements of web apps and native apps.
  - **Pros:**
    - Cross-Platform Compatibility
    - Faster Development Time and Lower Costs
    - Access to Native Device Features
  - **Cons:**
    - Performance Limitations
    - User Experience Discrepancies
    - Dependency on Third-Party Frameworks
    - Limited Access to Platform-Specific Features

#### Introduction to Android

- **Description:** A platform and operating system for mobile devices based on the Linux OS. Allows developers to design applications in a Java-like language using Google-developed Java libraries.
- **API Levels and Versions:** Android's version history began with the release of Android beta in November 2007. The first commercial version, Android 1.0, was released in September 2008. Android is under ongoing development by Google and the Open Handset Alliance (OHA), with numerous updates to its base operating system over time.

### Android Version History and Comparison with Other OSes

#### Android Version History:

| Version   | SDK / API level | Version code | Codename          | Cumulative usage | Year |
|-----------|-----------------|--------------|-------------------|------------------|------|
| Android 15 DEV | Level 35 | VANILLA_ICE_CREAM | Vanilla Ice Cream 2 | — | TBD |
| Android 14     | Level 34 | UPSIDE_DOWN_CAKE | Upside Down Cake 2  | 12.6% | 2023 |
| Android 14     | targetSdk will need to be 34+ for new apps and app updates by August 31, 2024. | | | | 2023 |
| Android 13     | Level 33 | TIRAMISU         | Tiramisu 2          | 41.4% | 2022 |
| Android 13     | targetSdk must be 33+ for new apps and app updates since August 31, 2023. | | | | 2022 |
| Android 12     | Level 32 Android 12L | S_V2 | Snow Cone 2        | 58.5% | |
| Android 12     | Level 31 Android 12   | S    | Snow Cone 2        |       | 2021 |
| Android 11     | Level 30              | R    | Red Velvet Cake 2  | 75.0% | 2020 |
| Android 10     | Level 29              | Q    | Quince Tart 2      | 84.0% | 2019 |
| Android 9      | Level 28              | P    | Pie                | 90.0% | 2018 |
| Android 8      | Level 27 Android 8.1 | O_MR1| Oreo               | 92.1% | 2017 |
| Android 8      | Level 26 Android 8.0  | O    | Oreo               | 95.1% | |
| Android 7      | Level 25 Android 7.1  | N_MR1| Nougat             | 95.6% | 2016 |
| Android 7      | Level 24 Android 7.0  | N    | Nougat             | 97.0% | |
| Android 6      | Level 23              | M    | Marshmallow        | 98.4% | 2015 |
| Android 5      | Level 22 Android 5.1  | LOLLIPOP_MR1 | Lollipop         | 99.2% | |
| Android 5      | Level 21 Android 5.0  | LOLLIPOP , L | Lollipop         | 99.5% | 2014 |
| Android 5      | Jetpack Compose requires a minSdk of 21 or higher. Google Play services v23.30.99+ (August 2023) drops support for API levels below 21. | | | | 2014 |
| Android 4      | Level 20 Android 4.4W 3 | KITKAT_WATCH | KitKat          | 99.8% | |
| Android 4      | Level 19 Android 4.4    | KITKAT       | KitKat          |       | 2013 |
| Android 4      | Jetpack / AndroidX libraries require a minSdk of 19 or higher since October 2023. Google Play services v21.33.56+ (July 2021) drops support for API levels below 19. | | | | 2013 |
| Android 4      | Level 18 Android 4.3    | JELLY_BEAN_MR2 | Jelly Bean     | 99.8% | |
| Android 4      | Level 17 Android 4.2    | JELLY_BEAN_MR1 | Jelly Bean     | 99.8% | 2012 |
| Android 4      | Level 16 Android 4.1    | JELLY_BEAN     | Jelly Bean     | 99.8% | |
| Android 4      | Google Play services v14.8.39+ (December 2018) drops support for API levels below 16. | | | | |
| Android 4      | Level 15 Android 4.0.3 – 4.0.4 | ICE_CREAM_SANDWICH_MR1 | Ice Cream Sandwich | 99.9% | 2011 |
| Android 4      | Level 14 Android 4.0.1 – 4.0.2 | ICE_CREAM_SANDWICH | Ice Cream Sandwich |       | 2011 |
| Android 4      | Earlier Jetpack / AndroidX libraries required a minSdk of 14 or higher. | | | | 2011 |
| Android 3      | Level 13 Android 3.2    | HONEYCOMB_MR2 | Honeycomb         | No data | |
| Android 3      | Level 12 Android 3.1    | HONEYCOMB_MR1 | Honeycomb         | No data | |
| Android 3      | Level 11 Android 3.0    | HONEYCOMB     | Honeycomb         | No data | |
| Android 2      | Level 10 Android 2.3.3 – 2.3.7 | GINGERBREAD_MR1 | Gingerbread | No data | |
| Android 2      | Level 9 Android 2.3.0 – 2.3.2 | GINGERBREAD | Gingerbread       | No data | 2010 |
| Android 2      | Level 8 Android 2.2     |        | FROYO                  | No data | 2010 |
| Android 2      | Level 7 Android 2.1     |        | ECLAIR_MR1             | No data | 2010 |
| Android 2      | Level 6 Android 2.0.1   |        | ECLAIR_0_1             | No data | 2009 |
| Android 2      | Level 5 Android 2.0     |        | ECLAIR                 | No data | |
| Android 1      | Level 4 Android 1.6     |        | DONUT                  | No data | 2009 |
| Android 1      | Level 3 Android 1.5     |        | CUPCAKE                | No data | 2009 |
| Android 1      | Level 2 Android 1.1     |        | BASE_1_1               | No data | 2009 |
| Android 1      | Level 1 Android 1.0     |        | BASE                   | No data | 2008 |


#### Pros of Android:

- **Open Source:** Android is an open-source operating system, allowing for customization and flexibility.
- **Wide Range of OEMs:** Numerous Original Equipment Manufacturers (OEMs) produce Android devices, offering diverse options to consumers.
- **Google Support:** Google provides extensive support for Android users, solving their problems and offering various services.
- **Large App Selection:** Google Play Store offers a vast selection of apps, catering to diverse user needs.

#### Cons of Android:

- **Security Concerns:** Android is not as secure as iOS and Windows OS, making it susceptible to malware and other security threats.
- **App Store Clutter:** Google Play Store has a large number of apps, but many of them are of low quality or not frequently downloaded, leading to clutter and confusion.
- **App Compatibility Issues:** Compatibility issues may arise due to the fragmentation of Android devices running different OS versions.
- **Performance Degradation:** Over time, Android devices may become slow in operation, affecting user experience.
- **Battery Consumption:** Android OS and apps may consume battery quickly, leading to shorter battery life.

#### Comparison of Android with Other OSes:

- **App Availability:** Android has the largest number of apps in its store compared to Apple's App Store and Windows Store.
- **Feature Innovation:** Android introduced features like Wi-Fi Direct, multiple user accounts, and screen mirroring support ahead of other OSes.
- **OEM Diversity:** Android has over 100 OEMs, offering a wide range of device options, while iOS is limited to Apple Inc. and Windows has fewer OEMs.
- **Open Source vs. Closed Source:** Android is open source and customizable, whereas iOS and Windows are closed source, limiting customization options.
