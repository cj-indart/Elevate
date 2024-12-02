import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import Theme from "@/assets/theme";
import ProgressBar from "react-native-progress/Bar";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Create Account</Text>

      <Text style={styles.header}>Account Information</Text>

      <TextInput
        style={styles.inputBox}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.inputBox}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      {/* <ProgressBar
        progress={0.333}
        width={windowWidth * 0.6}
        style={styles.bar}
        // color={Theme.colors.backgroundSecodary}
        color="#A9A9A9"
      /> */}

      <View style={styles.buttonContainer}>
        {/* <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/onboarding/background")}
        >
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    padding: 20,
    backgroundColor: Theme.colors.backgroundPrimary,
  },
  back: {
    position: "absolute",
    top: 75,
    left: 20,
  },
  title: {
    marginTop: windowHeight * 0.15,
    fontSize: Theme.sizes.titleText,
    fontWeight: "bold",
  },
  header: {
    marginTop: windowHeight * 0.02,
    fontSize: Theme.sizes.headerText,
    fontWeight: "bold",
    marginBottom: windowHeight * 0.1,
  },
  inputBox: {
    fontSize: Theme.sizes.bodyText,
    height: windowHeight * 0.06,
    width: windowWidth * 0.8,
    borderColor: Theme.colors.border,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: Theme.colors.backgroundSecodary,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    bottom: windowHeight * 0.065,
    paddingHorizontal: windowWidth * 0.1,
  },
  button: {
    width: windowWidth * 0.18,
    height: windowHeight * 0.06,
    backgroundColor: Theme.colors.buttonBlue,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bar: {
    position: "absolute",
    bottom: windowHeight * 0.8,
  },
});
