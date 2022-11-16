import React from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import AppIcon from '../../components/common/AppIcon';
import AppText from '../../components/common/AppText';
import MainPage from '../../components/Main/index';
export default function Main() {
  return (
    <FlatList
      style={{flex: 1}}
      ListHeaderComponent={
        <View style={{flex: 1}}>
          <View style={style.header_container}>
            <AppIcon icon={'AntDesign'} name="left" size={22} />
            <AppIcon
              name="ellipsis-vertical-sharp"
              icon={'Ionicons'}
              size={22}
            />
          </View>
          <MainPage />
        </View>
      }
    />
  );
}

const style = StyleSheet.create({
  header_container: {
    backgroundColor: 'black',
    height: 100,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
});
