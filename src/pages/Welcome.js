import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Button from '../components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image} from 'react-native';
const image = require('../../assets/logo.svg.png');


const Welcome = ({navigation}) => {
  function goToMemberSign() {
    console.log(global.userData);
    if (global.userData == null) {
      navigation.navigate('MemberSignScreen');
    } else {
      navigation.navigate('MainScreen');
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    //await AsyncStorage.removeItem('user');

    global.userData = await AsyncStorage.getItem('user');
  };

  return (
    <SafeAreaView style={styles.conainer}>
      <View style={styles.imageContainer}>
        <Image
          style={{
            resizeMode: 'contain',
            height: 190,
            width: 200,
          }}
          source={image}
        />

        <Text style={styles.header}>Telegram</Text>
      </View>
      <View>
        <Button text="Start Messaging" onPress={goToMemberSign} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    display: 'flex',
    //flexDirection: 'vertical',
    justifyContent: 'center',
    alignItems: 'center',
  },
  conainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    textAlign: 'center',
    fontSize: 40,
    margin: 10,
  },
});

export default Welcome;
