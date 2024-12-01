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

import Theme from "@/assets/theme";

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
        onPress={() => router.push("/setup/login")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomButtonContainer}
        onPress={() => router.push("/onboarding/createAccount")}
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
    backgroundColor: Theme.colors.backgroundPrimary,
  },
  logo: {
    marginTop: windowHeight * 0.2,
    width: windowWidth * 0.9,
    height: windowHeight * 0.2,
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    fontSize: Theme.sizes.headerText,
    fontWeight: "500",
    justifyContent: "center",
    textAlign: "center",
  },
  topButtonContainer: {
    marginTop: windowHeight * 0.1,
    backgroundColor: Theme.colors.buttonBlue,
    padding: 15,
    borderRadius: 8,
    width: windowWidth * 0.8,
    alignItems: "center",
    marginVertical: 20,
    alignSelf: "center",
  },
  bottomButtonContainer: {
    backgroundColor: Theme.colors.buttonBlue,
    padding: 15,
    borderRadius: 8,
    width: windowWidth * 0.8,
    alignItems: "center",
    alignSelf: "center",
  },
});
