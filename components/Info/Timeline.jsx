import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';

const Timeline = () => {
  return (
    <View className="w-full bg-white shadow-{10 10 10 10} flex items-start justify-start p-8 mt-2">
      <Text className="text-xs text-[#12121273]">Fund Raising Timeline</Text>
      <View className="flex-row my-1">
        <AntDesign name="clockcircleo" size={16} color="black" />
        <Text className="text-md mx-1">
          Ends in <Text className="font-bold">12 Days</Text>
        </Text>
      </View>
      <View className="border w-full mt-1">
        <ProgressBar
          progress={0.6}
          color={"#121212"}
          animatedValue={0.6}
          className="w-full h-2"
        />
      </View>
    </View>
  );
};

export default Timeline;
