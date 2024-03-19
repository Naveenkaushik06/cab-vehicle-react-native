import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { FirstPage } from './components/FirstPage';

const BasicForm = () => {
  return (
    <View style={styles.MainContainer} >
      <FirstPage/>
    </View>
  );
};

export default BasicForm;
