import React, { useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import Theme from "@/assets/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: "center",
    flex: 1,
    padding: 20,
    backgroundColor: Theme.colors.backgroundPrimary,
  },
  title: {
    marginTop: windowHeight * 0.1,
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    height: windowHeight * 0.4,
    aspectRatio: 1,

  },
});
