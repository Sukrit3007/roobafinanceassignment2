import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import Animated, { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { useThemeColor } from '@/hooks/useThemeColor';

const screenWidth = Dimensions.get('window').width;

const FeaturedCard = ({
    image,
    location,
    totalValue,
    startingPrice,
    peopleRegistered,
    bedrooms,
    bathrooms,
    sqft,
    acres,
    isSelected,
    onPress
}: any) => {
    const isLargeScreen = screenWidth > 768; // Adjust based on your breakpoint

    const animatedCardStyle = useAnimatedStyle(() => ({
        borderWidth: withSpring(isSelected ? 0.75 : 0),
        borderColor: 'black',
    }));

    const animatedButtonStyle = useAnimatedStyle(() => ({
        opacity: withTiming(isSelected ? 1 : 0, { duration: 200 }),
        transform: [
            { scale: withSpring(isSelected ? 1 : 0.8) }
        ]
    }));

    return (
        <Animated.View style={animatedCardStyle}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    padding: 16,
                    marginBottom: 16,
                }}
            >
                <Image
                    source={image}
                    resizeMode="cover"
                    style={{
                        backgroundColor: 'white',
                        width: screenWidth * 0.3,
                        height: 128,
                        borderRadius: 0,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                    }}
                />

                <ThemedView style={{ flex: 1, marginLeft: 16, justifyContent: 'space-between' }}>
                    <ThemedView style={{ width: '100%' }}>
                        <ThemedText
                            style={{
                                fontWeight: 'bold',
                                fontSize: isLargeScreen ? 18 : 14,
                                lineHeight: isLargeScreen ? 24 : 18,
                            }}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {location}
                        </ThemedText>
                    </ThemedView>

                    <ThemedView style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <ThemedView style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                            <ThemedText style={{ fontSize: isLargeScreen ? 12 : 8, opacity: 0.35 }}>
                                Total Value
                            </ThemedText>
                            <ThemedText style={{ fontSize: isLargeScreen ? 12 : 8, fontWeight: '600' }}>
                                {totalValue}
                            </ThemedText>
                        </ThemedView>
                        <ThemedView style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                            <ThemedText style={{ fontSize: isLargeScreen ? 12 : 8, opacity: 0.35 }}>
                                Starting at
                            </ThemedText>
                            <ThemedText style={{ fontSize: isLargeScreen ? 12 : 8, fontWeight: '600' }}>
                                {startingPrice}
                            </ThemedText>
                        </ThemedView>
                        <ThemedView style={{ alignItems: 'flex-start', justifyContent: 'center', marginHorizontal: 4 }}>
                            <ThemedText style={{ fontSize: isLargeScreen ? 12 : 8, opacity: 0.35 }}>
                                People Registered
                            </ThemedText>
                            <ThemedText style={{ fontSize: isLargeScreen ? 12 : 8, fontWeight: '600' }}>
                                {peopleRegistered}
                            </ThemedText>
                        </ThemedView>
                    </ThemedView>

                    <ThemedView style={{ flexDirection: 'row', flexWrap: 'nowrap', marginVertical: 4, overflow: 'hidden' }}>
                        <ThemedText
                            style={{ fontSize: isLargeScreen ? 12 : 8, color: 'gray', marginHorizontal: 4 }}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {bedrooms} Bedrooms
                        </ThemedText>
                        <ThemedText
                            style={{ fontSize: isLargeScreen ? 12 : 8, color: 'gray', marginHorizontal: 4 }}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {bathrooms} Bath
                        </ThemedText>
                        <ThemedText
                            style={{ fontSize: isLargeScreen ? 12 : 8, color: 'gray', marginHorizontal: 4 }}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {sqft} Sqft
                        </ThemedText>
                        <ThemedText
                            style={{ fontSize: isLargeScreen ? 12 : 8, color: 'gray', marginHorizontal: 4 }}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {acres} Acre(s)
                        </ThemedText>
                    </ThemedView>

                    {isSelected && (
                        <Animated.View style={{ width: '100%', alignItems: 'flex-end' }}>
                            <ThemedView lightColor='#121212' darkColor='#FFFF'>
                                <Animated.View style={[{
                                    paddingHorizontal: 16,
                                    paddingVertical: 8,
                                    borderRadius: 0,
                                }, animatedButtonStyle]}>
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <ThemedText lightColor='#FFFF' darkColor='#121212' style={{ textAlign: 'center', fontSize: isLargeScreen ? 14 : 10 }}>
                                            LEARN MORE
                                        </ThemedText>
                                    </TouchableOpacity>
                                </Animated.View>
                            </ThemedView>
                        </Animated.View>
                    )}
                </ThemedView>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default FeaturedCard;
