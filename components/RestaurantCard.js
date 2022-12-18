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
    <TouchableOpacity
      style={{ elevation: 2 }}
      className="bg-white mr-3 border border-gray-400 rounded-lg mb-1"
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-t-md"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex flex-row items-center mb-0.5">
          <View className='flex flex-row items-center space-x-[1px] mr-2'>
            <StarIcon color="#facc15" opacity={1} size={20} />
            <StarIcon color="#facc15" opacity={1} size={20} />
            <StarIcon color="#facc15" opacity={1} size={20} />
            <StarIcon color="#facc15" opacity={1} size={20} />
          </View>

          <Text className="text-xs text-[#303030]">
            <Text className="text-blue-800">{rating}</Text> - {genre}
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
