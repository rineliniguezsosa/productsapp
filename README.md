# Products in react native

Application that uses Zustand for global state management, with integrated authentication and backend consumption.

This is an app developed with **React Native** using **React Native CLI**. It is designed to work on Android devices. Below you will find instructions for downloading and running the project locally.

## Prerequisites

In order to run this project, you must have the following elements installed:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) (para el emulador y las herramientas de desarrollo)
- [Java JDK](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) (versión 17)

## Environment Configuration

1. **Install Node.js**  
   Download and install Node.js from [here](https://nodejs.org/). Node.js includes npm, which is required to install project dependencies

2. **Install React Native CLI**  
   Open a terminal and run the following command to install React Native CLI globally:

   ```sh
   npm install -g react-native-cli
   ```

3. **Install Android Studio**

   Download and install Android Studio from [here](https://developer.android.com/studio)

   Set up a virtual device (emulator) or connect a physical Android device.

   Make sure you have installed the necessary tools (Android SDK, emulator, etc.) within Android Studio.

4. **Install Java 17**
   
   Make sure you have Java version 17 installed. You can download it from [here](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

## Clone the Repository

   Clone the project from GitHub using the following command:

   ```sh
      git clone https://github.com/rineliniguezsosa/productsapp.git
   ```
   Then, navigate to the project directory:

   ```sh
   cd productsapp
   ```
## Installation of Dependencies
   Install the project dependencies using npm:

   ```sh
   npm install 
   ```
## Run the Application
   To run the app on an Android device or emulator, make sure the emulator is running or the device is connected, and then run:

   ```sh
   npx react-native run-android
   ```