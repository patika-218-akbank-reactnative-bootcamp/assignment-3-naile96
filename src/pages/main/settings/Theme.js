import {View, Text, Switch} from 'react-native';
import React from 'react';


const Theme = () => {

  const [mode, setMode] = useStete(false);

  return (
    <View>
      <Switch value={mode} onValueChange={() => setMode((value) => !value)} />
      
    </View>
  );
};

export default Theme;
