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

export default function Members() {
  const router = useRouter();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Supabase
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const { data, error } = await db
          .from("user_info")
          .select("username, bio, profile_pic");
        if (error) {
          throw error; // Throw the error to be caught in the catch block
        }
        const formattedData = data.map((item, index) => ({
          id: String(index), // Use a unique key
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
      <View style={styles.topNav}>
        <View style={styles.backButton}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => router.push("/tabs/groupHome")}
          >
            <Ionicons name="chevron-back" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Group Members</Text>
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
    backgroundColor: Theme.colors.backgroundPrimary,
    flex: 1,
  },
  topNav: {
    marginVertical: windowWidth * 0.1,
    marginHorizontal: windowWidth * 0.07,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
  title: {
    fontWeight: "600",
    fontSize: 32,
  },
  list: {
    paddingBottom: 20,
  },
});
