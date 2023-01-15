import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/core";
import { AppColors } from "../styles/colors";

const RestaurantCard = (props) => {
  const {
    id,
    imgUrl,
    shortDescription,
    title,
    rating,
    genre,
    address,
    dishes,
    phone,
    theme,
    long,
    lat
  } = props;
  const navigation = useNavigation();

  console.log({
    id,
    imgUrl,
    shortDescription,
    title,
    rating,
    genre,
    address,
    dishes,
    phone,
    theme,
    long,
    lat
  });

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          shortDescription,
          title,
          rating,
          genre,
          address,
          dishes,
          phone,
          theme,
          long,
          lat
        });
      }}
      style={
        theme === "light"
          ? {
              elevation: 2,
              backgroundColor: AppColors.lightBg,
            }
          : {
              elevation: 1,
              backgroundColor: AppColors.darkBg,
            }
      }
      className="mr-3 rounded-lg mb-1"
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="rounded-t-md"
        style={{
          width: "100%",
          height: 144,
          resizeMode: "contain",
          paddingVertical: 10,
        }}
      />
      <View className="px-3 pb-4">
        <Text
          className="font-bold text-lg pt-2"
          style={
            theme === "light"
              ? { color: AppColors.lightText }
              : { color: AppColors.darkText }
          }
        >
          {title}
        </Text>
        <View className="flex flex-row items-center mb-0.5">
          <View className="flex flex-row items-center space-x-[1px] mr-2">
            <StarIcon color="#facc15" opacity={1} size={20} />
          </View>

          <Text
            className="text-xs"
            style={
              theme === "light"
                ? { color: AppColors.lightTextCard }
                : { color: AppColors.darkTextCard }
            }
          >
            <Text className="text-blue-800">{rating}</Text> - {genre}
          </Text>
        </View>

        <View className="flex flex-row items-center space-x-1">
          <MapPinIcon color="#17B890" opacity={0.75} size={22} />
          <Text
            className="text-xs"
            style={
              theme === "light"
                ? { color: AppColors.lightTextCard }
                : { color: AppColors.darkTextCard }
            }
          >
            {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
