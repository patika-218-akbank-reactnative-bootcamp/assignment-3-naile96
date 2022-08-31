import {View, Button} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ContactList from './contacts/ContactList';
import MessageList from './message/MessageList';
import SettingsScreen from './settings/SettingsScreen';
import Edit from './settings/Edit';
import Theme from './settings/Theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="SettingsScreen">
      <Stack.Screen name="ThemeScreen" component={Theme} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="EditScreen" component={Edit} />
    </Stack.Navigator>
  );
};

const MainPage = () => {
  return (
    <Tab.Navigator initialRouteName="Chats">
      <Tab.Screen
        name="Contacts"
        component={ContactList}
        options={{
          headerShown: false,
          tabBarIcon: props => (
            <Ionicons size={30} name="person-circle-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={MessageList}
        options={{
          headerStyle: {height: 120, backgroundColor: '#E7E7E7'},
          tabBarIcon: props => (
            <Ionicons size={30} name="chatbubbles-outline" />
          ),

          headerLeft: props => (
            <View>
              <Button onPress={null} title="Edit" color="#0070FF" />
            </View>
          ),
          headerRight: props => (
            <Ionicons size={30} color="#0070FF" name="create-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          headerShown: false,
          tabBarIcon: ({tintColor}) => (
            <Ionicons size={30} name="cog-outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainPage;
