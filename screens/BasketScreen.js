import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { selectBasketitems, basketTotalItems } from "../features/basketSlice";
import { AppColors } from "../styles/colors";
import { TrashIcon, XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { removeFromBasket } from "../features/basketSlice";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketitems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();
  const basketTotal = useSelector(basketTotalItems);

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
      style={
        theme === "light"
          ? styles.container
          : [styles.container, { backgroundColor: AppColors.darkBg }]
      }
      className="flex-1"
      // style={
      //   theme === "light"
      //     ? { backgroundColor: AppColors.lightBg }
      //     : { backgroundColor: AppColors.darkBg }
      // }
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
                  elevation: 3,
                  backgroundColor: AppColors.lightBg,
                }
              : {
                  elevation: 2,
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
            className="absolute top-3 right-5 rounded-full"
            style={
              theme === "light"
                ? { backgroundColor: AppColors.lightCard }
                : { backgroundColor: AppColors.darkCard }
            }
          >
            <XCircleIcon 
              size={22} 
              width={50} 
              height={50} 
              color={ theme === "light" ? AppColors.lightRed : AppColors.darkRed } 
            />
          </TouchableOpacity>
        </View>

        {/* Time Deliver Bannerº */}
        <View
          className="flex-row items-center space-x-4 px-4 py-3 my-5"
          style={
            theme === "light"
              ? { backgroundColor: AppColors.lightBg }
              : { backgroundColor: AppColors.darkBg }
          }
        >
          <Image
            className="h-7 w-7 bg-gray-300 rounded-full p-4"
            source={require("../assets/sushiLogo.png")}
          />
          <Text
            className="flex-1"
            style={ theme === "light" ? { color: AppColors.lightText } : { color: AppColors.darkText } }
          >
            Entregar en 50-75 min
          </Text>
          <TouchableOpacity>
            <Text
              style={ theme === "light" ? { color: AppColors.lightRed } : { color: AppColors.darkRed } }
            >
              Cambiar
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          // className={`divide-y divide-[${AppColors.lightCard}]`}
          className={`divide-y divide-[#E4E6E9]`}
        >
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4"
              style={
                theme === "light"
                  ? { backgroundColor: AppColors.lightBg }
                  : { backgroundColor: AppColors.darkBg }
              }
            >
              {/* Dishes Quantity */}
              <Text
                style={
                  theme === "light"
                    ? { color: AppColors.lightRed }
                    : { color: AppColors.darkRed }
                }
              >
                {items.length} x
              </Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="w-12 h-12 rounded-full"
              />
              {/* Dish Name */}
              <Text
                className="flex-1 text-xs"
                style={
                  theme === "light"
                    ? { color: AppColors.lightText }
                    : { color: AppColors.darkText }
                }
              >
                {items[0]?.name}
              </Text>
              {/* Dish Price */}
              <Text
                className="text-xs"
                style={
                  theme === "light"
                    ? { color: AppColors.lightTextCard }
                    : { color: AppColors.darkTextCard }
                }
              >
                <Currency quantity={items[0]?.price} currency="EUR" />
              </Text>
              {/* Remove Item Basket Button */}
              <TouchableOpacity>
                <Text
                  className="text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                  style={
                    theme === "light"
                      ? { color: AppColors.lightRed }
                      : { color: AppColors.darkRed }
                  }
                >
                  <TrashIcon size={20} color={ theme === "light" ? AppColors.lightRed : AppColors.darkRed } />
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Payment Row */}
        <View
          className="p-5 mt-5 space-y-4"
          style={
            theme === "light"
              ? { backgroundColor: AppColors.lightBg }
              : { backgroundColor: AppColors.darkBg }
          }
        >
          {/* Subtotal Row */}
          <View className="flex-row justify-between">
            <Text
              style={
                theme === "light"
                  ? { color: AppColors.lightTextCard }
                  : { color: AppColors.darkTextCard }
              }
            >
              Subtotal
            </Text>
            <Text
              style={
                theme === "light"
                  ? { color: AppColors.lightTextCard }
                  : { color: AppColors.darkTextCard }
              }
            >
              <Currency quantity={basketTotal} currency="EUR" />
            </Text>
          </View>

          {/* Delivery Fee Row */}
          <View className="flex-row justify-between">
            <Text
              style={
                theme === "light"
                  ? { color: AppColors.lightTextCard }
                  : { color: AppColors.darkTextCard }
              }
            >
              Envío
            </Text>
            <Text
              style={
                theme === "light"
                  ? { color: AppColors.lightTextCard }
                  : { color: AppColors.darkTextCard }
              }
            >
              <Currency quantity={4.99} currency="EUR" />
            </Text>
          </View>

          {/* Total Row */}
          <View className="flex-row justify-between">
            <Text
              className="font-extrabold"
              style={
                theme === "light"
                  ? { color: AppColors.lightText }
                  : { color: AppColors.darkText }
              }
            >
              Total
            </Text>
            <Text
              className="font-extrabold"
              style={
                theme === "light"
                  ? { color: AppColors.lightText }
                  : { color: AppColors.darkText }
              }
            >
              <Currency quantity={basketTotal + 4.99} currency="EUR" />
            </Text>
          </View>

          {/* Payment Button */}
          <TouchableOpacity 
            className="p-4 rounded-lg" 
            onPress={() => navigation.navigate("PreparingOrder")}
            style={ theme === "light" ? { backgroundColor: AppColors.lightRed } : { backgroundColor: AppColors.darkRed } }
          >
            <Text
              className="text-center text-lg font-bold text-white"
              // style={ theme === "light" ? { color: AppColors.darkText } : { color: AppColors.lightText } }
            >
              Ordenar Pedido
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 4,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 6,
    backgroundColor: AppColors.lightBg,
  },
});

export default BasketScreen;
