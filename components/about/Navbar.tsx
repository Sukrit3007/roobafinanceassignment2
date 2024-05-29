import { View, Image, TouchableOpacity } from "react-native";
import React from "react";

import backbtn from "../../assets/icons/navbar/NavbarBackbtn.png";
import sharebtn from "../../assets/icons/navbar/NavbarSharebtn.png";
import savebtn from "../../assets/icons/navbar/NavbarSavebtn.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Navbar = () => {

  return (
    <SafeAreaView className="flex-row items-center justify-between p-4">
      <TouchableOpacity onPress={() => router.back()} className='m-1'>
        <Image source={backbtn} resizeMode="contain" className="w-8 h-8" />
      </TouchableOpacity>

      <View className="flex-row items-center justify-center">
        <TouchableOpacity  className='m-1'>
          <Image source={sharebtn} resizeMode="contain" className="w-8 h-8" />
        </TouchableOpacity>
        <TouchableOpacity  className='m-1'>
          <Image source={savebtn} resizeMode="contain" className="w-8 h-8" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;
