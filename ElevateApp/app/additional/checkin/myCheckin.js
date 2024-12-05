import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";

import React, { useState, useEffect } from "react";

import { useRouter } from "expo-router";
import Theme from "@/assets/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import MemberCard from "@/components/MemberCard";

import db from "@/database/db";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function MyCheckin() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/tabs/personalHome")}
      >
        <Ionicons name="chevron-back" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.topNav}>
        <Text style={styles.title}>My Check-ins</Text>
      </View>

      {/* Start Weekly Check-in Button */}
      <TouchableOpacity
        style={styles.checkInButton}
        onPress={() => router.push("/additional/checkin/begin")}
      >
        <View style={styles.row}>
          <Text style={styles.checkInButtonText}>Start Weekly Check-in</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color="black"
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Theme.colors.backgroundPrimary,
  },
  backButton: {
    position: "absolute",
    top: 75,
    left: 20,
    zIndex: 1,
  },
  title: {
    textAlign: "center",
    marginTop: windowHeight * 0.02,
    fontSize: Theme.sizes.titleText,
    fontWeight: "bold",
  },
  checkInButton: {
    backgroundColor: Theme.colors.buttonBlue, // Customize color
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
    width: windowWidth * 0.8,
    alignItems: "center",
  },
  checkInButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
  row: {
    flexDirection: "row",
    alignItems: "center", // Align text and icon vertically
  },
  icon: {
    marginLeft: 30,
  },
});
