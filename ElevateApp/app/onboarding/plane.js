import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import Theme from "@/assets/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "react-native-progress/Bar";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Plane() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/tabs/groupHome");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Matching you to a group!</Text>
      <Image
        style={styles.image}
        source={require("@/assets/images/dottedPlane.png")}
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="black" />
      {/* <TouchableOpacity style={styles.back} onPress={() => router.back()}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
      </TouchableOpacity> */}
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
    backgroundColor: Theme.colors.backgroundPrimary,
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
    position: 'absolute',
    bottom: 10,
  }
});
