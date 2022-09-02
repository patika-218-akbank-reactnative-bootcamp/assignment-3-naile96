import {FlatList, View} from 'react-native';
import React from 'react';
import Search from '../../../components/Search';
import Previews from '../chats/Previews';
import {Profiles} from '../../../components/Data';

const ContactList = ({navigation}) => {
  return (
    <View>
      <Search />
      <FlatList
        data={Profiles}
        renderItem={({item}) => (
          <Previews data={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default ContactList;
