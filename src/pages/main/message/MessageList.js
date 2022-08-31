import {FlatList, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import User from '../../../components/User/User';
import {Profiles} from '../../../components/Data';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MessageList = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.box}>
          <Ionicons style={styles.boxicons} name="search-outline" />
          <TextInput
            placeholder="Search for messages or users"
            placeholderTextColor={'gray'}
            style={styles.textinput}
          />
        </View>
      </View>
      <FlatList
        data={Profiles}
        renderItem={({item}) => <User data={item} navigation={navigation} />}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7E7E7',
  },
  box: {
    flex: 1,
    backgroundColor: '#D6D6D6',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
    padding: 5,
  },
  textinput: {
    fontSize: 18,
  },
  boxicons: {
    color: 'gray',
    fontSize: 20,
    padding: 5,
  },
});

export default MessageList;
