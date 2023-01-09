import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";
import { AppColors } from "../styles/colors";

const FeatureRow = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const { id, title, description, theme } = props;

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
        },
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
    <View
      className="mx-2 rounded-md mb-2"
      style={
        theme === "light"
          ? { backgroundColor: AppColors.lightCard }
          : { backgroundColor: AppColors.darkCard }
      }
    >
      <View className="mt-3 flex-row items-center justify-between px-4">
        <Text
          className="font-bold text-lg"
          style={
            theme === "light"
              ? { color: AppColors.lightText }
              : { color: AppColors.darkText }
          }
        >
          {title}
        </Text>
        <ArrowRightIcon color="#E42021" />
      </View>

      <Text
        className="text-sm px-4 mb-1"
        style={
          theme === "light"
            ? { color: AppColors.lightTextCard }
            : { color: AppColors.darkTextCard }
        }
      >
        {description}
      </Text>
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
            theme={theme}
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image.asset._ref}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            shortDescription={restaurant.shortDescription}
            phone={restaurant.phone}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          ></RestaurantCard>
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
