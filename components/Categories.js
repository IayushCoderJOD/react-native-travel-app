import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import React from "react";
import { theme } from "../theme";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { categoriesData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function Categories() {
  return (
    <View
      style={{
        marginTop: "20",
      }}
    >
      <View style={tw`mx-5 flex-row justify-between items-center`}>
        <Text
          style={{
            ...tw`font-semibold text-neutral-700`,
            fontSize: widthPercentageToDP(4),
          }}
        >
          Categories
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: widthPercentageToDP(4), color: theme.text }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        style={tw`mr-[16px]`}
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((cat, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={tw`flex items-center m-[10px] ml-0`}
            >
              <Image
                source={cat.image}
                style={{ ...tw`rounded-3xl`, width: wp(20), height: wp(19) }}
              />
              <Text
                style={{ ...tw`text-neutral-700 font-medium`, fontSize: wp(3) }}
              >
                {cat.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
