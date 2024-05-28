import React from 'react';
import { View, Text } from 'react-native';

const OtherInfo = () => {
  return (
    <View className="w-full bg-white shadow-{10 10 10 10} flex-row items-center justify-between p-8 mt-2">
      <View className="flex items-start justify-center pr-4 ">
        <Text className="text-xs text-[#12121273]">Other Information</Text>
        <Text className="text-[14px] font-semibold mt-1">$ 3,058,654</Text>
      </View>
      <View className="flex items-start justify-center px-4 border-x-[1px]">
        <Text className="text-xs text-[#12121273]">Price per share</Text>
        <Text className="text-[14px] font-semibold mt-1">$ 15,293</Text>
      </View>
      <View className="flex items-start justify-center px-4 ">
        <Text className="text-xs text-[#12121273]">Available spots</Text>
        <Text className="text-[14px] font-semibold mt-1">72</Text>
      </View>
    </View>
  );
};

export default OtherInfo;
