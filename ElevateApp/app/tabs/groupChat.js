import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import Theme from "@/assets/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
// let res = "";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  async function handleSend() {
    if (message.trim() !== "") {
      const newMessage = {
        id: messages.length.toString(),
        text: message,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");
    }
  }

  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 120 : 0}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Group Chat</Text>
      <FlatList
        data={messages.slice().reverse()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageRow,
              {
                justifyContent: "flex-end",
              },
            ]}
          >
            <View
              style={[
                styles.messageContainer,
                { alignSelf: "flex-end" },
                {
                  backgroundColor: Theme.colors.buttonBlue,
                },
              ]}
            >
              <Text style={[styles.messageText, { color: "black" }]}>
                {item.text}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        inverted // To display the newest messages at the bottom
      />
      <View style={[styles.messageRow, { justifyContent: "flex-start" }]}>
        <Image
          // source={require("./../images/mingle.png")}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Say something to your group..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons
            name="arrow-up"
            size={Theme.sizes.iconMedium}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: windowHeight * 0.1,
    fontSize: Theme.sizes.titleText,
    fontWeight: "bold",
  },
  messageContainer: {
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    maxWidth: "70%",
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 10,
    maxWidth: "100%", // Ensure the messages and images are contained within the screen width
  },
  messageText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  sendButton: {
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Theme.colors.buttonBlue,
    borderRadius: 20,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  sent: {
    alignSelf: "flex-end",
    backgroundColor: "#b3d9ff",
  },
});
