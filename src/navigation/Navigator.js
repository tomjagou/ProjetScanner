import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../App';
import Context from '../contexts/Context';

const AuthNavigator = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthNavigator.Navigator screenOptions={{headerShown: false}}>
      <AuthNavigator.Group>
        <AuthNavigator.Screen name="App" component={App} />
        <AuthNavigator.Screen name="Context" component={Context} />
      </AuthNavigator.Group>
    </AuthNavigator.Navigator>
  );
};

return <AuthNavigation />;

export default Navigator;
