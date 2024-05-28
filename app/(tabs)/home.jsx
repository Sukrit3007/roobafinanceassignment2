import { View, Text, Image,FlatList, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from '../../assets/images/logo.png'
import TrendingSection from "../../components/TrendingSection";
import FeaturedProperties from "../../components/FeaturedProperties";

const Home = () => {
  return (
    <SafeAreaView>
      <View className='w-full flex items-start justify-between'> 
        <Header/>
        <ScrollView className='w-full h-full px-6'>
            <TrendingSection/>  
            <FeaturedProperties/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

function Header() {
  return (
    <View  className='w-full border-b flex-row items-center justify-start'>
      <Image source={logo} resizeMode="contain" className="w-[40vw] m-4" />
    </View>
  );
}




