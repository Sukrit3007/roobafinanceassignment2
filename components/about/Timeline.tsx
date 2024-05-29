import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

const Timeline = () => {
  return (
    <ThemedView className="w-full  shadow p-8 mt-2">
      <ThemedText className="text-xs text-gray-400">Fund Raising Timeline</ThemedText>
      <ThemedView className="flex-row my-1 items-center">
        <AntDesign name="clockcircleo" size={16} color="black" />
        <ThemedText className="text-md mx-1">
          Ends in <ThemedText className="font-bold">12 Days</ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView className="w-full mt-1">
        <ProgressBar
          progress={0.6}
          color={useThemeColor({light:'#121212',dark:'#FFFF'},'background')}
          style={{ height: 4 }}
        />
      </ThemedView>
    </ThemedView>
  );
};

export default Timeline;
