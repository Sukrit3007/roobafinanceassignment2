import { TouchableOpacity, Text } from "react-native";
import React from "react";

const SignInButton = ({ handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      className="bg-[#00172A] rounded-none min-h-[62px] justify-center items-center w-[60%] m-2 md:w-[50%] lg:w-[40%] xl:w-[30%]"
    >
      <Text className="text-white font-semibold text-md">
        Sign in with Phone Number
      </Text>
    </TouchableOpacity>
  );
};

export default SignInButton;
