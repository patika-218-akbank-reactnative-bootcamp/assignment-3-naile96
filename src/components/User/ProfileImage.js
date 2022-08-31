import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const ProfileImage = ({url, size = 77}) => {
  return (
    <View style={[styles.view, {width: size, height: size}]}>
      <Image style={styles.image} source={{uri: url}} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 6,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 40,
  },
});

export default ProfileImage;
