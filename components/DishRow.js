import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Currency from "react-currency-formatter";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketitemsWithId } from "../features/basketSlice";

const DishRow = ({ id, name, shortDescription, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  const items = useSelector((state) => selectBasketitemsWithId(state, id));

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, shortDescription, price, image }));
  };
  const removeItemToBasket = () => {
    dispatch(removeFromBasket({ id, name, shortDescription, price, image }));
  };

  console.log(items);
  

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-4 ">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-500 text-xs">{shortDescription}</Text>
            <Text className="text-gray-800 mt-2">
              <Currency quantity={price} currency="EUR" />
            </Text>
          </View>
          <View className="self-center">
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              className="h-24 w-24 p-4 bg-gray-200"
              source={{ uri: urlFor(image).url() }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity 
              // onPress={removeItemToBasket}
            >
              <MinusCircleIcon
                // color={items.length > 0 ? "#E42021" : "gray"}
                size={38}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>

            <TouchableOpacity 
              onPress={addItemToBasket}
            >
              <PlusCircleIcon
                // color={items.length > 0 ? "#E42021" : "gray"}
                size={38}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
