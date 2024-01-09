import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronLeftIcon,
  ClockIcon,
  HeartIcon,
  MapPinIcon,
  SunIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { theme } from "../theme";

const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-10";

export default function DestinationScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);

  return (
    <View style={tw`bg-white flex-1`}>
      <Image source={item.image} style={{ width: wp(100), height: hp(55) }} />
      <StatusBar style={"light"} />

      <SafeAreaView
        style={tw`flex-row justify-between items-center w-full absolute ${topMargin}`}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            ...tw`p-2 rounded-full ml-4`,
            backgroundColor: "rgba(255,255,255,0.5)",
          }}
        >
          <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleFavourite(!isFavourite)}
          style={{
            ...tw`p-2 rounded-full mr-4`,
            backgroundColor: "rgba(255,255,255,0.5)",
          }}
        >
          <HeartIcon
            size={wp(7)}
            strokeWidth={4}
            color={isFavourite ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <View
        style={{
          ...tw`px-5 flex flex-1 justify-between bg-white pt-8 -mt-14`,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false} style={tw`space-y-5`}>
          <View style={tw`flex-row justify-between items-start`}>
            <Text
              style={{
                ...tw`font-bold flex-1 text-neutral-700`,
                fontSize: wp(7),
              }}
            >
              {item?.title}
            </Text>
            <Text
              style={{ fontSize: wp(7), color: theme.text, fontWeight: "600" }}
            >
              $ {item?.price}
            </Text>
          </View>
          <Text
            style={{
              ...tw`font-normal text-md mt-6 `,
              color: "black",
              letterSpacing: 0.5,
              lineHeight: 22,
            }}
          >
            {item?.longDescription}
          </Text>
          <View style={tw`flex-row justify-between mx-1 mt-20`}>
            <View style={tw`flex-row space-x-2 items-start`}>
              <ClockIcon size={wp(7)} color="skyblue" />
              <View style={tw`flex space-y-2`}>
                <Text
                  style={{
                    fontSize: wp(4.5),
                    fontWeight: "bold",
                    color: theme.text,
                  }}
                >
                  {item.duration}
                </Text>
                <Text style={tw`text-neutral-600 tracking-wide`}>Duration</Text>
              </View>
            </View>
            <View style={tw`flex-row space-x-2 items-start`}>
              <MapPinIcon size={wp(7)} color="#f87171" />
              <View style={tw`flex space-y-2`}>
                <Text
                  style={{
                    fontSize: wp(4.5),
                    fontWeight: "bold",
                    color: theme.text,
                  }}
                >
                  {item.distance}
                </Text>
                <Text style={tw`text-neutral-600 tracking-wide`}>Distance</Text>
              </View>
            </View>
            <View style={tw`flex-row space-x-2 items-start`}>
              <SunIcon size={wp(7)} color="orange" />
              <View style={tw`flex space-y-2`}>
                <Text
                  style={{
                    fontSize: wp(4.5),
                    fontWeight: "bold",
                    color: theme.text,
                  }}
                >
                  {item.weather}
                </Text>
                <Text style={tw`text-neutral-600 tracking-wide`}>Sunny</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            ...tw`mb-6 mx-auto flex justify-center items-center rounded-full bg-${theme.bg(
              0.8
            )}`,
            height: wp(15),
            width: wp(50),
          }}
        >
          <Text style={{ ...tw`text-white font-bold`, fontSize: wp(5.5) }}>
            Book now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
