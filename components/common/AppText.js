import React from 'react';
import {Text, StyleSheet} from 'react-native';
export default function AppText({content, styleText = style.text}) {
  return <Text style={styleText}>{content}</Text>;
}

const style = StyleSheet.create({
  text: 'black',
});
