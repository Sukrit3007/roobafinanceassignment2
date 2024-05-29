import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';

const InfoButton = () => {
  return (
    <View className='p-2'>
      <TouchableOpacity
        activeOpacity={0.7}
        className="bg-[#00172A] border rounded-none min-h-[62px] flex-row justify-between items-center w-full px-6"
      >
        <Avatar size={32} rounded source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        }} />
        <View>
          <Text className="text-white font-semibold text-md">
            Akash Puri
          </Text>
          <Text className="text-white font-semibold text-[8px] flex flex-wrap ">
            Seek guidance and an expert opinion from our specialists.
          </Text>
        </View>
        <FontAwesome5 name="long-arrow-alt-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default InfoButton;
