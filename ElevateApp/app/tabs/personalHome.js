import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";

import Theme from "@/assets/theme";
import { SafeAreaView } from "react-native-safe-area-context";

import Entypo from "@expo/vector-icons/Entypo";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Personal() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topNav}>
        <Image
          style={styles.logo}
          source={require("@/assets/images/logo.png")}
        />
        <TouchableOpacity onPress={() => alert("not implemented yet!")}>
          <Entypo style={styles.chat} name="chat" size={30} color="black" />
        </TouchableOpacity>
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
    alignItems: "center",
  },
  logo: {
    marginHorizontal: 15,
    width: windowWidth * 0.3,
    height: windowHeight * 0.07,
  },
  chat: {
    marginHorizontal: 15,
  },
});
