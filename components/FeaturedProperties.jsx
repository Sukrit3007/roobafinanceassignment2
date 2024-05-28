import { View, Text, FlatList,ScrollView  } from "react-native";
import { Redirect,router } from "expo-router";

import React from "react";
import FeaturedCard from "./FeaturedCard";
import featureimg1 from "../assets/images/featureimg1.png";
import featureimg2 from "../assets/images/featureimg2.png";
import featureimg3 from "../assets/images/featureimg3.png";
import { SafeAreaView } from "react-native-safe-area-context";

const FeaturedProperties = () => {
  const properties = [
    {
      id: "1",
      image: featureimg1,
      location: "Pali Hill, Bandra West, Mumbai, MH, India",
      totalValue: "$1,796,192",
      startingPrice: "$17,961.92++",
      peopleRegistered: "84/100",
      bedrooms: 4,
      bathrooms: 4,
      sqft: 2900,
      acres: 0.13,
    },
    {
      id: "2",
      image: featureimg2,
      location: "Vasant Vihar, New Delhi, DL, India ",
      totalValue: "$1,679,261",
      startingPrice: "$83,963++ ",
      peopleRegistered: "4/20",
      bedrooms: 4,
      bathrooms: 4,
      sqft: 2900,
      acres: 0.13,
    },
    {
      id: "3",
      image: featureimg3,
      location: "Pali Hill, Bandra West, Mumbai, MH, India",
      totalValue: "$1,796,192",
      startingPrice: "$17,961.92++",
      peopleRegistered: "84/100",
      bedrooms: 4,
      bathrooms: 4,
      sqft: 2900,
      acres: 0.13,
    },
  ];

  return (
    <SafeAreaView
    className='w-full h-full flex pb-24 '
    >
      <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 4 }}>Featured Properties</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {properties.map((item) => (
          <FeaturedCard
            key={item.id}
            image={item.image}
            location={item.location}
            totalValue={item.totalValue}
            startingPrice={item.startingPrice}
            peopleRegistered={item.peopleRegistered}
            bedrooms={item.bedrooms}
            bathrooms={item.bathrooms}
            sqft={item.sqft}
            acres={item.acres}
            
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeaturedProperties;
