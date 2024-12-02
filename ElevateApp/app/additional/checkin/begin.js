import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import Theme from "@/assets/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import Checkbox from "expo-checkbox";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Begin() {
  const [major, setMajor] = useState("");
  const [isSelected, setSelection] = useState(false);

  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Weekly Check-in</Text>
      <View>
        <Text style={styles.subHeaderText}>Let's begin...</Text>
      </View>
      <View>
        <Text style={styles.questionText}>What did you do well last week?</Text>
      </View>

      <TextInput
        style={styles.inputBox}
        placeholder="Major"
        placeholderTextColor={Theme.colors.placeholderText}
        value={major}
        onChangeText={setMajor}
      />
      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#4630EB" : undefined}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => router.push("/onboarding/plane")}
      >
        <Text style={styles.buttonText}>Find Group!</Text>
      </TouchableOpacity>
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
  subHeaderText: {
    marginTop: windowHeight * 0.05,
    fontSize: Theme.sizes.headerText,
    fontWeight: "500",
  },
  questionText: {
    marginTop: windowHeight * 0.05,
    fontSize: Theme.sizes.textMedium,
  },
  inputBox: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.8,
    borderColor: Theme.colors.border,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: Theme.colors.backgroundSecodary,
    fontSize: Theme.sizes.bodyText,
  },
  dropdownTrigger: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.8,
    borderColor: Theme.colors.border,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: Theme.colors.backgroundSecodary,
    justifyContent: "center",
  },
  dropdownTriggerText: {
    fontSize: 16,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 200,
    backgroundColor: Theme.colors.buttonBlue,
    padding: 15,
    borderRadius: 8,
    width: windowWidth * 0.8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: Theme.sizes.headerText,
    fontWeight: "500",
    justifyContent: "center",
    textAlign: "center",
  },
});
