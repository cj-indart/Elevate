import { useState } from "react";
import {
  Text,
  Alert,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import db from "@/database/db";
import { useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Theme from "@/assets/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signInWithEmail = async () => {
    setLoading(true);
    try {
      const { data, error } = await db.auth.signInWithPassword({
        email: email,
        password: password,
        options: {
          shouldCreateUser: false,
        },
      });

      if (error) {
        Alert.alert(error.message);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const isSignInDisabled =
    loading || email.length === 0 || password.length === 0;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color={"black"} />
      </TouchableOpacity>
      <Text style={styles.title}>Sign In</Text>

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
  title: {
    marginTop: windowHeight * 0.15,
    marginBottom: windowHeight * 0.15,
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
    justifyContent: "space-between",
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
    bottom: windowHeight * 0.87,
  },
  backButton: {
    position: "absolute",
    top: 75, // Adjust for platform-specific offsets if needed
    left: 20,
    zIndex: 1,
    color: "black",
  },
});
