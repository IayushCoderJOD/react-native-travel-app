import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { destinationData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function Destinations() {
  const navigation = useNavigation();
  return (
    <View style={tw`mx-4 flex-row justify-between flex-wrap`}>
      {destinationData.map((item, index) => {
        return (
          <DestinationCard navigation={navigation} item={item} key={index} />
        );
      })}
    </View>
  );
}

const DestinationCard = ({ item, navigation }) => {
  const [isFavourite, toggleFavourite] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Destination", { ...item })}
      style={{
        ...tw`flex justify-end relative p-4 py-6 mt-[8px] mb-5`,
        width: wp(44),
        height: wp(65),
      }}
    >
      <Image
        source={item.image}
        style={{
          ...tw`absolute`,
          width: wp(44),
          height: wp(65),
          borderRadius: 35,
        }}
      />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={{
          ...tw`absolute bottom-0`,
          width: wp(44),
          height: hp(15),
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />

      <TouchableOpacity
        onPress={() => toggleFavourite(!isFavourite)}
        style={{
          ...tw`absolute top-1 right-3 rounded-full p-3`,
          backgroundColor: "rgba(255,255,255,0.4)",
        }}
      >
        <HeartIcon size={wp(5)} color={isFavourite ? "red" : "white"} />
      </TouchableOpacity>

      <Text style={{ ...tw`text-white font-semibold`, fontSize: wp(4) }}>
        {item.title}
      </Text>
      <Text style={{ ...tw`text-white`, fontSize: wp(2.2) }}>
        {item.shortDescription}
      </Text>
    </TouchableOpacity>
  );
};
