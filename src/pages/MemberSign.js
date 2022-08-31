import {SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

import Input from '../components/input/Input';
import Button from '../components/Button';
import {Countries} from './../country_code.js';

const MemberSign = ({navigation}) => {
  function goToMainPage() {
    navigation.navigate('MainScreen');
    const user = {
      firstName,
      lastName,
      userName,
    };
  }
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [userName, setUserName] = useState('');

  const [selectedLanguage, setSelectedLanguage] = useState();
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <Text>MemberSign</Text>
      <Input placeholder="First Name" onChangeText={setFirstName} />
      <Input placeholder="Last Name" onChangeText={setLastname} />
      <Input placeholder="Username" onChangeText={setUserName} />

      <View>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          {Countries.map(country => {
            return (
              <Picker.Item
                key={country.code}
                label={country.name}
                value={country.code}
              />
            );
          })}
        </Picker>
        <Input
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </View>
      <Button text="Sign Up" onPress={goToMainPage} />
    </SafeAreaView>
  );
};

export default MemberSign;
