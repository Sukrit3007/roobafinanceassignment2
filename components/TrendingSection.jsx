import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import { router } from "expo-router";



const data = [
  {
    id: 1,
    image: image1,
    title: "Jor Bagh",
    location: "New Delhi, DL, India",
    size: "2,900 Sqft · 0.13 Acre(s)",
    investmentInfo: "Fractional Investment Available",
    registeredUsers: "1,207 people registered",
  },
  {
    id: 2,
    image: image2,
    title: "Connaught Place",
    location: "New Delhi, DL, India",
    size: "1,500 Sqft · 0.10 Acre(s)",
    investmentInfo: "Fractional Investment Available",
    registeredUsers: "2,300 people registered",
  },
  // Add more items as needed
];

const TrendingSection = () => {
  return (
    <View className="">
      <View className="w-full h-fit py-6">
        <Text className="text-lg font-semibold">Trending Properties</Text>
        <Text className="text-xs font-light">
          Check out prime real estate shares that are being noticed
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TrendingCard item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TrendingSection;

function TrendingCard({ item }) {
  
  return (
    <TouchableOpacity
      onPress={()=>router.push('/info')}
    >
      <Card className="h-[30vh] w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] mr-4">
        <ImageBackground source={item.image} className="h-full opacity-90">
          <LinearGradient
            colors={["#FFFFFF00", "#1E1E1E60", "#000000BF"]}
            locations={[0, 0.375, 0.75]}
            className="h-full"
          >
            <Card.Content className="h-full justify-end p-4">
              <CardInfo item={item} />
              <CardButtons item={item} />
            </Card.Content>
          </LinearGradient>
        </ImageBackground>
      </Card>
    </TouchableOpacity>
  );
}

function CardButtons({ item }) {
  return (
    <View className="flex-row justify-between">
      {/* Button One */}
      <TouchableOpacity
        onPress={()=>router.push('/info')}
        activeOpacity={0.7}
        className="bg-[#EBE7D359] shadow rounded-none p-1 flex-row justify-center items-center flex-1 mr-1"
      >
        <MaterialIcons name="check-circle" size={16} color="#EBE7D3" />
        <Text className="text-[#EBE7D3] text-xs ml-1">
          {item.investmentInfo}
        </Text>
      </TouchableOpacity>

      {/* Button Two */}
      <TouchableOpacity
        onPress={()=>router.push('/info')}
        activeOpacity={0.7}
        className="bg-[#EBE7D3] shadow rounded-none p-1 flex-row justify-center items-center flex-1"
      >
        <FontAwesome6 name="arrow-right-from-bracket" size={16} color="#121212" />
        <Text className="text-[#121212] text-xs ml-1">
          {item.registeredUsers}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function CardInfo({ item }) {
  return (
    <View>
      <Text className="text-white text-lg md:text-xl font-semibold">
        {item.title}
      </Text>
      <Text className="text-white text-md md:text-lg font-light my-2">
        {item.location}
      </Text>
      <Text className="text-white text-xs md:text-sm font-normal mb-4">
        {item.size}
      </Text>
    </View>
  );
}
