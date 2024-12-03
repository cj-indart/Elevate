import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { useRouter } from "expo-router";

import Theme from "@/assets/theme";
import { SafeAreaView } from "react-native-safe-area-context";

import Entypo from "@expo/vector-icons/Entypo";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Personal() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("@/assets/images/clouds1.png")}
      style={styles.backgroundImage}
    >
      <SafeAreaView>
        <View style={styles.topNav}>
          <Text style={styles.title}>Personal Home</Text>
          <TouchableOpacity onPress={() => alert("not implemented yet!")}>
            <Entypo style={styles.cog} name="cog" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.targetsNav}>
          <View style={styles.titleAndButton}>
            <Text style={styles.header}>Upcoming Targets</Text>
            <View style={styles.infoCircle}>
              <TouchableOpacity
                style={styles.info}
                onPress={() => alert("not implemented yet!")}
              >
                <Entypo
                  style={styles.icon}
                  name="info"
                  size={12}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.titleAndButton}
              onPress={() => router.push("/additional/target/allTargets")}
            >
              <Text>See All</Text>
              <Ionicons name="chevron-forward" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.targets}>
          <Text>No Targets Yet!</Text>
        </View>
        <View style={styles.targetsNav}>
          <View style={styles.titleAndButton}>
            <Text style={styles.header}>Your Check-in</Text>
            <View style={styles.infoCircle}>
              <TouchableOpacity
                style={styles.info}
                onPress={() => alert("not implemented yet!")}
              >
                <Entypo
                  style={styles.icon}
                  name="info"
                  size={12}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.checkIn}>
          <TouchableOpacity
            onPress={() => router.push("/additional/checkin/begin")}
          >
            <View style={styles.button}>
              <Entypo name="pencil" size={20} color="black" />
              <Text style={styles.content}>Start Weekly Check-in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    resizeMode: "cover",
  },
  button: {
    flexDirection: "row",
    backgroundColor: Theme.colors.buttonWhite,
    borderRadius: 8,
    width: windowWidth * 0.5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: windowWidth * 0.03,
  },
  content: {
    flexDirection: "column",
  },
  titleAndButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  topNav: {
    marginVertical: windowWidth * 0.1,
    marginHorizontal: windowWidth * 0.07,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 20,
  },
  title: {
    fontSize: Theme.sizes.titleText,
    fontWeight: "600",
  },
  targetsNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: 10
  },
  infoCircle: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 20,
    aspectRatio: 1,
  },
  targets: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: windowHeight * 0.4,
    // backgroundColor: "blue",
  },
  checkIn: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: windowHeight * 0.25,
    // backgroundColor: 'blue',
  },
  header: {
    fontSize: Theme.sizes.headerText,
    paddingLeft: 35,
    paddingRight: 10,
  },
});
