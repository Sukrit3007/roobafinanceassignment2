import { View, Text, Pressable, Image, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';

import TrendingCard from '@/components/main/TrendingCard';

import logo from '@/assets/images/logo.png';

import FeaturedCard from '@/components/main/FeaturedCard';
import { data } from '@/data/data';
import { properties } from '@/data/properties';

const Main = () => {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);

    return (
        <SafeAreaView>
            {/* BRANDING */}
            <ThemedView className='w-full border-b flex-row items-center justify-start'>
                <Image source={logo} resizeMode="contain" tintColor={useThemeColor({ light: '#121212', dark: '#FFFFFF' }, 'tint')} className='w-[40vw] m-4'/>
            </ThemedView>

            {/* UI */}
            <ThemedView>
                <ScrollView>
                    <ThemedView style={{ paddingLeft: 16 }}>
                        {/* HEADING */}
                        <ThemedView style={{ width: '100%', paddingVertical: 24 }}>
                            <ThemedText style={{ fontSize: 18, fontWeight: '600' }}>Trending Properties</ThemedText>
                            <ThemedText style={{ fontSize: 12, fontWeight: '300' }}>
                                Check out prime real estate shares that are being noticed
                            </ThemedText>
                        </ThemedView>

                        {/* HORIZONTAL LIST */}
                        <Animated.FlatList
                            // sharedTransitionTag="sharedTag"
                            data={data}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => <TrendingCard item={item} />}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </ThemedView>

                    <ThemedView style={{ padding: 16, paddingTop: 32, marginBottom: 144 }}>
                        <ThemedText>Featured Properties</ThemedText>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {properties.map((item) => (
                                <Animated.View key={item.id} entering={FadeInDown.duration(400).delay(500)}>
                                    <FeaturedCard
                                        image={item.image}
                                        location={item.location}
                                        totalValue={item.totalValue}
                                        startingPrice={item.startingPrice}
                                        peopleRegistered={item.peopleRegistered}
                                        bedrooms={item.bedrooms}
                                        bathrooms={item.bathrooms}
                                        sqft={item.sqft}
                                        acres={item.acres}
                                        isSelected={selectedCard === item.id}
                                        onPress={() => setSelectedCard(item.id)}
                                    />
                                </Animated.View>
                            ))}
                        </ScrollView>
                    </ThemedView>
                </ScrollView>
            </ThemedView>
            <Pressable onPress={() => router.back()}></Pressable>
        </SafeAreaView>
    );
};

export default Main;
