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

export default function Group() {
  const router = useRouter();

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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Group Home</Text>
        <TouchableOpacity
          style={styles.topButtonContainer}
          onPress={() => alert("not implemented yet!")}
        >
          <Text style={styles.buttonText}>Members</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Group Check-ins</Text>
      <View style={styles.checkIn}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.backgroundPrimary,
    flex: 1,
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
  title: {
    fontSize: Theme.sizes.titleText,
    fontWeight: "600",
  },
  titleContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 25,
  },
  topButtonContainer: {
    backgroundColor: Theme.colors.buttonBlue,
    borderRadius: 8,
    width: windowWidth * 0.3,
    height: windowWidth * 0.08,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: Theme.sizes.bodyText,
    fontWeight: "500",
  },
  header: {
    fontSize: Theme.sizes.headerText,
    paddingHorizontal: 35,
    paddingBottom: 30,
  },
  checkIn: {
    flexDirection: "row",
  },
});
