import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import React from "react";

const OnboardingScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/screen2.png")}
        style={styles.image}
      />
      <Text style={styles.heading}>Customise your perfect trip</Text>
      <Text style={styles.subheading}>
        Countless ways to make your trip unique
      </Text>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#ddd" : "#007BFF",
          },
          styles.button,
        ]}
        onPress={() => navigation.navigate("onboarding3")}
      >
        <Image
          source={require("../../assets/arrow-right.png")}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

export default OnboardingScreen1;

const styles = StyleSheet.create({
  container: {
    width: "70%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 40,
  },
  subheading: {
    width: "70%",
    lineHeight: 25,
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 50,
    color: "grey",
    textAlign: "center",
  },
  image: {
    width: 330,
    height: 330,
    marginTop: 20,
    marginBottom: 50,
    alignSelf: "center",
  },
  icon: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    borderRadius: 50,
    marginBottom: 20,
    height: 75,
    width: 75,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
