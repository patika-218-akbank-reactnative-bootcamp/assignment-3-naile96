import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './Search.style';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = () => {
  return (
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
  );
};

export default Search;
