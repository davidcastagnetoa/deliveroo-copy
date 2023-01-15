import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  Switch
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
} from "react-native-heroicons/outline";
import { MagnifyingGlassIcon, UserIcon } from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
import sanityClient from "../sanity";
import { AppColors } from "../styles/colors";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured"]{
          ...,
          restaurants[]->{
              ...,
              dishes[]->
          }
      }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  const [theme, setTheme] = useState("light");

  return (
    <SafeAreaProvider
      style={
        theme === "light"
          ? styles.container
          : [styles.container, { backgroundColor: AppColors.darkBgBanner }]
      }
    >
      {/* Header */}
      <View
        style={{ elevation: 2 }}
        className="flex flex-row pb-3 pt-1 items-center mx-2 space-x-2 bg-red px-1"
      >
        {/* Logo */}
        <Image
          source={require("../assets/sushiLogo.png")}
          className="h-12 w-12 bg-slate-100 p-4 rounded-full"
        />
        {/* Text */}
        <View className="flex flex-1">
          <Text
            className="font-bold text-xs"
            style={{ color: AppColors.darkText }}
          >
            Entregar Ahora
          </Text>
          <Text className="font-bold text-xl text-[#e54a4b]">
            Ubicacion Actual
            <ChevronDownIcon size={20} color="#e54a4b" />
          </Text>
        </View>
        {/* User Icon */}
        <UserIcon size={25} color="#e54a4b" />
        {/* {Toogle Button Dark Mode} */}
        <Switch
          value={theme === "light"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        ></Switch>
      </View>

      {/* Search */}

      <View
        style={{ elevation: 2 }}
        className="flex flex-row items-center space-x-2 pb-2 mx-2 px-1"
      >
        <View
          className="flex flex-row flex-1 rounded-lg space-x-2 bg-[#F2F2F2] p-3"
          style={
            theme === "light"
              ? { backgroundColor: AppColors.lightCard }
              : { backgroundColor: AppColors.darkCard }
          }
        >
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurantes y Locales"
            placeholderTextColor="#6F6F6F"
            keyboardType="defaut"
            className="flex flex-1 flex-row focus-visible:outline-none"
            style={{ outline: "none" }}
          />
        </View>
        <AdjustmentsHorizontalIcon
          color="#e54a4b"
          size={25}
        ></AdjustmentsHorizontalIcon>
      </View>

      {/* Body */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 1,
          gap: 5,
          elevation: -2,
        }}
        style={
          theme === "light"
            ? { backgroundColor: AppColors.lightBg }
            : { backgroundColor: AppColors.darkBg }
        }
      >
        {/* Categories */}
        <Categories theme={theme}/>

        {/* Feature Rows, or cards */}
        {featuredCategories?.map((category) => (
          <FeatureRow
            theme={theme}
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.shortDescription}
            featuredCategory={category.shortDescription}
          />
        ))}
      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 4,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 6,
    backgroundColor: AppColors.darkBgBanner,
  },
});

export default HomeScreen;
