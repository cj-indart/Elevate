import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import Theme from "@/assets/theme";
import { SafeAreaView } from "react-native-safe-area-context";

import { useEffect, useState } from "react";

import db from "@/database/db";

import MemberGrid from "@/components/MemberGrid";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Group() {
  const router = useRouter();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const {
          data: { session },
        } = await db.auth.getSession();
        const user_id = session?.user?.id;

        setLoading(true);
        const { data, error } = await db
          .from("users")
          .select("id, username, profile_pic");
        if (error) {
          throw error;
        }
        const filteredData = data.filter((item) => item.id !== user_id);

        const formattedData = filteredData.map((item) => ({
          id: item.id,
          profilePicture: item.profile_pic,
          name: item.username,
          bio: item.bio,
        }));
        setMembers(formattedData);
      } catch (err) {
        console.error("Error fetching members:", err.message || err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.topNav}>
        <Text style={styles.title}>Group Home</Text>
        {/* <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => router.push("/additional/members")}
        >
          <Text style={styles.buttonText}>Members</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.content}>
        <View style={styles.group}>
          {loading ? (
            <Text>Loading members...</Text> // Show loading state while fetching members
          ) : (
            <MemberGrid members={members} /> // Render MemberGrid with the fetched members
          )}
        </View>
        <Text style={styles.header}>Upcoming Member Targets</Text>
        <View style={styles.groupGoalsContaier}>
          <View style={styles.tempText}>
            <Text>No member targets yet!</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    resizeMode: "cover",
  },
  container: {},
  content: {
    flexDirection: "column",
  },
  topNav: {
    marginVertical: windowWidth * 0.1,
    marginHorizontal: windowWidth * 0.07,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: Theme.sizes.titleText,
    fontWeight: "600",
  },
  buttonContainer: {
    backgroundColor: Theme.colors.buttonWhite,
    borderRadius: 8,
    width: windowWidth * 0.25,
    height: windowWidth * 0.08,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: Theme.sizes.bodyText,
    fontWeight: "600",
  },
  group: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: windowHeight * 0.4,
  },
  groupGoalsContaier: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: windowHeight * 0.3,
  },
  header: {
    fontSize: Theme.sizes.headerText,
    paddingHorizontal: 35,
  },
  tempText: {
    height: 20,
    borderRadius: 5,
    width: windowWidth * 0.45,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    // backgroundColor: "white",
  },
});
