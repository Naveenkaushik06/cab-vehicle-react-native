import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native'; // Import Image component
import { styles } from '../styles'; 

export const FirstPage = () => {
  return (
    <View style={styles.FirstPagecontainer}>
      
      <Image  style={styles.Logoimg}
        source={{ uri: "https://play-lh.googleusercontent.com/2XqI7lhcrck9uZoFh25zC3PlrYENQbgKpbQyZI76015jUMnD8GuYPDb1Fq8HcN4PbQ" }}
        
      />
      
      <Text style={styles.Logotext} >namma {'\n'} yatri</Text>

      <Image style={styles.ImgFirstPage} source={
        {
          uri:"https://nammayatri.in/img/autoDriverMob-NammaYatri.png"
        }
      }/>

      <Text style={styles.CabBooking}>Booking Cab</Text>
      <Text style={styles.CabBottomText}>First open Mobility app</Text>

      <TouchableOpacity
        style={styles.GetStarted
          
        }
        onPress={() => {
         
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>GET STARTED</Text>
      </TouchableOpacity>


      <Text style={styles.BottomText}>App by the drivers for the people {"\n"} 100% direct payment to drivers</Text>
      
      <Text style={styles.BottomTexttwo}>Book an Cab with Zero commision</Text>
    </View>
 
  );
};
