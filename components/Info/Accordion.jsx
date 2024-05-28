import * as React from "react";
import { View, Text, Image,TouchableOpacity,Modal, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { List } from "react-native-paper";

import accordion1icon from "../../assets/icons/accordion/accordion1icon.png";
import accordion1icon1 from "../../assets/icons/accordion/accordion1icon1.png";
import accordion1icon2 from "../../assets/icons/accordion/accordion1icon2.png";
import accordion2icon from "../../assets/icons/accordion/accordion2icon.png";
import accordion3icon from "../../assets/icons/accordion/accordion3icon.png";
import accordion3img from "../../assets/icons/accordion/accordion3img.png";

export function Accordion1() {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View className="w-full bg-white shadow flex items-start justify-start mt-2 px-4">
      <List.Section className="w-full">
        <List.Accordion
          title="Financing Options"
          titleStyle={{
            fontSize: 14,
          }}
          description="Options for both Owners and Shareholders"
          descriptionStyle={{
            fontSize: 10,
            color: "#12121259",
          }}
          className="bg-white"
          left={() => (
            <View className="flex justify-center mx-3">
              <Image
                source={accordion1icon}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </View>
          )}
        >
          <View className="w-full flex items-start justify-center p-2 ">
            {/* BOX */}
            <View className="border flex-row flex-wrap w-full">
              <View className="flex-1 p-2">
                <Image
                  source={accordion1icon1}
                  resizeMode="contain"
                  className="w-5 h-5 m-1"
                />
                <Text className="text-xs text-[#121212] m-1">
                  Become a shareholder
                </Text>
                <Text className="text-[10px] text-[#121212BF] m-1">
                  Own a share of this stunning growth-driven property.
                </Text>
                <Text className="text-[10px] text-[#121212BF] opacity-30 m-1">
                  1 Share (token) = $ 15,293
                </Text>
              </View>
              <View className="flex items-center justify-center p-2">
                <Text className="text-xs text-[#121212BF] opacity-30 m-1">
                  $ 3,058,654
                </Text>
                <Text className="text-xl">$ 15,293</Text>
              </View>
            </View>

            {/* OTHER INFO */}
            <View className="flex-row items-center justify-between my-3">
              <Image
                source={accordion1icon2}
                resizeMode="contain"
                className="w-5 h-5 m-1"
              />
              <View className=" w-full flex items-start justify-center mx-1 pr-6">
                <Text className="text-xs text-[#121212] ">
                  Become a shareholder
                </Text>
                <Text className="text-[10px] text-[#121212BF] opacity-75 ">
                  Allow our team of experts to tailor the ideal financing option
                  for you{" "}
                </Text>
              </View>
            </View>
          </View>
        </List.Accordion>
      </List.Section>
    </View>
  );
}

export function Accordion2() {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View className="w-full bg-white shadow-{10 10 10 10} flex items-start justify-start mt-2 px-2">
      <List.Section className="w-full">
        <List.Accordion
          title="Sotheby’s Financial Services"
          titleStyle={{
            fontSize: 14,
          }}
          description="Allow our team of experts to tailor the ideal financing option for you "
          descriptionStyle={{
            fontSize: 10,
            color: "#12121259",
          }}
          className="bg-white"
          left={() => (
            <View className="flex justify-center mx-4">
              <Image
                source={accordion2icon}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </View>
          )}
        ></List.Accordion>
      </List.Section>
    </View>
  );
}

export function Accordion3() {
  const [expanded, setExpanded] = React.useState(true);
  const [modalVisible, setModalVisible] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);
  const handleConfirmPress = () => setModalVisible(true);

  return (
    <View className="w-full bg-white shadow flex items-start justify-start mt-2 px-2">
      <List.Section className="w-full">
        <List.Accordion
          title="Financial Model"
          titleStyle={{
            fontSize: 14,
          }}
          description="Indicators for capital appreciation, monthly yield etc."
          descriptionStyle={{
            fontSize: 10,
            color: '#12121259',
          }}
          className="bg-white"
          left={() => (
            <View className="flex justify-center mx-4">
              <Image source={accordion3icon} resizeMode="contain" className="w-6 h-6" />
            </View>
          )}
        >
          <View className='w-full relative'>
            <Image source={accordion3img} resizeMode="contain" className="w-full" />
            <TouchableOpacity
              onPress={handleConfirmPress}
              activeOpacity={0.7}
              className="absolute bottom-12 right-0 bg-black border rounded-none min-h-[62px] flex-row justify-center items-center w-full"
            >
              <Text className="text-white tracking-widest font-light text-lg mx-3">
                CONFIRM SPOT
              </Text>
              <MaterialIcons name="arrow-right-alt" size={32} color="white" />
            </TouchableOpacity>
          </View>
        </List.Accordion>
      </List.Section>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className='h-full flex justify-center items-center mt-12'>
          <View className='relative w-3/4 m-5 bg-[#00172A] p-8 items-start justify-between'>
            <Text className='text-white text-3xl' >Join Us</Text>
            <Text className='text-white text-[10px] my-2' >
            Learn more about this property and gain access to a wide pool of financing options - ones that could flair up not just your passion, but even your portfolio. 
            </Text>
            <View className='w-full flex items-end'>
                <View className='max-w-[140px]'>
                    <TouchableOpacity
                    className='bg-[#EBE7D3] my-2 flex items-center' 
                    
                    >
                    <Text className='text-black text-xl font-light tracking-tighter mx-6 my-1' >Sign Up </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
              className='absolute top-4 right-4'
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Entypo name="cross" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
 
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Accordion3;

