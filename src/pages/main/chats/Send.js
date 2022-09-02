import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Send = ({name}) => {
  var message = '';
  async function sendMessage() {
    console.log('message', message);
    var messages = await AsyncStorage.getItem(name);
    console.log('messages', messages);
    if (messages == null) {
      await AsyncStorage.setItem(name, JSON.stringify([message]));
    } else {
      var m = JSON.parse(messages);
      m.push(message);
      await AsyncStorage.setItem(name, JSON.stringify(m));
      message = '';
    }
  }
  function draftMessage(text) {
    message = text;
  }
  return (
    <View style={styles.boxContainer}>
      <Ionicons style={styles.icons} name="add-outline" />
      <View style={styles.box}>
        <TextInput
          style={styles.textinput}
          onChangeText={text => draftMessage(text)}
        />
        <Ionicons style={styles.boxicons} name="albums-outline" />
      </View>
      <TouchableOpacity>
        <Ionicons
          style={styles.icons}
          name="send-outline"
          onPress={sendMessage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#ECEEF1',
  },
  box: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  textinput: {
    flex: 1,
    marginHorizontal: 10,
  },
  icons: {
    color: '#0070FF',
    padding: 8,
    fontSize: 25,
  },
  boxicons: {
    margin: 9,
    color: '#0070FF',
    fontSize: 25,
  },
});

export default Send;
