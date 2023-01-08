import {
  Image,
  Linking,
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
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
  PhoneIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";

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
      phone
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function makePhoneCall() {
    Linking.openURL(`tel:${phone}`); //Here lays restaurant' phone number
  }

  console.log(useRoute());

  return (
    <>
      <BasketIcon />

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
              backgroundColor: "#FFE7E7",
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={22} color="#E42021" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          {/* Restaurant Description Card */}
          <View className="pt-4 px-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row justify-between">
              <View className="flex-column my-1">
                <View className="flex-row items-center space-x-1">
                  <StarIcon size={22} color="#e83e52" opacity={1} />
                  <Text className="text-xs text-[#303030]">
                    <Text className="text-[#e83e52]">{rating}</Text> · {genre}
                  </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                  <MapPinIcon size={22} color="#e83e52" opacity={1} />
                  <Text className="text-xs text-[#303030]">
                    <Text className="whitespace-nowrap text-ellipsis overflow-hidden">
                      {address}
                    </Text>
                  </Text>
                </View>
              </View>

              <TouchableOpacity className="pr-3" onPress={makePhoneCall}>
                <PhoneIcon size={24} color="#e42021" opacity={1} />
              </TouchableOpacity>
            </View>

            <Text className=" mt-2 pb-4">{shortDescription}</Text>
          </View>

          {/* Allergy Card */}
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
            <Text className="pl-2 flex-1 font-bold text-md">
              ¿Tienes alguna alergia?
            </Text>
            <ChevronRightIcon size={20} color="#E42021" />
          </TouchableOpacity>
        </View>

        {/* Dishes Card */}
        <View style={{ backgroundColor: "#FFE0E0" }} className="pb-32">
          <Text className="px-4 pt-6 mb-3 font-bold">Menu</Text>
          {dishes?.map((dish) => {
            return (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                shortDescription={dish.shortDescription}
                price={dish.price}
                image={dish.image.asset._ref}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
