# deliveroo-copy
Dependencies to need
A tutorial from: https://www.youtube.com/watch?v=AkEnidfZnCU&t=3005s&ab_channel=SonnySangha
Install Expo App: https://expo.dev/client



1.  Install Expo
   ```sh
   npm i -g expo-cli
   ```

02. Start server Expo
   ```sh
   expo start
   ```

03. Help Documentation Press
   ```sh
   ?
   ```

04. Install NativeWind CSS and configure
   ```sh
   npm install tailwindcss-react-native
   npm install --save-dev tailwindcss
   ```

   ```sh
   // tailwind.config.js
   module.exports = {
      content: [
         "./screens/**/*.{js,ts,jsx,tsx}",
         "./pages/**/*.{js,ts,jsx,tsx}",
         "./components/**/*.{js,ts,jsx,tsx}",
      ],
      // ...
   };
   ```

05. Add the TailwindProvider
   ```sh
   import { TailwindProvider } from "tailwindcss-react-native"
   ```

06. Configure your babel.config.js
   ```sh
   // babel.config.js
   module.exports = {
      plugins: ["tailwindcss-react-native/babel"],
   };
   ```
07. Install React Navigation
   ```sh
   npm install @react-navigation/native
   npx expo install react-native-screens react-native-safe-area-context
   ```
08. Add the NavigationContainer
   ```sh
   import * as React from 'react';
   import { NavigationContainer } from '@react-navigation/native';

   export default function App() {
      return (
         <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
      );
   }
   ```

09. Installing the native stack navigator library
   ```sh
   npm install @react-navigation/native-stack
   ```

10. Add the native stack navigator
   ```sh
   import { createNativeStackNavigator } from '@react-navigation/native-stack';
   ```
