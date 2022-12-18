import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/solid";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white rounded-lg mr-3 shadow">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-md"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex flex-row items-center space-x-1">
          <StarIcon color="#B00020" opacity={0.75} size={22} />
          <Text className="text-xs text-[#303030]">
            <Text className="text-[#17B890]">{rating}</Text> - {genre}
          </Text>
        </View>

        <View className="flex flex-row items-center space-x-1">
          <MapPinIcon color="#17B890" opacity={0.75} size={22} />
          <Text className="text-xs text-[#303030]">Nearby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
