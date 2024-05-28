import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";



const FeaturedCard = ({
  image,
  location,
  totalValue,
  startingPrice,
  peopleRegistered,
  bedrooms,
  bathrooms,
  sqft,
  acres,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="w-full flex-row rounded-none border-[0.75px] p-4 mb-4"
    >
      <Image
        source={image}
        resizeMode="cover"
        className="bg-white w-2/5 h-32 rounded-none shadow-lg my-1"
      />

      <View className="flex-1 ml-4 justify-between">
        {/* Heading */}
        <View className="w-full m-1">
          <Text
            className="font-bold text-lg tracking-tighter"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {location}
          </Text>
        </View>

        {/* Details */}
        <View className="w-full flex-row flex-wrap justify-between my-1">
          {/* box1 */}
          <View className="flex items-start justify-center m-1">
            <Text className="text-[8px] sm:text-[10px] md:text-xs text-gray-500">
              Total Value
            </Text>
            <Text className="text-[8px] sm:text-[10px] md:text-xs font-semibold">
              {totalValue}
            </Text>
          </View>
          {/* box2 */}
          <View className="flex items-start justify-center m-1">
            <Text className="text-[8px] sm:text-[10px] md:text-xs text-gray-500">
              Starting at
            </Text>
            <Text className="text-[8px] sm:text-[10px] md:text-xs font-semibold">
              {startingPrice}
            </Text>
          </View>
          {/* box3 */}
          <View className="flex items-start justify-center m-1">
            <Text className="text-[8px] sm:text-[10px] md:text-xs text-gray-500">
              People Registered
            </Text>
            <Text className="text-[8px] sm:text-[10px] md:text-xs font-semibold">
              {peopleRegistered}
            </Text>
          </View>
        </View>

        <View className="flex-row flex-wrap my-1">
          <Text className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 m-1">
            {bedrooms} Bedrooms
          </Text>
          <Text className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 m-1">
            {bathrooms} Bath
          </Text>
          <Text className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 m-1">
            {sqft} Sqft
          </Text>
          <Text className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 m-1">
            {acres} Acre(s)
          </Text>
        </View>

        <View className="w-full items-end">
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-black px-4 py-2 rounded-none"
          >
            <Text className="text-white text-center text-xs">LEARN MORE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCard;
