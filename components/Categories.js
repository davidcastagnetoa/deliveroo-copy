import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 7,
        paddingBottom: 7,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      {/* <CategoryCard imgUrl="../assets/sushiLogo.png" title="testing1" /> */}
      <CategoryCard 
        imgUrl="https://links.papareact.com/gn7" 
        title="testing1"
      />
      <CategoryCard 
        imgUrl="https://links.papareact.com/gn7" 
        title="testing2"
      />
      <CategoryCard 
        imgUrl="https://links.papareact.com/gn7" 
        title="testing3"
      />
      <CategoryCard 
        imgUrl="https://links.papareact.com/gn7" 
        title="testing4"
      />
      <CategoryCard 
        imgUrl="https://links.papareact.com/gn7" 
        title="testing5"
      />
      <CategoryCard 
        imgUrl="https://links.papareact.com/gn7" 
        title="testing6"
      />
    </ScrollView>
  );
};

export default Categories;
