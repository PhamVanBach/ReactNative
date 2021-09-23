import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Food, More, Move } from "./src/srceens";

import Tabs from './src/navigation/Tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={"Food"}
        >
          
          <Stack.Screen name="Food" component={Tabs} />
          <Stack.Screen name="Move" component={Move} />
          <Stack.Screen name="More" component={More} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
