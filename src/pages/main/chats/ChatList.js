import {FlatList, ScrollView} from 'react-native';
import React from 'react';
import Previews from './Previews';
import {Profiles} from '../../../components/Data';
import Search from '../../../components/Search';

const MessageList = ({navigation}) => {
  return (
    <ScrollView>
      <Search />
      <FlatList
        data={Profiles}
        renderItem={({item}) => (
          <Previews data={item} navigation={navigation} />
        )}
      />
    </ScrollView>
  );
};

export default MessageList;
