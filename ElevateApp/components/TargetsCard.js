import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Theme from "@/assets/theme";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};

export default function TargetsCard({
  title,
  description,
  deadline,
  priority,
}) {
  const priorityColor =
    priority === "3" ? "red" : priority === "2" ? "orange" : "#3366FF";

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.deadline}>Deadline: {formatDate(deadline)}</Text>
      <Text style={[styles.priority, { color: priorityColor }]}>
        Priority: {priority}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Theme.colors.buttonWhite,
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
    color: Theme.colors.textSecondary,
  },
  deadline: {
    fontSize: 12,
    marginBottom: 5,
    color: Theme.colors.textSecondary,
  },
  priority: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
