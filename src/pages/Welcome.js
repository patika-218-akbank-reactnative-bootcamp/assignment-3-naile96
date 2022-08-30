import {Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../components/Button';

const Welcome = ({navigation}) => {
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');
  }

  return (
    <SafeAreaView style={styles.conainer}>
      <Text style={styles.header}>Telegram</Text>
      <Button text="Start Messaging" onPress={goToMemberSign} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 40,
    margin: 10,
  },
});

export default Welcome;
