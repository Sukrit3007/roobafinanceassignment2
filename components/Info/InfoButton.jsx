import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import { FontAwesome5 } from '@expo/vector-icons';

const InfoButton = () => {
  return (
    <View className='p-2'>
      <TouchableOpacity
        activeOpacity={0.7}
        className="bg-[#00172A] border rounded-none min-h-[62px] flex-row justify-between items-center w-full px-6"
      >
        <UserAvatar size={32} name="Akash Puri" />
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
