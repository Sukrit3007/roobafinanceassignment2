import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import ParallaxScrollView from '@/components/ParallaxScrollView'

import image1 from '@/assets/images/main/image1.png'
import { ThemedView } from '@/components/ThemedView'
import { LinearGradient } from 'expo-linear-gradient'
import { Card } from 'react-native-paper'
import { ThemedText } from '@/components/ThemedText'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '@/components/about/Navbar'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'
import { SharedTransition } from 'react-native-reanimated';
import Details from '@/components/about/Details'
import OtherInfo from '@/components/about/OtherInfo'
import Timeline from '@/components/about/Timeline'
import Accordion3, { Accordion1, Accordion2 } from '@/components/about/Accordion'
import InfoButton from '@/components/about/InfoButton'


const About = () => {
  return (
    <ThemedView>
      <SafeAreaView className="relative">
        <ScrollView className="h-full">
          {/* IMAGE */}
          <Animated.View
            // sharedTransitionTag="sharedTag"
          >
            <ImageBackground source={image1} className="h-[35vh] w-full border">
              <LinearGradient
                colors={["#FFFFFF00", "#1E1E1E60", "#000000BF"]}
                locations={[0, 0.375, 0.75]}
                className="h-full"
              >
                <Card.Content className="h-full justify-end p-8 m-1">
                  <Text className='text-white text-2xl'>
                    JOR BAGH,
                  </Text>
                  <Text className='text-white text-2xl ml-4'>
                    New Delhi, India
                  </Text>
                </Card.Content>
              </LinearGradient>
            </ImageBackground>
          </Animated.View>

          {/* DETAILS */}
          <Animated.View entering={FadeInDown.duration(500)} className="shadow px-2">
            <Details />
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(500).delay(300)} className="shadow px-2">
            <OtherInfo />
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(500).delay(600)} className="shadow px-2">
            <Timeline />
          </Animated.View>

          {/* ACCORDION */}
          <Animated.View entering={FadeInDown.duration(500).delay(600)} className="px-2">
            <Accordion1 />
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(500).delay(600)} className="px-2">
            <Accordion2 />
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(500).delay(600)} className="px-2 pb-24">
            <Accordion3 />
          </Animated.View>


        </ScrollView>

        {/* Navbar */}
        <View className="absolute w-full top-0 inset-0">
          <Navbar />
        </View>

        {/* Bottom Button */}
        <View className="absolute w-full bottom-6 inset-0">
          <InfoButton />
        </View>
      </SafeAreaView>
    </ThemedView>
  )
}

export default About



