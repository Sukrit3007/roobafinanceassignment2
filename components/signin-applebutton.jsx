import { TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import applelogo from "../assets/images/applelogo.png";

const SignInAppleButton = ({ handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className="bg-white border rounded-none min-h-[62px] flex-row justify-center items-center w-[60%] m-2 md:w-[50%] lg:w-[40%] xl:w-[30%]"
    >
      <Image
        source={applelogo}
        resizeMode="contain"
        className="w-8 h-8 mr-2"
      />
      <Text className="text-black font-semibold text-md">
        Sign in with Apple ID
      </Text>
    </TouchableOpacity>
  );
};

export default SignInAppleButton;
