import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import theme from "@/assets/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "expo-router";

import { SelectList } from "react-native-dropdown-select-list";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function background() {
  const [major, setMajor] = useState("");
  const [selectedCareer, setSelectedCareer] = useState("");
  const [selectedGrad, setSelectedGrad] = useState("");

  const router = useRouter();

  const years = [
    { key: "1", value: "2000" },
    { key: "2", value: "2001" },
    { key: "3", value: "2002" },
    { key: "4", value: "2003" },
    { key: "5", value: "2004" },
    { key: "6", value: "2005" },
    { key: "7", value: "2006" },
    { key: "8", value: "2007" },
    { key: "9", value: "2008" },
    { key: "10", value: "2009" },
    { key: "11", value: "2010" },
    { key: "12", value: "2011" },
    { key: "13", value: "2012" },
    { key: "14", value: "2013" },
    { key: "15", value: "2014" },
    { key: "16", value: "2015" },
    { key: "17", value: "2016" },
    { key: "18", value: "2017" },
    { key: "19", value: "2018" },
    { key: "20", value: "2019" },
    { key: "21", value: "2020" },
    { key: "22", value: "2021" },
    { key: "23", value: "2022" },
    { key: "24", value: "2023" },
    { key: "25", value: "2024" },
    { key: "26", value: "2025" },
    { key: "27", value: "2026" },
    { key: "28", value: "2027" },
    { key: "29", value: "2028" },
    { key: "30", value: "2029" },
    { key: "31", value: "2030" },
  ];

  const careerInterests = [
    { key: "1", value: "Software Engineering" },
    { key: "2", value: "Data Science" },
    { key: "3", value: "Product Management" },
    { key: "4", value: "Cybersecurity" },
    { key: "5", value: "Artificial Intelligence/Machine Learning" },
    { key: "6", value: "Cloud Computing" },
    { key: "7", value: "Web Development" },
    { key: "8", value: "Mobile App Development" },
    { key: "9", value: "UI/UX Design" },
    { key: "10", value: "Game Development" },
    { key: "11", value: "Blockchain Development" },
    { key: "12", value: "Bioinformatics" },
    { key: "13", value: "Finance" },
    { key: "14", value: "Investment Banking" },
    { key: "15", value: "Consulting" },
    { key: "16", value: "Marketing" },
    { key: "17", value: "Sales" },
    { key: "18", value: "Entrepreneurship" },
    { key: "19", value: "Law" },
    { key: "20", value: "Healthcare/Medicine" },
    { key: "21", value: "Public Policy" },
    { key: "22", value: "Education" },
    { key: "23", value: "Environmental Science" },
    { key: "24", value: "Renewable Energy" },
    { key: "25", value: "Architecture" },
    { key: "26", value: "Civil Engineering" },
    { key: "27", value: "Aerospace Engineering" },
    { key: "28", value: "Mechanical Engineering" },
    { key: "29", value: "Electrical Engineering" },
    { key: "30", value: "Industrial Design" },
    { key: "31", value: "Graphic Design" },
    { key: "32", value: "Photography" },
    { key: "33", value: "Film Production" },
    { key: "34", value: "Writing/Journalism" },
    { key: "35", value: "Sports Management" },
    { key: "36", value: "Event Planning" },
    { key: "37", value: "Human Resources" },
    { key: "38", value: "Psychology" },
    { key: "39", value: "Social Work" },
    { key: "40", value: "Non-Profit Management" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.header}>Education</Text>

      <TextInput
        style={styles.inputBox}
        placeholder="Major"
        value={major}
        onChangeText={setMajor}
      />

      <SelectList
        setSelected={setSelectedGrad}
        data={years}
        save="value"
        placeholder="When did/will you graduate?"
        boxStyles={{
          height: windowHeight * 0.06,
          width: windowWidth * 0.8,
          borderColor: "#a9a9a9",
          borderWidth: 0.5,
          borderRadius: 5,
          paddingHorizontal: 10,
          marginBottom: 15,
          backgroundColor: "#e0e0e0",
          alignItems: "center",
        }}
        dropdownStyles={{
          width: windowWidth * 0.8,
          borderColor: "#a9a9a9",
          borderWidth: 0.5,
          borderRadius: 5,
          backgroundColor: "#f0f0f0",
        }}
        textStyles={{
          textAlign: "left",
          color: "#000",
          fontSize: 16,
        }}
      />

      <SelectList
        setSelected={setSelectedCareer}
        data={careerInterests}
        save="value"
        placeholder="Desired Career Path(s)"
        boxStyles={{
          height: windowHeight * 0.06,
          width: windowWidth * 0.8,
          borderColor: "#a9a9a9",
          borderWidth: 0.5,
          borderRadius: 5,
          paddingHorizontal: 10,
          marginBottom: 15,
          backgroundColor: "#e0e0e0",
          alignItems: "center",
        }}
        dropdownStyles={{
          width: windowWidth * 0.8,
          borderColor: "#a9a9a9",
          borderWidth: 0.5,
          borderRadius: 5,
          backgroundColor: "#f0f0f0",
        }}
        textStyles={{
          textAlign: "left",
          color: "#000",
          fontSize: 16,
        }}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/tabs/groupHome")}
        >
          <FontAwesomeIcon icon={faArrowRight} size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    marginTop: windowHeight * 0.1,
    fontSize: 30,
    fontWeight: "bold",
    // marginBottom: windowHeight * 0.05,
  },
  header: {
    marginTop: windowHeight * 0.05,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: windowHeight * 0.1,
  },
  inputBox: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.8,
    borderColor: "#a9a9a9",
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#e0e0e0",
  },
  buttonContainer: {
    paddingRight: windowWidth * 0.05,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: windowHeight * 0.2,
  },
  button: {
    marginTop: windowHeight * 0.1,
    width: windowWidth * 0.2,
    backgroundColor: theme.colors.buttonBlue,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
});
