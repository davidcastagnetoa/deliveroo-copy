import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";

const FeatureRow = ({ id, title, description, featuredCategory }) => {
  return (
    <View className="bg-white mx-2 rounded-md">
      <View className="mt-3 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#E42021" />
      </View>

      <Text className="text-sm text-[#333030] px-4 mb-1">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="py-3"
      >
        {/* Restaurants Cards */}
        <RestaurantCard
          id={1234}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanesse"
          address="123 Main Street"
          short_description="Sushi Poke Bowl and anothers Japanesse Food"
          dishes={{}}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1234}
          imgUrl="https://links.papareact.com/gn7"
          title="Healthy Pokes"
          rating={5.6}
          genre="Japanesse"
          address="123 Main Street"
          short_description="Sushi Poke Bowl and anothers Japanesse Food"
          dishes={{}}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1234}
          imgUrl="https://links.papareact.com/gn7"
          title="Healthy Pokes"
          rating={5.6}
          genre="Japanesse"
          address="123 Main Street"
          short_description="Sushi Poke Bowl and anothers Japanesse Food"
          dishes={{}}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
