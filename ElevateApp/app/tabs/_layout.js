import { Tabs } from "expo-router";
import { View, Image, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarStyle: { backgroundColor: "white" },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="groupHome"
          options={{
            title: "Crew",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image
                  style={styles.icon}
                  source={require("@/assets/icons/focusedcrew.png")}
                ></Image>
              ) : (
                <Image
                  style={styles.icon}
                  source={require("@/assets/icons/crew.png")}
                ></Image>
              ),
          }}
        />
        <Tabs.Screen
          name="groupChat"
          options={{
            title: "Chat",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image
                  style={styles.icon}
                  source={require("@/assets/icons/focusedchat.png")}
                ></Image>
              ) : (
                <Image
                  style={styles.icon}
                  source={require("@/assets/icons/chat.png")}
                ></Image>
              ),
          }}
        />
        <Tabs.Screen
          name="personalHome"
          options={{
            title: "Me",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image
                  style={styles.icon}
                  source={require("@/assets/icons/focusedperson.png")}
                ></Image>
              ) : (
                <Image
                  style={styles.icon}
                  source={require("@/assets/icons/person.png")}
                ></Image>
              ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    height: 20,
    resizeMode: "contain",
  },
});
