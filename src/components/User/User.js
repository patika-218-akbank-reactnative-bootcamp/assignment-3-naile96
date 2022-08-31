import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ProfileImage from './ProfileImage';

const User = ({data, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.header}
      //   onPress={() => {
      //     navigation.navigate('ChatDetails', {data: data});
      //   }}
    >
      <View>
        <ProfileImage size={80} url={data.avatarUrl} />
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textName}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
  },

  textArea: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    flex: 1,
  },
});

export default User;
