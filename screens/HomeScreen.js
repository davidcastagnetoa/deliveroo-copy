import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaProvider } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaProvider style={styles.container}>
      <Text className="text-red-500">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={require("../assets/sushiLogo.png")}
            className="h-12 w-12 bg-slate-100 p-4 rounded-full"
          />
          <View>
            <Text className="font-bold text-slate-400 text-xs">Entregar Ahora</Text>
            <Text className="font bold text-xl">Ubicacion Actual</Text>
          </View>
        </View>
      </Text>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 10,
    marginLeft: 10,
    height: 34,
  },
});

export default HomeScreen;
