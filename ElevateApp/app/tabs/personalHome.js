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
          <Entypo style={styles.cog} name="cog" size={36} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <View style={styles.headerRow}>
          <Text style={styles.header}>Upcoming Targets</Text>
          <TouchableOpacity
            style={styles.info}
            onPress={() => alert("not implemented yet!")}
          >
            <Entypo style={styles.icon} name="info" size={12} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("not implemented yet!")}
        >
          <Entypo style={styles.icon} name="target" size={20} color="black" />
          <Text style={styles.content}>Set New Target</Text>
        </TouchableOpacity>
        <View style={styles.content}>
          <Text>Placeholder - No targets set yet</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("not implemented yet!")}
        >
          <Text style={styles.content}>All Targets</Text>
        </TouchableOpacity>
      </View>
      <View marginVertical={windowWidth * 0.07}></View>
      <View style={styles.section}>
        <View style={styles.headerRow}>
          <Text style={styles.header}>Your Check-in</Text>
          <TouchableOpacity
            style={styles.info}
            onPress={() => alert("not implemented yet!")}
          >
            <Entypo style={styles.icon} name="info" size={12} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text>Placeholder - Check-in goes here</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("not implemented yet!")}
        >
          <Entypo style={styles.icon} name="pencil" size={20} color="black" />
          <Text style={styles.content}>Start Weekly Check-in</Text>
        </TouchableOpacity>
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
  headerRow: {
    flexDirection: "row",
  },
  title: {
    fontWeight: "600",
    fontSize: 32,
  },
  header: {
    marginVertical: windowWidth * 0.1,
    marginHorizontal: windowWidth * 0.03,
    fontSize: 24,
  },
  section: {
    marginHorizontal: windowWidth * 0.07,
  },
  button: {
    flexDirection: "row",
    backgroundColor: Theme.colors.buttonBlue,
    borderRadius: 8,
    width: windowWidth * 0.3,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: windowWidth * 0.03,
  },
  content: {
    marginVertical: windowWidth * 0.03,
    alignItems: "center",
  },
  info: {
    marginVertical: windowWidth * 0.1,
    marginHorizontal: windowWidth * 0.03,
    fontSize: 24,
    width: windowWidth * 0.1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 100,
  },
  icon: {
    marginHorizontal: 2,
  },
  chat: {},
});
