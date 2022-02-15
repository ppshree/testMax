import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
export default function Login() {
    const navigation = useNavigation()
    const [ProArray, setProArray] = useState([])
    const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  async function LoginNow() {

    axios({
      method: "POST",
      url: "http://182.76.237.238/~teammaxtra/help_application/public/api/login",
      data: {
        email: Email,
        password: Password,
        user_type: 1,
      },
    })
      .then((res) => {
        alert(res.data.message)
        if (res.data.message=="success") {
            navigation.navigate("DashBoard")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ marginHorizontal: 20 }}>
        <TextInput
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholder="Enter Mail Id"
          style={Styles.TextInputStyle}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry
          style={Styles.TextInputStyle}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={LoginNow}
          style={{ marginHorizontal: 20, marginVertical: 10 }}
        >
          <Text style={Styles.ButtonTextStyle}>Log-In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  TextInputStyle: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderWidth: 1,
    color: "#0075a7",
    borderColor: "#0075a7",
  },
  ButtonTextStyle: {
    textAlign: "center",
    fontSize: 14,
    borderRadius: 8,
    color: "white",
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "#0075a7",
  },
});
