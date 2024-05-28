import { Link } from "expo-router";
import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";

import signin from "../assets/images/signin.png";
import SignInAppleButton from "../components/signin-applebutton";
import SignInButton from "../components/signin-button";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
          <Image
            source={signin}
            resizeMode="contain"
            className="w-64 mb-8 md:w-80 lg:w-96"
          />
        </View>
        <View className="w-full flex items-center px-4 pb-8 sm:px-6 md:px-8 lg:px-10">
          <SignInButton handlePress={() => router.push('/home')} />
          <SignInAppleButton handlePress={() => router.push('/home')} />
          <Text className="text-xs font-light w-[70%] text-center mt-4 md:text-sm lg:text-base">
            By creating an account, or signing in, you are agreeing to our Terms of Service and Privacy Policy.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
