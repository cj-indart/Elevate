import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";

import { Link } from "expo-router";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Welcome() {
  return (
    // TODO, make Sign In and Create Account Centered... confusing with Link
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("@/assets/images/logo.png")}
        resizeMode="contain"
      />
      <View style={styles.topButtonContainer}>
        <Link href="/Login" style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Link>
      </View>
      <View style={styles.buttomButtonContainer}>
        <Link href="/createAccount" style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </Link>
      </View>
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
    alignSelf: "center",
    marginVertical: 20,
  },
  buttomButtonContainer: {
    backgroundColor: "#C0DFF0",
    padding: 15,
    borderRadius: 8,
    width: windowWidth * 0.8,
    alignSelf: "center",
  },
});
