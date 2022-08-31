import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import Button from '../../../components/Button';

const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
      <Button
        text="Edit"
        title="Edit"
        onPress={() => navigation.navigate('EditScreen')}
      />
    </SafeAreaView>
  );
};

export default SettingsScreen;
