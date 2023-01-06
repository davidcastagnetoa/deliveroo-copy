import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "category"]
        `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 8,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      {categories.map((category) => {
        return (
          <CategoryCard
            key={category._id}
            imgUrl={urlFor(category.image.asset._ref).width(200).url()}
            // imgUrl="https://links.papareact.com/gn7"
            title={category.name}
          />
        );
      })}
      {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing5" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing6" /> */}
    </ScrollView>
  );
};

export default Categories;
