import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../../../components/input/Input';
import Button from '../../../components/Button';

const Edit = () => {
  return (
    <SafeAreaView>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Username" />
      <Button text="Sign Up" onPress={null} />
    </SafeAreaView>
  );
};

export default Edit;
