import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { AppColors } from "../styles/colors";
import { XCircleIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const theme = restaurant.theme;

  console.log(restaurant.theme);
  console.log(restaurant.lat);
  console.log(restaurant.long);

  return (
    <View
      className="flex-1"
      style={
        theme === "light"
          ? styles.container
          : [styles.container, { backgroundColor: AppColors.darkRed }]
      }
    >
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-4">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XCircleIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-lg text-white">Ayuda</Text>
        </View>

        {/* Estimated Arrival Row */}
        <View
          className="mx-5 my-2 rounded-md p-6 z-50 shadow-sm"
          style={{ backgroundColor: AppColors.lightBg }}
        >
          {/* Text and Logo Row */}
          <View className="flex-row justify-between">
            {/* Time Arrival Col */}
            <View>
              <Text
                className="text-lg"
                style={{ color: AppColors.lightButton }}
              >
                Tiempo estimado
              </Text>
              <Text className="text-4xl font-bold">30-45 Minutos</Text>
            </View>
            {/* Logo Delivery Progress */}
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>
          {/* Progress Bar */}
          <Progress.Bar color="#e54a4b" indeterminate={true} width={210} />
          {/* Restaurant Response Text */}
          <Text className="mt-3" style={{ color: AppColors.lightTextCard }}>
            {restaurant.title} está preparando su orden
          </Text>
        </View>
      </SafeAreaView>

      {/* Map view from Google Maps  */}
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex-1 mt-10 z-0"
        mapType="mutedStandard"
      >
        {/* Pin Google Maps */}
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.shortDescription}
          identifier="origin"
          pinColor={AppColors.lightRed}
        />
      </MapView>

      {/* Bottom Banner */}
      <SafeAreaView className="flex-row items-center space-x-5 h-28" style={{backgroundColor: AppColors.lightBg}}>
        <Image source={require("../assets/sushiLogo.png")} className="h-12 w-12 rounded-full ml-5 bg-gray-300"/>
        <View className="flex-1">
          <Text className="text-lg">David Castagneto</Text>
          <Text style={{color: AppColors.lightTextCard}}>Tu repartidor</Text>
        </View>
        <Text className="text-lg mr-5 font-bold" style={{color: AppColors.lightRed}}>Llamar</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 4,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 6,
    backgroundColor: AppColors.lightRed,
  },
});

export default DeliveryScreen;
