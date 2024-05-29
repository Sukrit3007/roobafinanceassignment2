import { View, Text, Image, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import SigninLogo from '@/assets/images/signin.png'
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView'
import { useThemeColor } from '@/hooks/useThemeColor'
import { ThemedText } from '@/components/ThemedText'

const index = () => {
    return (
        <ThemedView className="flex-1">
            <ThemedView className="flex-1 items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
                <Image
                    source={SigninLogo}
                    resizeMode="contain"
                    tintColor={useThemeColor({ light: '#121212', dark: '#FFFFFF' }, 'tint')}
                    className="w-64 mb-8 md:w-80 lg:w-96"
                />
            </ThemedView>
            <ThemedView className="w-full flex items-center px-4 pb-8 sm:px-6 md:px-8 lg:px-10">
                <SignInButton handlePress={() => router.push('/main')} />
                <SignInAppleButton handlePress={() => router.push('/main')} />
                <ThemedText className="text-xs font-light w-[70%] text-center mt-4 md:text-sm lg:text-base">
                    By creating an account, or signing in, you are agreeing to our Terms of Service and Privacy Policy.
                </ThemedText>
            </ThemedView>
        </ThemedView>

    )
}

export default index


function SignInButton({ handlePress }: any) {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.8}
            className="bg-[#00172A] rounded-none min-h-[62px] justify-center items-center w-[60%] m-2 md:w-[50%] lg:w-[40%] xl:w-[30%]"
        >
            <ThemedText lightColor='#FFFF' className="font-semibold text-md">
                Sign in with Phone Number
            </ThemedText>
        </TouchableOpacity>
    )
}

function SignInAppleButton({ handlePress }: any) {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className=" border rounded-none min-h-[62px] flex-row justify-center items-center w-[60%] m-2 md:w-[50%] lg:w-[40%] xl:w-[30%]"
        >
            <ThemedView className='mr-2'>
                <MaterialIcons name="apple" size={24} color={useThemeColor({ light: '#121212', dark: '#FFFFFF' }, 'icon')} />
            </ThemedView>
            <ThemedText className=" font-semibold text-md">
                Sign in with Apple ID
            </ThemedText>
        </TouchableOpacity>
    )
}