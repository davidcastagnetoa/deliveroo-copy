import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import { UserIcon } from "react-native-heroicons/solid";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaProvider classname="bg-blue pt-5" style={styles.container}>
      <Text className="text-red-500">
        {/* Header */}
        <View className="flex flex-row pb-3 items-center mx-4 space-x-2 bg-red">
        {/* Logo */}
          <Image
            source={require("../assets/sushiLogo.png")}
            className="h-12 w-12 bg-slate-100 p-4 rounded-full"
          />
          {/* Text */}
          <View className="flex flex-1">
            <Text className="font-bold text-slate-400 text-xs">
              Entregar Ahora
            </Text>
            <Text className="font-bold text-xl">
              Ubicacion Actual
              <ChevronDownIcon size={20} color="#FF0000" />
            </Text>
          </View>
          {/* User Icon */}
          <UserIcon size={35} color="#FF0000"/>
        </View>
      </Text>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 10,
    marginLeft: 8,
    marginRight: 8,
  },
});

export default HomeScreen;
