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
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "expo-router";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function CreateAccount() {
  const [pronouns, setPronouns] = useState("");
  const [gender, setGender] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [nationality, setNationality] = useState("");

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.inputBox}
        placeholder="Pronouns"
        value={pronouns}
        onChangeText={setPronouns}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="Ethnicity"
        value={ethnicity}
        onChangeText={setEthnicity}
      />

      <TextInput
        style={styles.inputBox}
        placeholder="Nationality"
        value={nationality}
        onChangeText={setNationality}
      />

      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => router.back()} // Navigate on press
        >
          <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/tabs/groupHome")} // Navigate on press
        >
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
    flexDirection: 'row',
    justifyContent: 'space-around',
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
