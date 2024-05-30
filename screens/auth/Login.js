import React, { useState, useContext } from "react";
import { StyleSheet, Text, TextInput, View, Button, Pressable } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/AuthContext"; // Make sure to create and import AuthContext
import { postUser } from "../../api/api";
import { CommonActions } from "@react-navigation/native";
import showAlert from "../../utils/checkUserTaken";
import TextReg from "../TextReg";
import TextBold from "../TextBold";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPostingUser, setIsPostingUser] = useState(false);
  const { setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    setIsPostingUser(true);
    const newUser = { username, email, password };
    try {
      if (newUser.username === "U") {
        showAlert(setIsPostingUser);
        setUsername("");
      } else {
        // const user = await postUser(newUser);
        // await AsyncStorage.setItem("user", JSON.stringify(user));
        // setUser(user);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "My Bookings" }],
          })
        );
      }
    } catch (error) {
      setIsPostingUser(false);
      console.error("Error during Login:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextBold style={styles.title}>Login</TextBold>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Login"
        onPress={handleLogin}
        disabled={isPostingUser}
      />
      <View style={styles.inline}>
        <TextReg style={styles.text}>New to TravelGenie? </TextReg>
        <Pressable onPress={() => {
            navigation.navigate('SignUp')
        }}>
          <TextReg style={styles.signUp}>Sign up here</TextReg>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 25,
    marginBottom: 20,
  },
  inline: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  text: {
    fontSize: 14,
  },
  signUp: {
    fontSize: 14,
    color: "#0373F3",
  },
});
