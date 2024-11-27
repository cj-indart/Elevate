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
        <Text style={styles.title}>Personal Home</Text>
        <TouchableOpacity onPress={() => alert("not implemented yet!")}>
          <Entypo style={styles.chat} name="cog" size={36} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Upcoming Targets</Text>
        <View style={styles.content}>
          <Text>Placeholder - No targets set yet</Text>
        </View>
      </View>
      <View marginVertical={windowWidth * 0.07}></View>
      <View style={styles.section}>
        <Text style={styles.header}>Your Check-in</Text>
        <View style={styles.content}>
          <Text>Placeholder - Check-in goes here</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  topNav: {
    marginVertical: windowWidth * 0.1,
    marginHorizontal: windowWidth * 0.07,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 32,
  },
  header: {
    marginVertical: windowWidth * 0.1,
    marginHorizontal: windowWidth * 0.03,
    fontFamily: "Roboto",
    fontSize: 24,
  },
  section: {
    marginHorizontal: windowWidth * 0.07,
  },
  content: {
    marginVertical: windowWidth * 0.03,
    alignItems: "center",
  },
  chat: {},
});
