import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import Theme from "@/assets/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Personal() {
  const router = useRouter();
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [targetModalVisible, setTargetModalVisible] = useState(false);
  const [logOutVisible, setLogOutVisible] = useState(false);

  const handleViewProfile = () => {
    router.push("/additional/profile");
    setSettingsModalVisible(false);
  };

  const handleSettingsClick = () => {
    setSettingsModalVisible(true);
  };

  const handleTargetClick = () => {
    setTargetModalVisible(true);
  };

  const handleLogOutClick = () => {
    setLogOutVisible(true);
  };

  const logOut = () => {
    router.push("/setup/welcome");
    setSettingsModalVisible(false);
    setLogOutVisible(false);
  };

  const toggleCheckBox = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  return (
    <SafeAreaView>
      <View style={styles.topNav}>
        <Text style={styles.title}>Personal Home</Text>
        <TouchableOpacity onPress={handleSettingsClick}>
          <Image
            source={require("@/assets/icons/setup-button.png")}
            style={styles.setting}
          ></Image>
        </TouchableOpacity>
      </View>

      {/* Settings Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={settingsModalVisible}
        onRequestClose={() => setSettingsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleViewProfile}
            >
              <Text style={styles.modalButtonText}>View Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleLogOutClick}
            >
              <Text style={styles.modalButtonText}>Log Out</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setSettingsModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        animationType="slide"
        visible={logOutVisible}
        onRequestClose={() => setLogOutVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.logoutHeader}>
              Are you sure you want to log out?
            </Text>
            <View style={styles.logout}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setLogOutVisible(false)}
              >
                <Text style={styles.logoutText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={logOut}>
                <Text style={styles.logoutText}>Yes, Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Background Container */}
      <ImageBackground
        source={require("../../assets/images/skyWithPlane.png")}
        style={styles.backgroundContainer}
      >
        <TouchableOpacity
          style={styles.checkinButtonContainer}
          onPress={() => router.push("/additional/checkin/myCheckin")}
        >
          <View style={styles.myCheckinButton}>
            <Text style={styles.myCheckinText}>My Check-in</Text>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.targetsNav}>
        <View style={styles.titleAndButton}>
          <Text style={styles.header}>My Targets</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.titleAndButton}
            onPress={() => router.push("/additional/target/allTargets")}
          >
            <Text>See All</Text>
            <Ionicons name="chevron-forward" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.targetButton} onPress={handleTargetClick}>
        <View style={styles.row}>
          <AnimatedCircularProgress
            size={windowWidth * 0.15}
            width={3}
            fill={66}
            tintColor="#00e0ff"
            backgroundColor="#3d5875"
          >
            {(fill) => <Text style={styles.progressText}>2 days</Text>}
          </AnimatedCircularProgress>

          <Text style={styles.targetButtonText}>Go to CAPS Meeting</Text>
          <TouchableOpacity
            style={[
              styles.checkBox,
              isChecked && styles.checkedBox, // Add additional style when checked
            ]}
            onPress={toggleCheckBox}
          >
            {isChecked && <Ionicons name="checkmark" size={20} color="black" />}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Modal for clicking on the Target */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={targetModalVisible}
        onRequestClose={() => setTargetModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalTopContainer}>
              <Text style={styles.modalTitleText}>Go to CAPS Meeting</Text>
              <Text style={styles.modalPriorityText}>Priority: 3</Text>
            </View>

            <View style={styles.modalMiddleContainer}>
              <AnimatedCircularProgress
                size={windowWidth * 0.15}
                width={3}
                fill={66}
                tintColor="#00e0ff"
                backgroundColor="#3d5875"
              >
                {(fill) => <Text style={styles.progressText}>2 days</Text>}
              </AnimatedCircularProgress>
              <TouchableOpacity
                style={[
                  styles.checkBox,
                  isChecked && styles.checkedBox, // Add additional style when checked
                ]}
                onPress={toggleCheckBox}
              >
                {isChecked && (
                  <Ionicons name="checkmark" size={20} color="black" />
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.modalBottomContainer}>
              <Text style={styles.modalBottomText}>
                Tue, Dec. 10 at 11:00 AM
              </Text>
              <Text style={styles.modalBottomText}></Text>
              <Text></Text>
              <Text style={styles.modalBottomText}>Can't miss this!</Text>
            </View>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setTargetModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalTitleText: {
    fontSize: Theme.sizes.headerText,
    fontWeight: "500",
  },
  modalPriorityText: {
    color: "red",
  },
  modalTopContainer: {
    textAlign: "center",
  },
  modalMiddleContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBottomContainer: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: "left",
  },
  modalBottomText: {
    fontSize: Theme.sizes.bodyText,
  },
  targetsNav: {
    marginTop: windowHeight * 0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: windowWidth * 0.1,
  },
  titleAndButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  setting: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  header: {
    fontSize: Theme.sizes.headerText,
    paddingLeft: 35,
    paddingRight: 10,
  },
  topNav: {
    marginVertical: windowWidth * 0.1,
    marginHorizontal: windowWidth * 0.07,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 20,
  },
  title: {
    fontSize: Theme.sizes.titleText,
    fontWeight: "600",
  },
  backgroundContainer: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.4,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 20,
    overflow: "hidden", // Ensures the corners are clipped for the child components
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: windowWidth * 0.7,
    // alignItems: "center",
  },
  modalButton: {
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
    backgroundColor: Theme.colors.buttonWhite,
    borderRadius: 8,
    marginVertical: 5,
  },
  modalButtonText: {
    fontSize: 18,
    color: "black",
  },
  checkinButtonContainer: {
    position: "absolute",
    bottom: 50,
    backgroundColor: Theme.colors.buttonBlue,
    padding: 15,
    borderRadius: 8,
    width: windowWidth * 0.35,
  },
  myCheckinButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  myCheckinText: {
    fontWeight: "500",
    fontSize: Theme.sizes.bodyText,
  },
  targetButton: {
    backgroundColor: Theme.colors.buttonBlue, // Customize color
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: "center",
    width: windowWidth * 0.8,
    height: windowHeight * 0.1,
    alignItems: "center",
    justifyContent: "center", // Center content vertically
  },
  targetButtonText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
  row: {
    flexDirection: "row",
    alignItems: "center", // Center vertically
    justifyContent: "center",
    width: "100%", // Ensure it takes full width
  },
  progressIndicator: {
    marginRight: 10, // Space between the indicator and the text
  },
  checkBox: {
    marginLeft: 20,
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: "black",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white", // Add this to make the background visible
  },
  checkedBox: {
    backgroundColor: Theme.colors.buttonBlue, // Or any color you prefer for the checked state
  },
  logoutHeader: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  logoutText: {
    alignText: "center",
    fontSize: 24,
  },
  logout: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
