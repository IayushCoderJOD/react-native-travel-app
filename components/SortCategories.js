import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { sortCategoryData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import tw from "twrnc";
import { theme } from "../theme";

export default function SortCategories() {
  const [activeSort, setActiveSort] = useState("Popular");
  return (
    <View
      style={tw`flex-row justify-around items-center mx-4 bg-neutral-100 rounded-full p-2 px-4 space-x-2`}
    >
      {sortCategoryData.map((sort, index) => {
        let isActive = sort == activeSort;
        // let activeButtonClass = isActive ? "bg-white shadow" : "";
        let activeButtonClass = isActive ? tw`bg-white shadow` : tw``;
        return (
          <TouchableOpacity
            onPress={() => setActiveSort(sort)}
            key={index}
            style={[tw`p-3 px-4 rounded-full`, activeButtonClass]}
          >
            <Text
              style={{
                ...tw`font-semibold`,
                fontSize: wp(4),
                color: isActive ? theme.text : "rgba(0,0,0,0.6)",
              }}
            >
              {sort}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
