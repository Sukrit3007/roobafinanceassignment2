import {
  View,
  ImageBackground,
  ScrollView,
  Text,
} from "react-native";
import { Card } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import mainimage from "../../assets/images/featureimg1.png";
import Details from "../../components/Info/Details";
import OtherInfo from "../../components/Info/OtherInfo";
import Timeline from "../../components/Info/Timeline";
import { Accordion1, Accordion2, Accordion3 } from "../../components/Info/Accordion";
import InfoButton from "../../components/Info/InfoButton";
import Navbar from "../../components/Info/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";


const Info = () => {
  return (
    <SafeAreaView className="relative">
      <ScrollView className="h-full">
        {/* IMAGE */}
        <ImageBackground source={mainimage} className="h-[35vh] w-full border">
          <LinearGradient
            colors={["#FFFFFF00", "#1E1E1E60", "#000000BF"]}
            locations={[0, 0.375, 0.75]}
            className="h-full"
          >
            <Card.Content className="h-full justify-end p-8 m-1">
              <Text className='text-white text-2xl'>
                JOR BAGH,
              </Text>
              <Text className='text-white text-2xl ml-4'>
                New Delhi, India
              </Text>
            </Card.Content>
          </LinearGradient>
        </ImageBackground>

        {/* DETAILS */}
        <View className="px-2 pb-24">
          <Details />
          <OtherInfo />
          <Timeline />
          <Accordion1 />
          <Accordion2 />
          <Accordion3 />
        </View>
      </ScrollView>

      {/* Navbar */}
      <View className="absolute w-full top-0 inset-0">
        <Navbar/>
      </View>

      {/* Bottom Button */}
      <View className="absolute w-full bottom-0 inset-0">
        <InfoButton />
      </View>
    </SafeAreaView>
  );
};

export default Info;
