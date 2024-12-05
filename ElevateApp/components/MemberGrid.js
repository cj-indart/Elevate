import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Theme from "@/assets/theme";

const MemberCard = ({ profilePicture, name }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: profilePicture }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const MemberGrid = ({ members }) => {
  return (
    <View style={styles.gridContainer}>
      <View style={styles.row}>
        {members[0] && (
          <TouchableOpacity onPress={() => alert("not implemented yet!")}>
            <MemberCard
              key={members[0].id}
              profilePicture={members[0].profilePicture}
              name={members[0].name}
            />
          </TouchableOpacity>
        )}
        {members[1] && (
          <TouchableOpacity onPress={() => alert("not implemented yet!")}>
            <MemberCard
              key={members[1].id}
              profilePicture={members[1].profilePicture}
              name={members[1].name}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.row}>
        {members[2] && (
          <TouchableOpacity onPress={() => alert("not implemented yet!")}>
            <MemberCard
              key={members[2].id}
              profilePicture={members[2].profilePicture}
              name={members[2].name}
            />
          </TouchableOpacity>
        )}
        {members[3] && (
          <TouchableOpacity onPress={() => alert("not implemented yet!")}>
            <MemberCard
              key={members[3].id}
              profilePicture={members[3].profilePicture}
              name={members[3].name}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 20,
    marginBottom: 20,
  },
  card: {
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    width: 100,
  },
});

export default MemberGrid;
