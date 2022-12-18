import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/solid';

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity>
      <Image source={{
        uri: imgUrl,
      }}
      className='h-36 w-64 rounded-md'
      />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View>
          <StarIcon color='#E42021' opacity={0.5} size={22}/>
          <MapPinIcon color='#E42021' opacity={0.5} size={22}/>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
