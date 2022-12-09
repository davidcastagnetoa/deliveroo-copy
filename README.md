# deliveroo-copy
Dependencies to need
1. Install Expo
   ```sh
   npm i -g expo-cli
   ```
2. Install Expo App
   https://expo.dev/client


3. Start server Expo
   ```sh
   expo start
   ```
4. Help Documentation Press

   ```sh
   ?
   ```
5. Install NativeWind CSS and configure

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

6. Add the TailwindProvider
   ```sh
   import { TailwindProvider } from "tailwindcss-react-native"
   ```

7. Configure your babel.config.js
   ```sh
   // babel.config.js
   module.exports = {
      plugins: ["tailwindcss-react-native/babel"],
   };
   ```
8. Install React Navigation
   ```sh
   npm install @react-navigation/native
   npx expo install react-native-screens react-native-safe-area-context
   ```
9. Add the NavigationContainer
   ```sh
   import * as React from 'react';
   import { NavigationContainer } from '@react-navigation/native';

   export default function App() {
      return (
         <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
      );
   }
   ```
10. Installing the native stack navigator library
   ```sh
   npm install @react-navigation/native-stack
   ```
11. Add the native stack navigator
12. ```sh
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
    ```# deliveroo-copy
