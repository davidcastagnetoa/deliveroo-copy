import { View, Text } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid"

const FeatureRow = ({ id, title, description, featuredCategory }) => {
  return (
    <View className='bg-white mx-1 rounded-md'>
      <View className='mt-3 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{ title }</Text>
        <ArrowRightIcon color='#E42021'/>
      </View>

      <Text className='text-sm text-[#333030] px-4 mb-1'>{ description }</Text>
    </View>
  );
};

export default FeatureRow;
