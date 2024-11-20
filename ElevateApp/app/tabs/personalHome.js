import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

import { useRouter } from "expo-router";

import Theme from "@/assets/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Personal() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/images/logo.png")} />
      <Text style={styles.text}>Implement this personal page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  logo: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.2,
  },
});
