import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../App';
import PageInfos from '../PageInfos';

const AuthNavigator = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthNavigator.Navigator screenOptions={{headerShown: false}}>
      <AuthNavigator.Group>
        <AuthNavigator.Screen name="App" component={App} />
        <AuthNavigator.Screen name="PageInfos" component={PageInfos} />
      </AuthNavigator.Group>
    </AuthNavigator.Navigator>
  );
};

export default AuthNavigation;
