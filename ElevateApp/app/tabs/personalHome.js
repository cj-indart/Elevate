import { StyleSheet, Text, View } from "react-native";

import { useRouter } from "expo-router";

import Theme from "@/assets/theme";
import Feed from "@/components/Feed";

export default function Personal() {
  return (
    <View stlye={styles.container}>
      <Text style={styles.textBox}>Implement this personal page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  textBox: {
    padding: 40,
    backgroundColor: "white",
  },
});
