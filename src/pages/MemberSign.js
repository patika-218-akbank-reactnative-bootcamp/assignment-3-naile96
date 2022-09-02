import {Alert, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Input from '../components/input/Input';
import Button from '../components/Button';
import {Countries} from './../country_code.js';

const MemberSign = ({navigation}) => {
  function goToMainPage() {
    navigation.navigate('MainScreen');
    saveLogin();
  }
  const [user, setUser] = useState({firstName: '', lastName: '', userName: ''});

  const [selectedLanguage, setSelectedLanguage] = useState();
  const [number, onChangeNumber] = React.useState(null);

  const handleChange = (k, v) => {
    setUser(prevState => ({
      ...prevState,
      [k]: v,
    }));
  };

  const saveLogin = async () => {
    setUser(user);
    await AsyncStorage.setItem('user', JSON.stringify(user));
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    const _user = userData ? JSON.parse(userData) : null;
    setUser(_user);

    console.log(userData);
    console.log(_user);
  };

  return (
    <SafeAreaView>
      <Text>MemberSign</Text>
      <Input
        placeholder="First Name"
        name="firstName"
        onChangeText={text => handleChange('firstName', text)}
      />
      <Input
        placeholder="Last Name"
        name="lastName"
        onChangeText={text => handleChange('lastName', text)}
      />
      <Input
        placeholder="Username"
        name="userName"
        onChangeText={text => handleChange('userName', text)}
      />

      <View>
        <Picker
          style={{height: 100, width: 200}}
          itemStyle={{ fontSize:17 }}

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
