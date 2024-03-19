import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstPage from "./components/FirstPage";
import Register from "./components/Register";

const Stack = createStackNavigator();

const BasicForm = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BasicForm;
