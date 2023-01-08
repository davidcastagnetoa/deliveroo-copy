import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className='relative mr-2 border border-[#E42021] rounded-[12px]'>
      <Image 
      source={{
        uri: imgUrl,
        resizeMode: "contain",
      }} 
      className="h-24 w-20 rounded-[12px] m-[2px]" 
      />
      {/* Category Card */}
      <Text className='absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
