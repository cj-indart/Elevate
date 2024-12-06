import { Tabs } from "expo-router";
import { View, Image, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarLabelStyle: { fontSize: 18 },
        tabBarStyle: { backgroundColor: "white", height: 80 },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="groupHome"
        options={{
          title: "Crew",
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={styles.icon}
              source={require("@/assets/icons/crew.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="groupChat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={styles.icon}
              source={require("@/assets/icons/chat.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="personalHome"
        options={{
          title: "Me",
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              style={styles.icon}
              source={require("@/assets/icons/person.png")}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 36,
    resizeMode: "contain",
  },
});
