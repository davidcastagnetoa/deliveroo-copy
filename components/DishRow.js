import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Currency from "react-currency-formatter";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketitemsWithId,
} from "../features/basketSlice";
import { AppColors } from "../styles/colors";

const DishRow = (props) => {
  const { id, name, shortDescription, price, image, theme } = props;
  const [isPressed, setIsPressed] = useState(false);

  const items = useSelector((state) => selectBasketitemsWithId(state, id));

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, shortDescription, price, image }));
  };
  const removeItemToBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

  console.log(items);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={` border p-4 ${isPressed && "border-b-0"}`}
        style={
          theme === "light"
            ? {
                backgroundColor: AppColors.lightBg,
                borderColor: AppColors.lightBorderCard,
              }
            : {
                backgroundColor: AppColors.darkBg,
                borderColor: AppColors.darkBorderCard,
              }
        }
      >
        <View className="flex-row">
          <View className="flex-1 pr-4 ">
            <Text
              className="text-lg mb-1"
              style={
                theme === "light"
                  ? { color: AppColors.lightText }
                  : { color: AppColors.darkText }
              }
            >
              {name}
            </Text>
            <Text
              className="text-xs"
              style={
                theme === "light"
                  ? { color: AppColors.lightTextCard }
                  : { color: AppColors.darkTextCard }
              }
            >
              {shortDescription}
            </Text>
            <Text
              className="mt-2"
              style={
                theme === "light"
                  ? { color: AppColors.lightText }
                  : { color: AppColors.darkText }
              }
            >
              <Currency quantity={price} currency="EUR" />
            </Text>
          </View>
          <View className="self-center rounded-md">
            <Image
              style={{
                borderWidth: 1,
                borderColor: `${theme === 'light' ? "#d1d5db" : "#CDA500"}`,
                backgroundColor: `${theme === "light" ? "#ebebeb" : "#222222"}`,
                borderRadius: 6,
              }}
              className="h-24 w-24 p-4"
              source={{ uri: urlFor(image).url() }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemToBasket}
            >
              <MinusCircleIcon
                // color="#E42021"
                color={items.length > 0 ? "#E42021" : "gray"}
                size={38}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon color="#E42021" size={38} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
