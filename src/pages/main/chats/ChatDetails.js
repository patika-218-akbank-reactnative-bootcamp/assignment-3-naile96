import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../../../components/input/Input';
import Send from './Send';
import AsyncStorage from '@react-native-async-storage/async-storage';
var allData = [];
const ChatDetails = ({navigation, route}) => {
  const [dataUpdated, setDataUpdated] = React.useState(false);

  const isMyMassage = () => {
    return true;
    // return messages.userId === 'u1';
  };

  useEffect(() => {
    setInterval(() => {
      AsyncStorage.getItem('naile').then(messages => {
        allData = JSON.parse(messages);
        setDataUpdated(!dataUpdated);
      });
    }, 2000);
  });

  const image = require('../../../../assets/Telegram.jpg');

  return (
    <ImageBackground style={styles.image} source={image}>
      <FlatList
        data={allData}
        extraData={dataUpdated}
        renderItem={({item}) => <Text>{item}</Text>}
      />
      <Text>{route.params.name}</Text>
      <Send name={route.params.name} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ChatDetails;
