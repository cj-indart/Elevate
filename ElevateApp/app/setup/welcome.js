import { useState } from "react";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Welcome() {
  const router = useRouter();

  return (
    // TODO, make Sign In and Create Account Centered... confusing with Link
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("@/assets/images/logo.png")}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={styles.topButtonContainer}
        onPress={() => router.push("/setup/login")} // Navigate on press
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomButtonContainer}
        onPress={() => router.push("/setup/createAccount")} // Navigate on press
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    marginTop: windowHeight * 0.2,
    width: windowWidth * 0.9,
    height: windowHeight * 0.2,
  },
  welcomeText: {
    marginTop: windowHeight * 0.05,
    fontSize: 30,
    fontWeight: "500",
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "500",
  },
  topButtonContainer: {
    marginTop: windowHeight * 0.1,
    backgroundColor: "#C0DFF0",
    padding: 15,
    borderRadius: 8,
    width: windowWidth * 0.8,
    alignItems: "center",
    marginVertical: 20,
  },
  bottomButtonContainer: {
    backgroundColor: "#C0DFF0",
    padding: 15,
    borderRadius: 8,
    width: windowWidth * 0.8,
    alignItems: "center",
  },
});
