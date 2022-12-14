import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
} from "react-native-heroicons/outline";
import { MagnifyingGlassIcon, UserIcon } from "react-native-heroicons/solid";
import Categories from "../components/Categories";
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  return (
    <SafeAreaProvider style={styles.container}>
      {/* Header */}
      <View className="flex flex-row pb-3 items-center mx-2 space-x-2 bg-red px-1">
        {/* Logo */}
        <Image
          source={require("../assets/sushiLogo.png")}
          className="h-12 w-12 bg-slate-100 p-4 rounded-full"
        />
        {/* Text */}
        <View className="flex flex-1">
          <Text className="font-bold text-[#B7B7B7] text-xs">
            Entregar Ahora
          </Text>
          <Text className="font-bold text-xl text-[#E42021]">
            Ubicacion Actual
            <ChevronDownIcon size={20} color="#E42021" />
          </Text>
        </View>
        {/* User Icon */}
        <UserIcon size={25} color="#E42021" />
      </View>

      {/* Search */}

      <View className="flex flex-row items-center space-x-2 pb-2 mx-2 px-1">
        <View className="flex flex-row flex-1 rounded-lg space-x-2 bg-[#F2F2F2] p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurantes y Locales"
            keyboardType="defaut"
            className="flex flex-1 flex-row focus-visible:outline-none"
            style={{ outline: "none" }}
          />
        </View>
        <AdjustmentsHorizontalIcon
          color="#FF0000"
          size={25}
        ></AdjustmentsHorizontalIcon>
      </View>

      {/* Body */}
      <ScrollView
        className="bg-[#F2F2F2]"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Feature Rows, or cards */}
      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 10,
    marginLeft: 6,
    marginRight: 6,
    paddingTop: 6,
    backgroundColor: "#FFFFFF",
  },
});

export default HomeScreen;
