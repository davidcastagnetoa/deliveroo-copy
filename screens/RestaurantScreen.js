import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      shortDescription,
      dishes,
    },
  } = useRoute();
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  console.log(useRoute());

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 bg-gray-200 p-4"
          style={{
            width: "100%",
            resizeMode: "cover",
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="#E42021" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="pt-4 px-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-column my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon size={22} color="green" opacity={0.5} />
              <Text className="text-xs text-[#303030]">
                <Text className="text-green-500">{rating}</Text> · {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <MapPinIcon size={22} color="green" opacity={0.5} />
              <Text className="text-xs text-[#303030]">
                <Text className="whitespace-nowrap text-ellipsis overflow-hidden">
                  {address}
                </Text>
              </Text>
            </View>
          </View>

          <Text className=" mt-2 pb-4">{shortDescription}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
