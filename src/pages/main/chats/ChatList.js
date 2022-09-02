import {FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import Previews from './Previews';
import {Profiles} from '../../../components/Data';
import Search from '../../../components/Search';

const MessageList = ({navigation}) => {
  return (
    <SafeAreaView>
      <Search />
      <FlatList
        data={Profiles}
        renderItem={({item}) => (
          <Previews data={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

export default MessageList;
