import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketitems, basketTotalItems } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-web";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketitems);
  const navigation = useNavigation();
  const basketTotal = useSelector(basketTotalItems);

  return (
    <View
      className="absolute bottom-10 w-full z-50"
      style={{
        elevation: 2,
      }}
    >
      <TouchableOpacity className="bg-[#e42021] mx-5 p-3 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-extrabold text-lg bg-[#e83e52] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          Ver Cesta
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="EUR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
