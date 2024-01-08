import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  TextInput,
} from "react-native";
import React from "react";
import tw from "twrnc";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import SortCategories from "../components/SortCategories";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView showsVerticalScrollIndicator={false} style={tw`mb-6`}>
        <View style={tw`mx-5 flex-row justify-between items-center mb-10`}>
          <Text style={{ ...tw`font-bold text-neutral-700`, fontSize: wp(7) }}>
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/avatar.png")}
              style={{ height: wp(12), width: wp(12) }}
            />
          </TouchableOpacity>
        </View>
        {/* search bar view */}
        <View style={tw`mx-5 mb-4`}>
          <View
            style={tw`flex-row items-center bg-neutral-100 rounded-full p-4 pl-6`}
          >
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder="Search destination"
              placeholderTextColor={"gray"}
              style={tw`flex-1 text-base mb-1 pl-1 tracking-wider`}
            />
          </View>
        </View>
        <View style={tw`mb-4`}>
          <Categories />
        </View>

        {/* sort categories for the destination */}
        <View style={tw`mb-4`}>
          <SortCategories />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
