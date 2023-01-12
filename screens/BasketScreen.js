import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { selectBasketitems } from "../features/basketSlice";
import { AppColors } from "../styles/colors";
import { XCircleIcon } from "react-native-heroicons/solid";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketitems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  console.log(groupedItemsInBasket);
  console.log(restaurant);

  const theme = restaurant.theme;
  return (
    <SafeAreaView
      className="flex-1"
      style={
        theme === "light"
          ? { backgroundColor: AppColors.lightBg }
          : { backgroundColor: AppColors.darkBg }
      }
    >
      <View
        className="flex-1"
        style={
          theme === "light"
            ? { backgroundColor: AppColors.lightCard }
            : { backgroundColor: AppColors.darkCard }
        }
      >
        <View
          className="p-5 shadow-sm"
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
        >
          {/* Restaurant's name */}
          <View>
            <Text
              className="text-center text-lg font-bold"
              style={
                theme === "light"
                  ? { color: AppColors.lightText }
                  : { color: AppColors.darkText }
              }
            >
              Cesta
            </Text>
            <Text
              className="text-center"
              style={
                theme === "light"
                  ? { color: AppColors.lightTextCard }
                  : { color: AppColors.darkTextCard }
              }
            >
              {restaurant.title}
            </Text>
          </View>

          {/* Return back button */}
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute top-3 right-5 bg-gray-100 rounded-full"
          >
            <XCircleIcon size={22} width={50} height={50} color="#E42021" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
