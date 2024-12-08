import { useEffect, React } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import Theme from "@/assets/theme";
import LottieView from "lottie-react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Plane() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/tabs/groupHome");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Searching for your Crew!</Text>
      <LottieView
        style={styles.image}
        source={require("@/assets/images/dots.json")}
        autoPlay
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
    backgroundColor: "#EEF7FB",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    height: windowHeight * 0.4,
    aspectRatio: 1,
  },
  back: {
    position: "absolute",
    bottom: 10,
  },
});
