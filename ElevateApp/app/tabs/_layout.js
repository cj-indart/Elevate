import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarStyle: { backgroundColor: "black" },
          headerShown: true,
        }}
      >
        <Tabs.Screen
          name="groupHome"
          options={{
            title: "Group Home",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="group" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="personalHome"
          options={{
            title: "Personal Home",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="user" size={size} color={color} />
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
});
