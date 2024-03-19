import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/LogoStyle";
import Logo from "./Logo";

const Register = () => {
  return (
    <>
      <Logo />
      <View style={styles.registermaincontainer}>
        <Text style={styles.registertext}>Register</Text>
      </View>
    </>
  );
};

export default Register;
