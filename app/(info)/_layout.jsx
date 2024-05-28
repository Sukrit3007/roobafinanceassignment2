import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Slot, Stack, Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const InfoLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ECE7E7",
          tabBarInactiveTintColor: "#555555",
          tabBarStyle:{
            height:'auto'
          }
        }}
      >
        <Slot />
      </Tabs>
    </>
  );
};

export default InfoLayout;


