import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

import { useRouter } from "expo-router";

import Theme from "@/assets/theme";
import { SafeAreaView } from "react-native-safe-area-context";

import Entypo from "@expo/vector-icons/Entypo";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Group() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topNav}>
        <Image
          style={styles.logo}
          source={require("@/assets/images/logo.png")}
        />
        <Entypo style={styles.chat} name="chat" size={30} color="black" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'grey',
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },
  chat: {
    marginHorizontal: 10,
  },
  logo: {
    marginHorizontal: 10,
    width: windowWidth * 0.3,
    height: windowHeight * 0.07,
  },
});
