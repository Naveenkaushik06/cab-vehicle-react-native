import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"; // Import Image component
import { styles } from "../styles/FirstPage";
import Logo from "./Logo";

const FirstPage = ({ navigation }) => {
  console.log(navigation);
  return (
    <>
    
    <View style={styles.FirstPagecontainer}>
    <Logo />

      <Image
        style={styles.ImgFirstPage}
        source={{
          uri: "https://nammayatri.in/img/autoDriverMob-NammaYatri.png",
        }}
      />

      <Text style={styles.CabBooking}>Booking Cab</Text>
      <Text style={styles.CabBottomText}>First open Mobility app</Text>

      <TouchableOpacity
        style={styles.GetStarted}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={{ color: "white", textAlign: "center" }}>GET STARTED</Text>
      </TouchableOpacity>

      <Text style={styles.BottomText}>
        App by the drivers for the people {"\n"} 100% direct payment to drivers
      </Text>

      <Text style={styles.BottomTexttwo}>Book an Cab with Zero commision</Text>
    </View>
    </>
  );
};

export default FirstPage