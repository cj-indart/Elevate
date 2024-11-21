import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import theme from "@/assets/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

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

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <FontAwesomeIcon icon={faArrowRight} size={24} color="black" />
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
    backgroundColor: "#f0f0f0",
  },
  title: {
    marginTop: windowHeight * 0.1,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: windowHeight * 0.1,
  },
  inputBox: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.8,
    borderColor: "#a9a9a9",
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#e0e0e0",
  },
  buttonContainer: {
    paddingRight: windowWidth * 0.05,
    width: "100%",
    alignItems: "flex-end",
  },
  button: {
    marginTop: windowHeight * 0.1,
    width: windowWidth * 0.2,
    backgroundColor: theme.colors.buttonBlue,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
});
