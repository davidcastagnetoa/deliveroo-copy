import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
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
import { AppColors } from "../styles/colors";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
      phone,
      theme,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        shortDescription,
        dishes,
        phone,
        theme,
      })
    );
  }, [dispatch]);

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
      {/* return page button */}
      <BasketIcon />

      <ScrollView>
        <View
          className="relative"
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: `${theme === "light" ? "#ebebeb" : "#222222"}`,
          }}
        >
          <Image
            source={require("../assets/blackPNG.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
            resizeMode={"cover"}
          />
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 p-4"
            style={{
              width: "100%",
              resizeMode: "cover",
            }}
          />
          {/* Return back button */}
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={22} color="#E42021" />
          </TouchableOpacity>
        </View>

        <View
          style={
            theme === "light"
              ? { backgroundColor: AppColors.lightBg }
              : { backgroundColor: AppColors.darkBg }
          }
        >
          {/* Restaurant Description Card */}
          <View className="pt-4 px-4">
            <Text
              className="text-3xl font-bold"
              style={
                theme === "light"
                  ? { color: AppColors.lightText }
                  : { color: AppColors.darkText }
              }
            >
              {title}
            </Text>
            <View className="flex-row justify-between">
              <View className="flex-column my-1">
                <View className="flex-row items-center space-x-1">
                  <StarIcon size={22} color="#e83e52" opacity={1} />
                  <Text
                    className="text-xs"
                    style={
                      theme === "light"
                        ? { color: AppColors.lightTextCard }
                        : { color: AppColors.darkTextCard }
                    }
                  >
                    <Text className="text-[#e83e52]">{rating}</Text> · {genre}
                  </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                  <MapPinIcon size={22} color="#e83e52" opacity={1} />
                  <Text
                    className="text-xs"
                    style={
                      theme === "light"
                        ? { color: AppColors.lightTextCard }
                        : { color: AppColors.darkTextCard }
                    }
                  >
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

            <Text
              className=" mt-2 pb-4"
              style={
                theme === "light"
                  ? { color: AppColors.lightText }
                  : { color: AppColors.darkText }
              }
            >
              {shortDescription}
            </Text>
          </View>

          {/* Allergy Card */}
          <TouchableOpacity
            className="flex-row items-center space-x-2 p-4 border-y"
            style={
              theme === "light"
                ? { borderColor: "#d1d5db" }
                : { borderColor: "#434548" }
            }
          >
            <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
            <Text
              className="pl-2 flex-1 font-bold text-md"
              style={
                theme === "light"
                  ? { color: AppColors.lightText }
                  : { color: AppColors.darkText }
              }
            >
              ¿Tienes alguna alergia?
            </Text>
            <ChevronRightIcon size={20} color="#E42021" />
          </TouchableOpacity>
        </View>

        {/* Dishes Card */}
        <View
          style={
            theme === "light"
              ? { backgroundColor: AppColors.lightCard }
              : { backgroundColor: AppColors.darkCard }
          }
          className="pb-32"
        >
          <Text
            className="px-4 pt-6 mb-3 font-bold"
            style={
              theme === "light"
                ? { color: AppColors.lightText }
                : { color: AppColors.darkText }
            }
          >
            Menu
          </Text>
          {dishes?.map((dish) => {
            return (
              <DishRow
                theme={theme}
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
