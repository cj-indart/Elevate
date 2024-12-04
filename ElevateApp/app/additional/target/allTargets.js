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

import Feather from "@expo/vector-icons/Feather";

import db from "@/database/db";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function allTargets() {
  const router = useRouter();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Supabase TODO change from members
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const { data, error } = await db
          .from("users")
          .select("id, username, bio, profile_pic");
        if (error) {
          throw error; // Throw the error to be caught in the catch block
        }
        const formattedData = data.map((item) => ({
          id: item.id, // Use a unique key
          profilePicture: item.profile_pic,
          name: item.username,
          bio: item.bio,
        }));
        setMembers(formattedData);
      } catch (err) {
        console.error("Error fetching members:", err.message || err);
      } finally {
        setLoading(false); // Ensure loading is turned off in both success and error cases
      }
    };

    fetchMembers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/tabs/personalHome")}
      >
        <Ionicons name="chevron-back" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.topNav}>
        <Text style={styles.title}>My Targets</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => router.push("/additional/target/setTarget")}
        >
          <Feather name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => alert("not implemented yet!")}>
            <MemberCard
              profilePicture={item.profilePicture}
              name={item.name}
              bio={item.bio}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Theme.colors.backgroundPrimary,
  },
  topNav: {
    marginVertical: windowWidth * 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },
  backButton: {
    position: "absolute",
    top: 75,
    left: 20,
    zIndex: 1,
  },
  buttonContainer: {
    backgroundColor: Theme.colors.buttonWhite,
    borderRadius: 8,
    width: windowWidth * 0.1,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    // marginTop: windowHeight * 0.02,
    fontSize: Theme.sizes.titleText,
    fontWeight: "bold",
  },
  list: {
    paddingBottom: 20,
    width: "100%",
  },
});
