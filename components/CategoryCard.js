import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AppColors } from "../styles/colors";

const CategoryCard = (props) => {
  const { imgUrl, title, theme } = props;

  return (
    <TouchableOpacity
      className="relative mr-2 border rounded-[12px]"
      style={
        theme === "light"
          ? { borderColor: AppColors.lightRed }
          : { borderColor: AppColors.darkRed }
      }
    >
      <Image
        source={{
          uri: imgUrl,
          resizeMode: "contain",
        }}
        className="h-24 w-20 rounded-[12px] m-[2px]"
      />
      {/* Category Card */}
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
