import {SafeAreaView, Text} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

import Input from '../components/input/Input';
import Button from '../components/Button';

const MemberSign = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [userName, setUserName] = useState('');

  function handleSubmit() {
    const user = {
      firstName,
      lastName,
      userName,
    };
  }
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <SafeAreaView>
      <Text>MemberSign</Text>
      <Input placeholder="First Name" onChangeText={setFirstName} />
      <Input placeholder="Last Name" onChangeText={setLastname} />
      <Input placeholder="Username" onChangeText={setUserName} />
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <Button text="Sign Up" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default MemberSign;
