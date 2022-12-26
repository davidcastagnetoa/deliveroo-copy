import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeatureRow = ({ id, title, description, featuredCategory }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->, 
            type->{
              name
            }
        }
      }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);

  console.log(restaurants);

  return (
    <View className="bg-white mx-2 rounded-md mb-2">
      <View className="mt-3 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#E42021" />
      </View>

      <Text className="text-sm text-[#333030] px-4 mb-1">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
        showsHorizontalScrollIndicator={false}
        className="py-3"
      >
        {/* Restaurants Cards */}
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={4.5}
            genre="Japanesse"
            address="123 Main Street"
            short_description={restaurant.short_description}
            dishes={{}}
          />
        ))}

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
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
