import React from 'react';
import {Pressable, View, TouchableOpacity} from 'react-native';
import AppText from './AppText';
export default {
  touchOpacity: ({
    content,
    onPress = () => {},
    style,
    styleText,
    stylePress,
    textColor,
  }) => {
    return (
      <TouchableOpacity style={stylePress} onPress={onPress}>
        <View style={style}>
          <AppText styleText={styleText} content={content} color={textColor} />
        </View>
      </TouchableOpacity>
    );
  },
  pressable: ({
    content,
    onPress = () => {},
    style,
    styleText,
    stylePress,
    textColor,
  }) => {
    return (
      <Pressable style={stylePress} onPress={onPress}>
        <View style={style}>
          <AppText styleText={styleText} content={content} color={textColor} />
        </View>
      </Pressable>
    );
  },
};
