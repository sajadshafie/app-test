import React from 'react';
import {View, StyleSheet} from 'react-native';
import DetailProfile from './DetailProfile';
import NavgateHead from './NavigateHead';
import CardRender from './CardRender';
export default function index() {
  return (
    <View style={Style.container}>
      <DetailProfile />
      <NavgateHead />
      <CardRender />
    </View>
  );
}
const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
});
