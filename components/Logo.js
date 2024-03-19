import React from 'react'
import { View, Text,Image } from 'react-native'
import { styles } from '../styles/LogoStyle'


const Logo = () => {
  return (
    <View style={styles.registermaincontainer}>
      <Image
        style={styles.Logoimg}
        source={{
          uri: "https://play-lh.googleusercontent.com/2XqI7lhcrck9uZoFh25zC3PlrYENQbgKpbQyZI76015jUMnD8GuYPDb1Fq8HcN4PbQ",
        }}
      />
      <Text style={styles.Logotext}>namma {"\n"} yatri</Text>
      
    </View>
  )
}

export default Logo
