import {View, Button} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ContactList from './contacts/ContactList';
import ChatList from './chats/ChatList';
import SettingsScreen from './settings/SettingsScreen';
import Edit from './settings/Edit';
import Theme from './settings/Theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../../components/Search';
import {useNavigation} from '@react-navigation/native';

const Bottom = createBottomTabNavigator();

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

// const SettingsScreen = () => {
//   const {navigate} = useNavigation();
// }

const MainPage = () => {
  return (
    <Bottom.Navigator initialRouteName="Chats">
      <Bottom.Screen
        name="Contacts"
        component={ContactList}
        options={{
          tabBarIcon: props => (
            <Ionicons size={30} name="person-circle-outline" />
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
      <Bottom.Screen
        name="Chats"
        component={ChatList}
        options={{
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
      <Bottom.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          headerShown: false,
          tabBarIcon: ({tintColor}) => (
            <Ionicons size={30} name="cog-outline" />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default MainPage;
