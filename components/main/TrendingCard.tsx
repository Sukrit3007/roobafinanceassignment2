import { View, Text, Pressable, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'

import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import Animated, { FadeInUp } from 'react-native-reanimated'

const TrendingCard = ({ item }: any) => {
  return (
    <Pressable
      onPress={() => router.push('/about')}
    >
      <Card className="h-[30vh] w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] mr-4 rounded-none">
        <Animated.View exiting={FadeInUp.duration(400).delay(400)}>
          <ImageBackground source={item.image} className="h-full opacity-90">
            <LinearGradient
              colors={["#FFFFFF00", "#1E1E1E60", "#000000BF"]}
              locations={[0, 0.375, 0.75]}
              className="h-full"
            >
              <Card.Content className="h-full justify-end p-4">
                <CardInfo item={item} />
                <CardButtons item={item} />
              </Card.Content>
            </LinearGradient>
          </ImageBackground>
        </Animated.View>
      </Card>
    </Pressable>
  )
}

export default TrendingCard


function CardInfo({ item }: any) {
  return (
    <View>
      <Text className="text-white text-lg md:text-xl font-semibold">
        {item.title}
      </Text>
      <Text className="text-white text-md md:text-lg font-light my-2">
        {item.location}
      </Text>
      <Text className="text-white text-xs md:text-sm font-normal mb-4">
        {item.size}
      </Text>
    </View>
  );
}


function CardButtons({ item }: any) {
  return (
    <View className="flex-row justify-between">
      {/* Button One */}
      <TouchableOpacity
        onPress={() => router.push('/about')}
        activeOpacity={0.7}
        className="bg-[#EBE7D359] shadow rounded-none p-1 flex-row justify-center items-center flex-1 mr-1"
      >
        <MaterialIcons name="check-circle" size={16} color="#EBE7D3" />
        <Text className="text-[#EBE7D3] text-xs ml-1">
          {item.investmentInfo}
        </Text>
      </TouchableOpacity>

      {/* Button Two */}
      <TouchableOpacity
        onPress={() => router.push('/about')}
        activeOpacity={0.7}
        className="bg-[#EBE7D3] shadow rounded-none p-1 flex-row justify-center items-center flex-1"
      >
        <FontAwesome6 name="arrow-right-from-bracket" size={16} color="#121212" />
        <Text className="text-[#121212] text-xs ml-1">
          {item.registeredUsers}
        </Text>
      </TouchableOpacity>
    </View>
  );
}