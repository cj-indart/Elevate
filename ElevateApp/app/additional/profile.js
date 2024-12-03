import React, { useState } from "react";
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import Theme from "@/assets/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import db from "@/database/db";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Profile() {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState(null);

  const handleSelectImage = async () => {
    try {
      // First get the current user's session
      const {
        data: { session },
      } = await db.auth.getSession();
      user_id = session.user.id;
      console.log(user_id);

      if (!user_id) {
        Alert.alert("Error", "Not logged in");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        const uri = result.assets[0].uri;
        setProfileImage(uri);

        const imageName = `${Date.now()}.jpg`;
        const response = await uploadImageToSupabase(uri, imageName);

        if (response.error) {
          Alert.alert("Upload failed", response.error.message);
        } else {
          const { data: urlData } = db.storage
            .from("profile_pics")
            .getPublicUrl(imageName);

          console.log(urlData.publicUrl);
          // Update the profile_pic field for the current user
          const { data, error } = await db
            .from("users")
            .update({ profile_pic: urlData.publicUrl })
            .eq("id", user_id);

          if (error) {
            console.error("Error updating profile pic URL:", error);
            Alert.alert("Failed to update profile picture");
          } else {
            Alert.alert("Success", "Profile picture updated successfully!");
          }
        }
      }
    } catch (error) {
      console.error("Error selecting image:", error);
      Alert.alert("Error", "Failed to update profile picture");
    }
  };

  const uploadImageToSupabase = async (uri, imageName) => {
    try {
      // Fetch the file
      const response = await fetch(uri);
      const blob = await response.blob();

      // Add content type checking
      const contentType = blob.type;
      if (!contentType.startsWith("image/")) {
        throw new Error("Selected file is not an image");
      }

      // Convert blob to base64 first
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = async () => {
          try {
            const base64Data = reader.result.split(",")[1];
            const byteArray = Uint8Array.from(atob(base64Data), (c) =>
              c.charCodeAt(0)
            );

            // Upload to Supabase with the byte array
            const result = await db.storage
              .from("profile_pics")
              .upload(imageName, byteArray, {
                contentType: contentType,
                upsert: false,
              });

            resolve(result);
          } catch (error) {
            reject(error);
          }
        };
        reader.onerror = () => reject(new Error("Failed to read file"));
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      return { error };
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => router.push("/tabs/personalHome")}
      >
        <Ionicons name="chevron-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>My Profile</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={handleSelectImage}
        >
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Text style={styles.imagePlaceholderText}>+</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Theme.colors.backgroundPrimary,
  },
  scrollViewContent: {
    flex: 1,
    alignItems: "center",
  },
  back: {
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
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    marginTop: windowHeight * 0.1,
    overflow: "hidden",
    borderWidth: 1,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imagePlaceholderText: {
    fontSize: 36,
    color: "#888",
  },
});
