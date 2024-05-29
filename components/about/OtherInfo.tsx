import React from 'react';
import { View, Text } from 'react-native';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';

const OtherInfo = () => {
  return (
    <ThemedView className="w-full  shadow flex-row justify-between p-8 mt-2">
      <ThemedView className="flex-1 items-start mr-2 border-r">
        <ThemedText
          className="text-[10px] text-gray-400"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Other Information
        </ThemedText>
        <ThemedText className="text-md font-semibold mt-1">$ 3,058,654</ThemedText>
      </ThemedView>
      
      <ThemedView className="flex-1 items-start border-r border-gray-500 mx-2">
        <ThemedText
          className="text-[10px] text-gray-400"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Price per share
        </ThemedText>
        <ThemedText className="text-md font-semibold mt-1">$ 15,293</ThemedText>
      </ThemedView>

      <ThemedView className="flex-1 items-start ml-2">
        <ThemedText
          className="text-[10px] text-gray-400"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Available spots
        </ThemedText>
        <ThemedText className="text-md font-semibold mt-1">72</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default OtherInfo;
