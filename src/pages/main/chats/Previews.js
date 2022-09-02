import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ProfileImage from '../../../components/User/ProfileImage';

const Previews = ({data, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate({name: 'ChatDetails', params: {name: data.name}});
      }}
      style={styles.header}
      //   onPress={() => {
      //     navigation.navigate('ChatDetails', {data: data});
      //   }}
    >
      <View>
        <ProfileImage size={70} url={data.avatarUrl} />
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
    fontSize: 15,
    marginTop: 20,
  },

  textArea: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    flex: 1,
    marginLeft: 10,
  },
});

export default Previews;
